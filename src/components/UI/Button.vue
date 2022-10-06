<template>
  <button>
    <div v-if="loading" class="dot-pulse"></div>
    <slot v-else></slot>
  </button>
</template>

<script>
export default {
  props: ['loading']
}
</script>

<style scoped>
button{
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>