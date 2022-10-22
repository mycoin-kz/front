<template>
  <div class="social-media-quality">
    <h3>Social Media</h3>
    <div class="content">
      <twitter></twitter>
      <reddit></reddit>
      <facebook></facebook>
    </div>
    <h3>Development</h3>
    <code-repo></code-repo>
  </div>
</template>

<script setup>
import Twitter from './Twitter.vue'
import CodeRepo from './CodeRepo.vue';
import Facebook from './Facebook.vue';
import Reddit from './Reddit.vue';
</script>

<style lang="scss">
.social-media-quality{
  display: grid;
  .content{
    display: grid;
    grid-gap: 2rem;

    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
}
</style>
