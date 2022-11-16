<template>
  <router-link to="/logout" class="logout-btn">
    <span class="purple fz-16">Log out</span>
    <logout-icon></logout-icon>
  </router-link>
</template>

<script setup>
import LogoutIcon from '@/components/Icons/logout.vue'

import { useAuth } from '@/store/auth/token';
const {destroyToken} = useAuth()
</script>

<style lang="scss">
.logout-btn{
  display: flex;
  align-items: center;
  justify-content: center;
  grid-gap: 1rem;

  cursor: pointer;

  &:hover{
    text-decoration: underline;
  }
}
</style>