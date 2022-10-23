<template>
  <table class="trading-signals">
    <thead>
      <tr>
        <td class="green fw-400 token-bullish">Bullish</td>
        <td class="yellow fw-400 token-neutral">Neutral</td>
        <td class="red fw-400 token-bearish">Bearish</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="fw-400">{{ store.tokens[id].summarydata.bullish }}</td>
        <td class="fw-400">{{ store.tokens[id].summarydata.neutral }}</td>
        <td class="fw-400">{{ store.tokens[id].summarydata.bearish }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { useStore } from '@/store/index'
import { useRoute } from 'vue-router'


const id = useRoute().params.id

const store = useStore()
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars';

table{
  td{
    text-align: center;
  }
}
</style>