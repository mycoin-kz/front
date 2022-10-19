<template>
  <div class="ui-input-wrapper" :class="{'error': errors.length}" ref="wrapper">
    <Icons v-if="icon" :icon="icon"></Icons>
    <input :name="name" :placeholder="placeholder" class="base-input fz-16" :type="getType" @input="($event) => emit('input', $event)">
    <Icons 
      v-if="password" 
      :icon="passwordHidden ? 'password-hidden' : 'password-visible'" 
      @click="passwordHidden=!passwordHidden"
      class="password-btn cursor"
    />
  </div>
  <div class="errors" v-if="errors.length" ref="errorsRef">
    <span class="error" v-for="(error, index) in errors" :key="index">{{error}}</span>
  </div>
</template>

<script setup>
import { computed, defineProps, ref, defineEmits } from 'vue';

const props = defineProps({
  icon: String,
  type: String,
  password: Boolean,
  placeholder: String,
  errors: Array,
  name: String
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

<style scoped lang="scss">
@import '@/assets/scss/_vars.scss';

.base-input{
  border: none;
  background: transparent;
}
.ui-input-wrapper{
  border: 1px solid $lightgray;
  border-radius: 8px;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  grid-gap: 1.125rem;

  .base-input{
    flex-grow: 1;
    outline: none;
  }
  &.error{
    border-color: $error;
  }
}
.errors{
  display: flex;
  flex-direction: column;
  grid-gap: 0.25em;
}
</style>