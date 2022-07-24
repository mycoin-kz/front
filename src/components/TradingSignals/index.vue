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
table{
  font-weight: 600;
  font-size: 14px;

  thead{
    background: #F3F6F9;
    border-radius: 8px;
  }
  td{
    padding: .75rem 1rem;
    word-wrap: break-word;
  }
  .sentiment-bearish{
    color: #D70000;
  }
  .sentiment-bullish{
    color: #1BC5BD;
  }
}
h4{
  font-weight: 600;
  margin: 1rem 0;
  font-size: 14px;
}
</style>
