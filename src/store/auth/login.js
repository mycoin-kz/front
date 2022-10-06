import { defineStore } from "pinia";
import { useAuth } from "./token";
import { ApiLogin } from "./api";
import { notify } from "@kyvg/vue3-notification";

export const useLogin = defineStore('login', {
  state: () => ({
    loading: false
  }),
  actions: {
    login(payload){
      const auth = useAuth()
      this.loading = true
      ApiLogin(payload)
      .then((res) => {
        auth.setToken(res.jwt)
        return auth.getProfile()
      })
      .then(profile => {
        notify({
          type: 'success',
          title: 'Success',
          text: 'Signed in as ' + profile.full_name
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
