<template>
<div class="tech-indicators">
  <h4>Technical Indicators</h4>
  <table>
    <thead>
      <tr>
        <td>MFI14</td>
        <td>Sentiment</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{{store.fulldata.techindicators.ema10 ? store.fulldata.techindicators.ema10.toFixed(2) : '-'}}</td>
        <td :class="`sentiment-${store.fulldata.techindicators.ema_sentiment}`">
          {{store.fulldata.techindicators.ema_sentiment || '-'}}
        </td>
      </tr>
    </tbody>
    <thead>
      <tr>
        <td>MOM10</td>
        <td>Sentiment</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{{store.fulldata.techindicators.sma10 ? store.fulldata.techindicators.sma10.toFixed(2) : '-'}}</td>
        <td :class="`sentiment-${store.fulldata.techindicators.sma_sentiment}`">
          {{store.fulldata.techindicators.sma_sentiment || '-'}}
        </td>
      </tr>
    </tbody>
    <thead>
      <tr>
        <td>RSI10</td>
        <td>Sentiment</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{{store.fulldata.techindicators.rsi10 ? store.fulldata.techindicators.rsi10.toFixed(2) : '-'}}</td>
        <td :class="`sentiment-${store.fulldata.techindicators.rsi10_sentiment}`">
          {{store.fulldata.techindicators.rsi10_sentiment || '-'}}
        </td>
      </tr>
    </tbody>
    <thead>
      <tr>
        <td>RSI50</td>
        <td>Sentiment</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{{store.fulldata.techindicators.rsi50 ? store.fulldata.techindicators.rsi50.toFixed(2) : '-'}}</td>
        <td :class="`sentiment-${store.fulldata.techindicators.rsi50_sentiment}`">
          {{store.fulldata.techindicators.rsi50_sentiment || '-'}}
        </td>
      </tr>
    </tbody>
  </table>
</div>
</template>


<script setup>
import {useStore} from '@/store/index'
import { computed } from '@vue/reactivity';

const store = useStore()
</script>

<style scoped>
.block{
  display: flex;
  grid-gap: 2rem;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>

<style lang="scss">
.tech-indicators{
  display: grid;
}
.tech-indicators table{
  // width: 300px;
}
</style>
