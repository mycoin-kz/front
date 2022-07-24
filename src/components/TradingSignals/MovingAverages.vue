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
        <td>{{store.fulldata.techindicators.ema10.toFixed(2)}}</td>
        <td>{{store.fulldata.techindicators.ema50.toFixed(2)}}</td>
        <td :class="`sentiment-${store.fulldata.techindicators.ema_sentiment}`">
          {{store.fulldata.techindicators.ema_sentiment}}
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
        <td>{{store.fulldata.techindicators.sma10.toFixed(2)}}</td>
        <td>{{store.fulldata.techindicators.sma50.toFixed(2)}}</td>
        <td :class="`sentiment-${store.fulldata.techindicators.sma_sentiment}`">
          {{store.fulldata.techindicators.sma_sentiment}}
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
        <td>{{store.fulldata.techindicators.macd_line.toFixed(2)}}</td>
        <td>{{store.fulldata.techindicators.macd_signal.toFixed(2)}}</td>
        <td :class="`sentiment-${store.fulldata.techindicators.macd_sentiment}`">
          {{store.fulldata.techindicators.macd_sentiment}}
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

