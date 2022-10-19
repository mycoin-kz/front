<template>
  <div class="container">
    <auth-layout>
      <form autocomplete="off" class="register-form" @submit.prevent="handleSubmit">
        <h3 class="fz-24 fw-500 text-center">Start your 14 days free trial</h3>
        <p class="fw-400 text-center">Already using Coinfolio? <router-link class="fw-600" :to="{name: 'Login'}">Sign In</router-link></p>
        
        <input-group :errors="errors" v-model:input-fields="inputFields"></input-group>
        <!-- {{log}} -->
        <button type="submit" class="btn-main btn-purple">Get started</button>
      </form>
    </auth-layout>
  </div>
</template>

<script setup>
import { useRegister } from '@/store/auth/register';
import { ref, computed } from 'vue';
import InputGroup from '@/components/Auth/InputGroup.vue';
import { registerValidate } from '@/helpers/validators';

const {register} = useRegister()
const handleSubmit = () => {
  registerValidate(inputFields, errors) && register(inputFields.value)
}

const inputFields = ref({
  name: '',
  email: '',
  password: ''
})
const errors = ref({
  name: [],
  email: [],
  password: []
})

const log = computed(() => {
  console.log('fullname:', inputFields.value.fullname)
  console.log('email:', inputFields.value.email)
  console.log('password:', inputFields.value.password)
  return ''
})
</script>

<style>
.register-form > h3:first-child{
  margin-top: 0;
}
</style>