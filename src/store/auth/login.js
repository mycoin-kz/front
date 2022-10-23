import { defineStore } from "pinia";
import { useAuth } from "./token";
import { base_url } from "./api";
import { notify } from "@kyvg/vue3-notification";
import { useStore } from "..";
import axios from 'axios'

export const useLogin = defineStore('login', {
  state: () => ({
    loading: false,
    profile: {}
  }),
  actions: {
    login(payload){
      const auth = useAuth()
      this.loading = true
      axios.post(base_url + 'auth/login', payload)
      .then((res) => {
        auth.setToken(res.data.jwt)
        return auth.getProfile()
      })
      .then(profile => {
        const store = useStore()
        store.fetchOverallTokens()
        store.getWatchlist()
        this.profile = profile
        notify({
          type: 'success',
          title: 'Success',
          text: 'Signed in as ' + profile.name
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
    }
  }
})
