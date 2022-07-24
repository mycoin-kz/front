<template>
  <div class="main">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script setup>
/* eslint-disable */
import AppHeader from './components/Header.vue'
import Summary from './pages/Summary.vue'
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@500;600;700&display=swap');
@import './assets/scss/main.scss';

#app{
  font-family: 'Manrope', sans-serif;
  box-sizing: border-box;
  overflow: hidden;
}

.main{
  background: #F7F7F7;
  min-height: 100vh;
  width: 100vw;
}
</style>
