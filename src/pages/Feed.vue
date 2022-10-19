<template>
  <main-layout>
    <div class="watchlist">
      <h3 class="w-600">Watchlist TOP-5</h3>
      <table-grid :loading="loading" :tokens="overall_tokens.slice(0, 5)"></table-grid>
    </div>
    <div class="mosts">
      <div class="most-bullish">
        <h3 class="w-600">Most Bullish</h3>
        <table-grid :loading="loading" :fields="['bullish']" :tokens="most_bullish"></table-grid>
      </div>
      <div class="most-bearish">
        <h3 class="w-600">Most Bearish</h3>
        <table-grid :loading="loading" :fields="['bearish']" :tokens="most_bearish"></table-grid>
      </div>
      <div class="twitter-trending">
        <h3 class="w-600">Twitter Trending</h3>
        <table-grid :loading="loading" :fields="['score']" :tokens="twitter_trending"></table-grid>
      </div>
    </div>
  </main-layout>
</template>

<script setup>
import {useStore} from '@/store/index'
import {storeToRefs} from 'pinia'
import {computed} from 'vue'

import TableGrid from '@/components/TableGrid.vue'

const store = useStore()
const { overall_tokens, loading } = storeToRefs(store)

const most_bullish = computed(() => [...overall_tokens.value].sort((a, b) => b.bullish - a.bullish).slice(0, 3))
const most_bearish = computed(() => [...overall_tokens.value].sort((a, b) => b.bearish - a.bearish).slice(0, 3))
const twitter_trending = computed(() => overall_tokens.value.filter(el => el.total_perc).sort((a, b) => b.total_perc - a.total_perc).slice(0, 3))
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars';

.mosts{
  display: flex;
  justify-content: space-between;
  grid-gap: 1.5rem;
}
.watchlist,
.most-bullish,
.most-bearish,
.twitter-trending{
  background: $white;
  border-radius: 12px;
  padding-top: 1.75rem;
  margin-bottom: 1.5rem;
  flex: 1 1 0;
}
h3{
  margin: 0 0 0 1.5rem;
}
</style>