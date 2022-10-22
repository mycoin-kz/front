import { notify } from "@kyvg/vue3-notification";
import { defineStore } from 'pinia'
import axios from 'axios'
/* eslint-disable */
export const useStore = defineStore('main', {
  state: () => ({
    base_url: 'https://seashell-app-wiort.ondigitalocean.app/',
    loading: false,
    loading_overall: false,
    overall_tokens: [],
    error: '',
    tokens: {}
  }),
  actions: {
    async fetchData(id){
      this.loading = true
      this.tokens[id] = {}

      return new Promise((resolve, reject) => {
        axios.get(this.base_url + `fulldata/${id}`)
        .then(res => {
          this.tokens[id].fulldata = res.data
          return axios.get(this.base_url + `signalsdata/${id}`)
        })
        .then(res => {
          this.tokens[id].signalsdata = res.data
          return axios.get(this.base_url + `/summarydata/${id}`)
        })
        .then(res => {
          this.tokens[id].summarydata = res.data
          this.loading = false
        })
        .catch(err => {
          this.loading = false
          this.error = err.message
          notify({
            type: 'error',
            title: 'Error when fetching token data',
            text: 'Unhandled error in server response: ' + this.error,
          })
          reject(err)
        })
      })
    },
    async fetchOverallTokens(){
      this.loading_overall = true
      return new Promise((resolve, reject) => {
        axios.get(this.base_url + `summarydata`)
        .then(res => {
          this.overall_tokens = res.data
          this.loading_overall = false
        })
        .catch(err => {
          this.loading_overall = false
          this.error = err.message
          notify({
            type: 'error',
            title: 'Error when fetching token data',
            text: 'Unhandled error in server response: ' + this.error,
          })
          reject(err)
        })
      })
    }
  }
})
