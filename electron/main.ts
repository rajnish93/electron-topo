// import path from 'path'
// import { app, BrowserWindow } from 'electron'

// app.whenReady().then(() => {
//   const appRootDir = app.getAppPath()
//   const isDev = process.env.NODE_ENV === 'development'
//   const win = new BrowserWindow({
//     width: 1280,
//     height: 720,
//     webPreferences: {
//       nodeIntegration: true, // Ensure this is set for loading local files
//       contextIsolation: false, // May be required depending on how you use Node.js in the renderer
//     },
//   })

//   if (isDev) {
//     win.loadURL('http://localhost:3000')
//   }
//   else {
//     win.loadFile(path.join(appRootDir, '.output', 'public', 'index.html'))
//   }
// })

import path from 'path'
import http from 'http'
import fs from 'fs'
import { app, BrowserWindow } from 'electron'
import mime from 'mime-types'
import getPort from 'get-port'

// const PORT = 3001 // Port for the static server

app.whenReady().then(async () => {
  const appRootDir = app.getAppPath()
  const isDev = process.env.NODE_ENV === 'development'

  // Create a simple HTTP server to serve static files
  const server = http.createServer((req, res) => {
    // Determine the file path based on the request
    const filePath = path.join(
      appRootDir,
      '.output',
      'public',
      req.url === '/' || req.url === undefined ? 'index.html' : req.url,
    )

    // Read the file from the filesystem
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' })
        res.end('File Not Found')
        return
      }

      // Set the correct MIME type for the file
      const mimeType = mime.lookup(filePath) || 'application/octet-stream'
      res.writeHead(200, { 'Content-Type': mimeType })
      res.end(data)
    })
  })

  const PORT = await getPort({ port: 9000 })

  // Start the server
  server.listen(PORT, () => {
    console.log(`Static file server running at http://localhost:${PORT}`)
  })

  // Create the Electron window
  const win = new BrowserWindow({
    width: 1280,
    height: 720,
    webPreferences: {
      // nodeIntegration: true, // Allow node integration if necessary
      // contextIsolation: false, // Disable context isolation if using nodeIntegration
      // nodeIntegration: false, // Disable Node.js integration for security
      // contextIsolation: true, // Enable context isolation for better security
      // sandbox: true,
    },
  })

  if (isDev) {
    win.loadURL('http://localhost:3000') // For development, load Nuxt's dev server
  }
  else {
    // In production, load from the local static file server
    win.loadURL(`http://localhost:${PORT}`)
  }
})
