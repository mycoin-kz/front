import { defineStore } from "pinia";


export const useRegister = defineStore('register', {
  actions: {
    register(){
      console.log('registered successfully!')
      this.router.push({name: 'Login'})
    }
  }
})
