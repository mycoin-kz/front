<template>
  <div class="input-group">
    <UIInput
      v-if="typeof inputFields.name !== 'undefined'"
      @input="handleInput($event, 'name')"
      type="text"
      icon="person"
      placeholder="Name"
      :errors="errors.name"
      name="name"
    />
    <UIInput 
      v-if="typeof inputFields.email !== 'undefined'" 
      @input="handleInput($event, 'email')" 
      type="email" 
      icon="email"
      placeholder="Work e-mail"
      :errors="errors.email"
      name="email"
    />
    <UIInput 
      v-if="typeof inputFields.password !== 'undefined'" 
      @input="handleInput($event, 'password')" 
      type="password" 
      icon="password"
      placeholder="Password"
      :errors="errors.password"
      name="password"
      :password="true"
    />
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
import UIInput from '@/components/UI/Input.vue'

const props = defineProps({
  inputFields: Object,
  errors: Object
});
const emit = defineEmits(['update:inputFields'])

function handleInput(e, key){
  emit('update:inputFields', {...props.inputFields, [key]: e.target.value})
}
</script>

<style scoped lang="scss">
.input-group{
  display: flex;
  flex-direction: column;
  grid-gap: 0.5rem;
  margin-bottom: 1rem;
  width: 26rem;
}
</style>