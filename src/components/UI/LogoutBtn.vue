<template>
  <div class="logout-btn" @click="destroyToken">
    <span class="violet fz-16">Log out</span>
    <logout-icon></logout-icon>
  </div>
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