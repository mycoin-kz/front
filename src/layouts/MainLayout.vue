<template>
  <div class="main-layout">
    <sidebar :links="links"></sidebar>
    <app-header></app-header>
    <section class="content">
      <slot></slot>
    </section>
  </div>
</template>

<script setup>
import AppHeader from '@/components/Header.vue'
import Sidebar from '@/components/Sidebar.vue'


const links = [
  {
    name: 'Feed',
    icon: 'feed',
    availible: true,
  },
  {
    name: 'Explore',
    icon: 'explore',
    availible: true,
  },
  {
    name: 'Watchlist',
    icon: 'star-rounded',
    availible: false,
  },
  {
    name: 'Portfolio',
    icon: 'stock',
    availible: false,
  },
  {
    name: 'My Profile',
    icon: 'person',
    availible: false,
  },
]
</script>

<style lang="scss">
.main-layout{
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  width: 100vw;
  height: 100vh;
  background: #F0EEF4;

  aside.sidebar{
    grid-row: 1/3;
    grid-column: 1/2;
  }
  header{
    grid-row: 1/2;
    grid-column: 2/3;
    padding: 1rem 3.5rem;
  }
  section.content{
    padding: 0 3.5rem;
    overflow-y: auto;
    padding-bottom: 4rem;
  }
}
</style>