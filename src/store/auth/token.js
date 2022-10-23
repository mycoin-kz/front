import { defineStore } from "pinia";
import { base_url } from "./api";
import axios from 'axios'


export const useAuth = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('jwt') || null,
    profile: null
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
    },
    destroyToken(){
      this.token = null
      localStorage.removeItem('jwt')
      this.router.push('/login')
    },
    async getProfile(){
      const res = await axios.post(base_url + 'auth/profile')
      this.profile = res.data
      return res
    }
  }
})
