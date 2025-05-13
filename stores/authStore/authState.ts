import type { AuthState } from './types'

const state = (): AuthState => ({
  name: '',
  isLoggedIn: false,
})

export default state
