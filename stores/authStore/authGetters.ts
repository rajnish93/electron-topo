import type { AuthStore, AuthGetters, AuthGettersAdaptor } from './types'

const getters: AuthGettersAdaptor<AuthGetters, AuthStore> = {
  message() {
    return this.isLoggedIn ? `Welcome ${this.name}!` : 'Please login!'
  },
}

export default getters
