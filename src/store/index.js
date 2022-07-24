import { defineStore } from 'pinia'
import axios from 'axios'

export const useStore = defineStore('main', {
  state: () => ({
    base_url: 'https://seashell-app-wiort.ondigitalocean.app/',
    loading: false,
    fulldata: null,
    signalsdata: null,
    summarydata: null
  }),
  actions: {
    async fetchData(id='1182'){
      this.loading = true
      // check if last fetch has been done in the same day
      const hasData = localStorage.getItem('lastFetch'+id) && (new Date()).getDate() === (new Date(localStorage.getItem('lastFetch'+id)).getDate())
      // if yes, also check for corresponding data and write it to our state
      if (hasData && localStorage.getItem('fulldata'+id) && localStorage.getItem('signalsdata'+id) && localStorage.getItem('summarydata'+id)){
        this.fulldata = JSON.parse(localStorage.getItem('fulldata'+id))
        this.signalsdata = JSON.parse(localStorage.getItem('signalsdata'+id))
        this.summarydata = JSON.parse(localStorage.getItem('summarydata'+id))
        this.loading = false
        return
      }
      // if we didn't fetch data on this day, then fetch again and also write fetch date to local storage
      localStorage.setItem('lastFetch'+id, (new Date())+'')
      return new Promise((resolve, reject) => {
        axios.get(this.base_url + `fulldata/${id}`)
        .then(res => {
          this.fulldata = res.data
          localStorage.setItem('fulldata'+id, JSON.stringify(this.fulldata))
          console.log('fetch chaining started, first result:', res.data)
          return axios.get(this.base_url + `signalsdata/${id}`)
        })
        .then(res => {
          this.signalsdata = res.data
          localStorage.setItem('signalsdata'+id, JSON.stringify(this.signalsdata))
          console.log('second result:', res.data)
          return axios.get(this.base_url + `/summarydata/${id}`)
        })
        .then(res => {
          this.summarydata = res.data
          localStorage.setItem('summarydata'+id, JSON.stringify(this.summarydata))
          console.log('fetch chaining ended, third result:', res.data)
          this.loading = false
        })
        .catch(err => {
          console.log('some error occured during fetch: ', err)
          reject(err)
        })
      })
    }
  }
})
