<template>
  <div class="container">
    <p>REGISTER</p>
    <button @click="register">register now!</button>
  </div>
</template>

<script setup>
import { useRegister } from '@/store/auth/register'
const {register} = useRegister()
</script>

<style>

</style>