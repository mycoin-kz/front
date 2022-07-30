<template>
  <div class="trading-signals">
    <span class="gray fw-500 with-icon message">Trading Signals</span>
    <div class="stats">
      <div class="bullish">
        <span class="key">Bullish</span>
        <span class="value">{{store.summarydata.bullish || '-'}}</span>
      </div>
      <div class="neutral">
        <span class="key">Neutral</span>
        <span class="value">{{store.summarydata.neutral || '-'}}</span>
      </div>
      <div class="bearish">
        <span class="key">Bearish</span>
        <span class="value">{{store.summarydata.bearish || '-'}}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from '@/store/index'

const store = useStore()
</script>

<style lang="scss" scoped>
.stats, .stats > div{
  display: flex;
  align-items: center;
  // justify-content: center;

  .bullish .key{
    color: #1BC5BD;
  }
  .bearish .key{
    color: #D70000;
  }
  .key{
    line-height: 22px;
    font-size: 16px;
    font-weight: 700;
  }
  .value{
    font-size: 24px;
    line-height: 2rem;
    font-weight: 700;
  }
}
.stats > div{
  flex-direction: column;
}
.stats{
  grid-gap: .5rem;
}
.trading-signals{
  display: inline-grid;
  grid-gap: .75rem;
}
</style>
