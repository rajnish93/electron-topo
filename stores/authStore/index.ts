import state from './authState'
import getters from './authGetters'
import actions from './authActions'

export const useAuthStore = defineStore('authStore', {
  state,
  getters,
  actions,
  persist: true,
})
