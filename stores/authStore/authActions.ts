import type { AuthState, AuthActions } from './types'

const actions: AuthActions & ThisType<AuthState> = {
  login(data) {
    console.log('data', data)
    this.name = data
    this.isLoggedIn = true
  },
  logout() {
    this.name = ''
    this.isLoggedIn = false
  },
}

export default actions
