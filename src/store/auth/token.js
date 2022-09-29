import { defineStore } from "pinia";

export const useAuth = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('jwt') || null,
  }),
  getters: {
    isAuthenticated(){
      return this.token !== null && !!this.token
    }
  },
  actions: {
    setToken(token){
      this.token = token
      localStorage.setItem('jwt', this.token)
      console.log(this.token)
    },
    destroyToken(){
      this.token = null
      localStorage.removeItem('jwt')
      console.log(this.token)
      this.router.push('/login')
    }
  }
})
