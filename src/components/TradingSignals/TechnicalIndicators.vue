<template>
  <table class="tech-indicators">
    <thead>
      <tr>
        <td class="fw-400 grey">Indicator</td>
        <td class="fw-400 grey">Signal</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>MACD</td>
        <!-- <td>{{store.tokens[id].fulldata.techindicators.mfi14 ? store.tokens[id].fulldata.techindicators.mfi14.toFixed(2) : '-'}}</td> -->
        <td :class="`f-400 sentiment-${store.tokens[id].fulldata.techindicators.macd_sentiment}`">
          {{store.tokens[id].fulldata.techindicators.macd_sentiment || '-'}}
        </td>
      </tr>
      <tr>
        <td>EMA-10/50d</td>
        <!-- <td>{{store.tokens[id].fulldata.techindicators.mom10 ? store.tokens[id].fulldata.techindicators.mom10.toFixed(2) : '-'}}</td> -->
        <td :class="`f-400 sentiment-${store.tokens[id].fulldata.techindicators.ema_sentiment}`">
          {{store.tokens[id].fulldata.techindicators.ema_sentiment || '-'}}
        </td>
      </tr>
      <tr>
        <td>SMA-10/50d</td>
        <!-- <td>{{store.tokens[id].fulldata.techindicators.rsi10 ? store.tokens[id].fulldata.techindicators.rsi10.toFixed(2) : '-'}}</td> -->
        <td :class="`f-400 sentiment-${store.tokens[id].fulldata.techindicators.sma_sentiment}`">
          {{store.tokens[id].fulldata.techindicators.sma_sentiment || '-'}}
        </td>
      </tr>
      <tr>
        <td>RSI-10d</td>
        <!-- <td>{{store.tokens[id].fulldata.techindicators.rsi50 ? store.tokens[id].fulldata.techindicators.rsi50.toFixed(2) : '-'}}</td> -->
        <td :class="`f-400 sentiment-${store.tokens[id].fulldata.techindicators.rsi10_sentiment}`">
          {{store.tokens[id].fulldata.techindicators.rsi10_sentiment || '-'}}
        </td>
      </tr>
      <tr>
        <td>RSI-50d</td>
        <td :class="`f-400 sentiment-${store.tokens[id].fulldata.techindicators.rsi50_sentiment}`">
          {{store.tokens[id].fulldata.techindicators.rsi50_sentiment || '-'}}
        </td>
      </tr>
      <tr>
        <td>MOM-10d</td>
        <td :class="`f-400 sentiment-${store.tokens[id].fulldata.techindicators.mom10_sentiment}`">
          {{store.tokens[id].fulldata.techindicators.mom10_sentiment || '-'}}
        </td>
      </tr>
      <tr>
        <td>MFI-14d</td>
        <td :class="`f-400 sentiment-${store.tokens[id].fulldata.techindicators.mfi14_sentiment}`">
          {{store.tokens[id].fulldata.techindicators.mfi14_sentiment || '-'}}
        </td>
      </tr>
    </tbody>
  </table>
</template>


<script setup>
import {useStore} from '@/store/index'
import { computed } from '@vue/reactivity';
import { useRoute } from 'vue-router'


const id = useRoute().params.id

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
