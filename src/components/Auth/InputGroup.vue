<template>
  <div class="input-group">
    <UIInput
      v-if="typeof inputFields.fullname !== 'undefined'"
      @input="handleInput($event, 'fullname')"
      type="text"
    />
    <UIInput 
      v-if="typeof inputFields.email !== 'undefined'" 
      @input="handleInput($event, 'email')" 
      type="email" 
    />
    <UIInput 
      v-if="typeof inputFields.password !== 'undefined'" 
      @input="handleInput($event, 'password')" 
      type="password" 
    />
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
import UIInput from '@/components/UI/Input.vue'

const props = defineProps({
  inputFields: Object,
});
const emit = defineEmits(['update:inputFields'])

function handleInput(e, key){
  emit('update:inputFields', {...props.inputFields, [key]: e.target.value})
}
</script>

<style>
</style>