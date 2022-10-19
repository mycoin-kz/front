<template>
  <div class="mainpage">
    <main-layout>
      <div class="text-center" v-if="store.loading">
        <loading-spinner/>
      </div>
      <div v-else-if="store.error">
        {{store.error}}
      </div>
      <div v-else>
        <token-summary></token-summary>
        <trading-signals></trading-signals>
        <socials></socials>
      </div>
    </main-layout>
  </div>
</template>

<script setup>
import TokenSummary from '@/components/TokenSummary'
import TradingSignals from '@/components/TradingSignals'
import Socials from '@/components/SocialMediaQuality'
import LoadingSpinner from '@/components/UI/Loader.vue'

import { useStore } from '@/store/index'
import { useRoute } from 'vue-router'

const store = useStore()

const id = useRoute().params.id
if (id){
  useStore().fetchData(id)
} else {
  useStore().fetchData()
}
</script>

<style lang="scss">
.mainpage{
  padding-bottom: 2rem;
}
.block{
  background: #FCFCFC;
  border-radius: 15px;
  display: inline-block;
}
</style>
