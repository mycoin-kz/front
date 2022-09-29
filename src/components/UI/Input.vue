<template>
  <div class="ui-input-wrapper">
    
    <input class="base-input" :type="getType" @input="emit('input')">
  </div>
</template>

<script setup>
import { computed, defineProps, ref, defineEmits } from 'vue';
import Icons from '../Icons/Icons.vue';

const props = defineProps({
  icon: String,
  type: String,
  password: Boolean,
})
const emit = defineEmits(['input'])

const passwordHidden = ref(true)
const getType = computed(() => {
  if (props.password){
    return passwordHidden.value ? 'password' : 'text'
  }
  return props.type
})
</script>

<style scoped>

</style>