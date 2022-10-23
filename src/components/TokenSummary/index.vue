<template>
  <div class="token-summary">
    <div class="token-name">
      <token-thumb :token="token" class="token-big"></token-thumb>
      <div>
        <UIButton 
          :loading="store.watchlist.loading" 
          v-if="!store.watchlist.data.map(el => el.cryptocompare_id+'').includes(id)" 
          class="btn-main btn-purple fz-14"
          @click="() => store.addToWatchlist(id)"
        >
          Add to Watchlist
        </UIButton>
        <UIButton 
          :loading="store.watchlist.loading" 
          v-else 
          class="btn-main btn-purple fz-14"
          @click="() => store.removeFromWatchlist(id)"
        >
          Remove from Watchlist
        </UIButton>
      </div>
    </div>
    <signals></signals>
  </div>
</template>


<script setup>
import TradingSignals from './TradingSignals.vue'
import Signals from './Signals.vue'
import Social from './SocialMediaQuality.vue'
import TokenThumb from '@/components/UI/Token.vue'
import UIButton from '@/components/UI/Button.vue'

import {useStore} from '@/store/index'
import {computed} from 'vue'
import { useRoute } from 'vue-router'


const id = useRoute().params.id
const store = useStore()

const token = computed(() => ({
  imageurl: store.tokens[id].summarydata.imageurl,
  coinname: store.tokens[id].summarydata.fullname,
  symbol: store.tokens[id].summarydata.symbol,
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
  justify-content: space-between;
}
.blocks{
  display: flex;
  grid-gap: 4rem;
}
.token-summary{
  display: flex;
  flex-direction: column;
  grid-gap: 1.5rem;
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
