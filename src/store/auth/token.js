import { defineStore } from "pinia";
import { base_url } from "./api";
import _axios from 'axios'

const axios = _axios.create({withCredentials: true})

export const useAuth = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('jwt') || null,
    profile: null,
    auth_method: null
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
      try{
        await axios.get(base_url + 'auth/user')
        const res = await axios.get(base_url + 'auth/profile')
        this.setToken("AUTH_TOKEN")
        this.profile = res.data
        return res
      }
      catch (e){
        if (e.response.status === 403 || e.response.status === 401){
          this.destroyToken()
          this.profile = null
          return null
        }
      }
    }
  }
})
