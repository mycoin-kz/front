<template>
  <notifications />
  <router-view></router-view>
</template>

<script setup>
/* eslint-disable */
import { useRoute } from 'vue-router'
import {useStore} from '@/store/index'
import { onMounted } from 'vue-demi'

const route = useRoute()
onMounted(() => {
  useStore().fetchOverallTokens()
})
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@500;600;700&display=swap');
@import './assets/scss/main.scss';

#app{
  font-family: 'Manrope', sans-serif;
  box-sizing: border-box;
  overflow: hidden;
  min-height: 100vh;
}
</style>
