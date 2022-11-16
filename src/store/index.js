import { notify } from "@kyvg/vue3-notification";
import { defineStore } from 'pinia'
import { base_url as django_url } from "./auth/api";
import { useAuth } from "./auth/token";
import _axios from 'axios'

const axios = _axios.create({withCredentials: true})

/* eslint-disable */
export const useStore = defineStore('main', {
  state: () => ({
    base_url: 'https://seashell-app-wiort.ondigitalocean.app/',
    loading: false,
    loading_overall: false,
    overall_tokens: [],
    error: '',
    tokens: {},
    watchlist: {
      loading: false,
      data: []
    },
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
          resolve(res)
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
          resolve(res)
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
    },
    async getWatchlist(){
      this.watchlist.loading = true
      const store = useAuth()
      return new Promise((resolve, reject) => {
        axios.get(django_url + 'watchlist')
        .then(res => {
          this.watchlist.data = res.data.map(el => this.overall_tokens.filter(token => token.cryptocompare_id+"" === el.token)[0])
          this.watchlist.loading = false
          resolve(res)
        })
        .catch(err => {
          this.error = err.message
          store.isAuthenticated || notify({
            type: 'error',
            title: 'Error when fetching watchlist',
            text: 'Unhandled error in server response: ' + this.error,
          })
          this.watchlist.loading = false
          reject(err)
        })
        .finally(res => this.watchlist.loading = false)
      })
    },
    async addToWatchlist(token_id){
      this.watchlist.loading = true
      const store = useAuth()
      return new Promise((resolve, reject) => {
        axios.post(django_url + 'watchlist', {
          token: token_id
        })
        .then(res => {
          this.watchlist.data = res.data.map(el => this.overall_tokens.filter(token => token.cryptocompare_id+"" === el.token)[0])
          this.watchlist.loading = false
          resolve(res)
        })
        .catch(err => {
          this.error = err.message
          notify({
            type: 'error',
            title: 'Error when fetching watchlist',
            text: 'Unhandled error in server response: ' + this.error,
          })
          this.watchlist.loading = false
          reject(err)
        })
        .finally(res => this.watchlist.loading = false)
      })
    },
    async removeFromWatchlist(token_id){
      this.watchlist.loading = true
      const store = useAuth()
      return new Promise((resolve, reject) => {
        axios.delete(django_url + 'watchlist/' + token_id)
        .then(res => {
          this.watchlist.data = res.data.map(el => this.overall_tokens.filter(token => token.cryptocompare_id+"" === el.token)[0])
          this.watchlist.loading = false
          resolve(res)
        })
        .catch(err => {
          this.error = err.message
          notify({
            type: 'error',
            title: 'Error when fetching watchlist',
            text: 'Unhandled error in server response: ' + this.error,
          })
          this.watchlist.loading = false
          reject(err)
        })
        .finally(res => this.watchlist.loading = false)
      })
    }
  }
})
