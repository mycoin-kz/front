<template>
  <div class="container">
    <auth-layout>
      <form novalidate class="login-form" @submit.prevent="submitHandler">
        <h3 class="fz-24 fw-500 text-center">Welcome back!</h3>
        <p class="fw-400 text-center">Don't have an account yet? <router-link class="fw-600" :to="{name: 'Register'}">Sign Up</router-link></p>
        
        <input-group :errors="errors" v-model:input-fields="inputFields"></input-group>
        <!-- {{log}} -->
        
        <UIButton type="submit" class="btn-main btn-purple" :loading="loading">Login</UIButton>
      </form>
    </auth-layout>
  </div>
</template>

<script setup>
import { useLogin } from '@/store/auth/login'
import {loginValidate} from '@/helpers/validators'

import { ref, computed } from 'vue';
import { storeToRefs } from 'pinia';

import InputGroup from '@/components/Auth/InputGroup.vue';
import UIButton from '@/components/UI/Button.vue'

const inputFields = ref({
  email: '',
  password: ''
})
const errors = ref({
  email: [],
  password: []
})


const {loading} = storeToRefs(useLogin())
const {login} = useLogin()
const validate = () => loginValidate(inputFields, errors)
const submitHandler = () => {
  console.log('submitted login form, validation result:', validate())
  validate() && login(inputFields.value)
}


const log = computed(() => {
  console.log('email:', inputFields.value.email)
  console.log('password:', inputFields.value.password)
  return ''
})
</script>

<style>
.login-form > h3:first-child{
  margin-top: 0;
}
</style>