<template>
<div class="moving-averages">
  <h4>Moving Averages</h4>
  <table>
    <thead>
      <tr>
        <td>EMA10</td>
        <td>EMA50</td>
        <td>Sentiment</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{{store.tokens[id].fulldata.techindicators.ema10 ? store.tokens[id].fulldata.techindicators.ema10.toFixed(2) : '-'}}</td>
        <td>{{store.tokens[id].fulldata.techindicators.ema50 ? store.tokens[id].fulldata.techindicators.ema50.toFixed(2) : '-'}}</td>
        <td :class="`sentiment-${store.tokens[id].fulldata.techindicators.ema_sentiment}`">
          {{store.tokens[id].fulldata.techindicators.ema_sentiment || '-'}}
        </td>
      </tr>
    </tbody>
    <thead>
      <tr>
        <td>SMA10</td>
        <td>SMA50</td>
        <td>Sentiment</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{{store.tokens[id].fulldata.techindicators.sma10 ? store.tokens[id].fulldata.techindicators.sma10.toFixed(2) : '-'}}</td>
        <td>{{store.tokens[id].fulldata.techindicators.sma50 ? store.tokens[id].fulldata.techindicators.sma50.toFixed(2) : '-'}}</td>
        <td :class="`sentiment-${store.tokens[id].fulldata.techindicators.sma_sentiment}`">
          {{store.tokens[id].fulldata.techindicators.sma_sentiment || '-'}}
        </td>
      </tr>
    </tbody>
    <thead>
      <tr>
        <td>MACDl</td>
        <td>MACDs</td>
        <td>Sentiment</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{{store.tokens[id].fulldata.techindicators.macd_line ? store.tokens[id].fulldata.techindicators.macd_line.toFixed(2) : '-'}}</td>
        <td>{{store.tokens[id].fulldata.techindicators.macd_signal ? store.tokens[id].fulldata.techindicators.macd_signal.toFixed(2) : '-'}}</td>
        <td :class="`sentiment-${store.tokens[id].fulldata.techindicators.macd_sentiment}`">
          {{store.tokens[id].fulldata.techindicators.macd_sentiment || '-'}}
        </td>
      </tr>
    </tbody>
  </table>
</div>
</template>


<script setup>
import {useStore} from '@/store/index'
import { computed } from '@vue/reactivity';
import { useRoute } from 'vue-router'


const id = useRoute().params.id

const store = useStore()
</script>

