import path from 'path'
import { app, BrowserWindow } from 'electron'

app.whenReady().then(() => {
  const appRootDir = app.getAppPath()
  const isDev = process.env.NODE_ENV === 'development'
  const win = new BrowserWindow()

  if (isDev) {
    win.loadURL('http://localhost:3000')
  }
  else {
    win.loadFile(path.join(appRootDir, '.output', 'public', 'index.html'))
  }
})
