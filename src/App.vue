<template>
  <notifications />
  <router-view></router-view>
</template>

<script setup>
/* eslint-disable */
import { onMounted } from 'vue-demi'
import { useRoute } from 'vue-router'
import { useStore } from './store'

const route = useRoute()

onMounted(() => {
  const store = useStore()
  if (!store.overall_tokens.length){
    store.fetchOverallTokens()
  }
  if (!store.watchlist.data.length){
    store.getWatchlist()
  }
})
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap');
@import './assets/scss/main.scss';

#app{
  font-family: 'Manrope', sans-serif;
  box-sizing: border-box;
  overflow: hidden;
  min-height: 100vh;
}
</style>
