import { defineStore } from "pinia";
import axios from 'axios'
import { base_url } from "./api";

export const useRegister = defineStore('register', {
  actions: {
    register(payload){
      axios.post(base_url + 'auth/register', payload)
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
