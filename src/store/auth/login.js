import { defineStore } from "pinia";
// import {router} from '@/router'
import { useAuth } from "./token";


export const useLogin = defineStore('login', {
  actions: {
    login(){
      const auth = useAuth()
      const token = 'JWT_TOKEN'
      auth.token = token
      localStorage.setItem('jwt', auth.token)
      console.log('logged in successfully!', useAuth().token)
      this.router.push('/')
    }
  }
})
