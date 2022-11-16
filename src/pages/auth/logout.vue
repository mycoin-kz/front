<template>
  <div class="container">
    <Loader v-if="store.loading"></Loader>
  </div>
</template>

<script setup>
import Loader from '@/components/UI/Loader.vue'
import { useLogin } from '@/store/auth/login';
import {onMounted} from 'vue'

const store = useLogin()

onMounted(() => store.logout())
</script>