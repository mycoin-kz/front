import { defineStore } from "pinia";
import { useAuth } from "./token";
import { API_LOGIN, API_LOGOUT } from "./api";
import { notify } from "@kyvg/vue3-notification";
import { useStore } from "..";
import _axios from 'axios'

const axios = _axios.create({withCredentials: true})

export const useLogin = defineStore('login', {
  state: () => ({
    loading: false,
  }),
  actions: {
    login(payload){
      const auth = useAuth()
      this.loading = true
      axios.post(API_LOGIN, payload)
      .then((res) => {
        auth.setToken("AUTH_TOKEN")
        return auth.getProfile()
      })
      .then(profile => {
        const store = useStore()
        store.fetchOverallTokens()
        store.getWatchlist()
        notify({
          type: 'success',
          title: 'Success',
          text: 'Signed in as ' + profile.data.name
        })
        this.router.push('/')
      })
      .catch(err => {
        notify({
          type: 'error',
          title: 'Error when trying to sign in',
          text: 'Unhandled error in server response. Probably you have entered invalid credentials.',
        })
      })
      .finally(() => {
        this.loading = false
      })
    },
    logout(){
      const auth = useAuth()
      this.loading = true
      axios.post(API_LOGOUT)
      .then(res => {
        notify({
          text: 'See you soon!'
        })
        auth.destroyToken()
      })
      .finally(() => {
        this.loading = false
      })
    }
  }
})
