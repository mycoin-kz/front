import { defineStore } from "pinia";

export const useResetPass = defineStore('resetPass', {
  actions: {
    sendResetEmail(){
      console.log('Email sent for password reset!')
    }
  }
})
