<template>
  <div class="token-summary">
    <h3>Token Summary</h3>
    <div class="blocks">
      <div class="token-name">
        <div class="token-image">
          <img :src="store.summarydata.imageurl" alt="token-image">
        </div>
        <span class="token-fullname">{{ store.summarydata.fullname }}</span>
      </div>
      <trading-signals></trading-signals>
      <social></social>
    </div>
  </div>
</template>


<script setup>
import TradingSignals from './TradingSignals.vue'
import Social from './SocialMediaQuality.vue'

import {useStore} from '@/store/index'

const store = useStore()
</script>

<style lang="scss" scoped>
.token-image{
  width: 50px;
  height: 50px;
}
.token-fullname{
  font-size: 20px;
  font-weight: 700;
}
.block.token-name{
  padding: 30px;
}
.token-name{
  display: inline-flex;
  align-items: center;
  grid-gap: 20px;
}
.blocks{
  display: flex;
  grid-gap: 4rem;
}
</style>
