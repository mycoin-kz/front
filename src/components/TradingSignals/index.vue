<template>
  <div class="trading-signals">
    <h3>Trading signals</h3>
    <div class="blocks">
      <signals></signals>
      <averages></averages>
      <indicators></indicators>
    </div>
  </div>
</template>

<script setup>
import Signals from './CryptoSignals.vue'
import Averages from './MovingAverages.vue'
import Indicators from './TechnicalIndicators.vue'
</script>


<style scoped>
.blocks{
  display: flex;
  grid-gap: 2rem;
  flex-wrap: wrap;
  /* justify-content: space-between; */
}
</style>

<style lang="scss">
@import '@/assets/scss/vars';

h4{
  font-weight: 600;
  margin: 1rem 0;
  font-size: 14px;
}
</style>
