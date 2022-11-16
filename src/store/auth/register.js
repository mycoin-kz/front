import { defineStore } from "pinia";
import axios from 'axios'
import { API_REGISTER } from "./api";

export const useRegister = defineStore('register', {
  actions: {
    register(payload){
      axios.post(API_REGISTER, payload)
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
