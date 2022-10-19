<template>
  <div class="token-summary">
    <div class="token-name">
      <token-thumb :token="token" class="token-big"></token-thumb>
      <!-- <div class="token-image">
        <img :src="store.summarydata.imageurl" :alt="store.summarydata.fullname">
      </div>
      <span class="token-fullname">{{ store.summarydata.fullname }}</span> -->
    </div>
    <div class="blocks">
      <trading-signals></trading-signals>
      <social></social>
    </div>
  </div>
</template>


<script setup>
import TradingSignals from './TradingSignals.vue'
import Social from './SocialMediaQuality.vue'
import TokenThumb from '@/components/UI/Token.vue'

import {useStore} from '@/store/index'
import {computed} from 'vue'


const store = useStore()

const token = computed(() => ({
  imageurl: store.summarydata.imageurl,
  coinname: store.summarydata.fullname,
  symbol: store.summarydata.symbol,
}))
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars';

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
  display: flex;
  align-items: center;
  grid-gap: 20px;
  background: $white;
  padding: 2.25rem 1.5rem;
  border-radius: 12px;
}
.blocks{
  display: flex;
  grid-gap: 4rem;
}
</style>

<style lang="scss">
.token-big{
  .coinname{
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
  }
  .token-symbol{
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
  }
}
</style>
