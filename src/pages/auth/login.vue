<template>
  <div class="container">
    <auth-layout>
      <form novalidate class="login-form" @submit.prevent="submitHandler">
        <h3 class="fz-24 fw-500 text-center">Welcome back!</h3>
        <p class="fw-400 text-center">Don't have an account yet? <router-link class="fw-600" :to="{name: 'Register'}">Sign Up</router-link></p>
        
        <input-group :errors="errors" v-model:input-fields="inputFields"></input-group>
        
        <UIButton type="submit" class="btn-main btn-purple" :loading="loading">Login</UIButton>
      </form>
      <div class="social-auth">
        <p class="gray text-center">or login with</p>
        <div class="social-icons">
          <Icons icon="facebook" class="icon-40 cursor" @click="() => facebookLogin()"/>
          <Icons icon="twitter" class="icon-40 cursor"/>
          <a :href="googleLoginLink" class="icon-40">
            <Icons icon="google" class="icon-40 cursor" />
          </a>
        </div>
      </div>
    </auth-layout>
  </div>
</template>

<script setup>
import { useLogin } from '@/store/auth/login'
import {loginValidate} from '@/helpers/validators'
import {facebookLogin} from '@/store/auth/facebook/login'
import {setup as googleSetup} from '@/store/auth/google/init'
import { googleLoginLink } from '@/store/auth/api'

import { ref, computed, inject } from 'vue';
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
  validate() && login({
    username: inputFields.value.email,
    password: inputFields.value.password
  })
}
googleSetup()
</script>

<style>
.login-form > h3:first-child{
  margin-top: 0;
}
.social-icons{
  display: flex;
  align-items: center;
  justify-content: center;
  grid-gap: 1.5rem;
}
</style>