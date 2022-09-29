<template>
  <div class="container">
    <p>forgot your password?</p>
    <button @click="sendResetEmail">Click this button to reset it!</button>
    <p><router-link :to="{name: 'Login'}">Back to login</router-link></p>
  </div>
</template>

<script setup>
import { useResetPass } from '@/store/auth/forgot_pass'

const {sendResetEmail} = useResetPass()
</script>

<style>

</style>