<template>
  <div class="container">
    <auth-layout>
      <div class="login-form">
        <h3 class="fw-500 text-center">Welcome back!</h3>
        <p class="fw-400 text-center">Don't have an account yet? <router-link :to="{name: 'Register'}">Sign Up</router-link></p>
        
        <input-group v-model:input-fields="inputFields"></input-group>
        
        <button class="btn-main btn-purple" @click="login">Login</button>
      </div>
    </auth-layout>
  </div>
</template>

<script setup>
// import { useAuth } from '@/store/auth/token';
import { useLogin } from '@/store/auth/login'
import { ref, computed } from 'vue';
import InputGroup from '@/components/Auth/InputGroup.vue';


const {login} = useLogin()
const inputFields = ref({
  fullname: '',
  password: ''
})
const log = computed(() => {
  console.log(inputFields.value)
  return true
})
</script>

<style>

</style>