<template>
  <notifications />
  <router-view></router-view>
</template>

<script setup>
/* eslint-disable */
import { useRoute } from 'vue-router'

const route = useRoute()
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
