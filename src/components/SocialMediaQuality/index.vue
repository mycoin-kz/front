<template>
  <div class="social-media-quality">
    <h3>Social Media Quality</h3>
    <div class="content">
      <twitter></twitter>
      <reddit></reddit>
      <code-repo></code-repo>
      <facebook></facebook>
    </div>
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
    display: flex;
    grid-gap: 2rem;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .content > div{
    width: 35rem;
  }
}
</style>
