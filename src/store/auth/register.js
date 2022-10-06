import { defineStore } from "pinia";
import { ApiRegister } from "./api";

export const useRegister = defineStore('register', {
  actions: {
    register(payload){
      ApiRegister(payload)
      .then((res) => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
      console.log('registered successfully!')
      this.router.push({name: 'Login'})
    }
  }
})
