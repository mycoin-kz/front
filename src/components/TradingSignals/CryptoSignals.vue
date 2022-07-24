<template>
<div class="crypto-signals">
  <h4>Crypto signals</h4>
  <table>
    <thead>
      <tr>
        <td>Signal</td>
        <td>Value</td>
        <td>Score</td>
        <td>Sentiment</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>inOutVar</td>
        <td>{{store.signalsdata.inoutvar.value}}</td>
        <td>{{store.signalsdata.inoutvar.score}}</td>
        <td :class="`sentiment-${store.signalsdata.inoutvar.sentiment}`">
          {{store.signalsdata.inoutvar.sentiment}}
        </td>
      </tr>
      <tr>
        <td>concetrationVar</td>
        <td>{{store.signalsdata.concentrationvar.value}}</td>
        <td>{{store.signalsdata.concentrationvar.score}}</td>
        <td :class="`sentiment-${store.signalsdata.concentrationvar.sentiment}`">
          {{store.signalsdata.concentrationvar.sentiment}}
        </td>
      </tr>
      <tr>
        <td>adressesNetGrowth</td>
        <td>{{store.signalsdata.addressesnetgrowth.value}}</td>
        <td>{{store.signalsdata.addressesnetgrowth.score}}</td>
        <td :class="`sentiment-${store.signalsdata.addressesnetgrowth.sentiment}`">
          {{store.signalsdata.addressesnetgrowth.sentiment}}
        </td>
      </tr>
      <tr>
        <td>largetxsVar</td>
        <td>{{store.signalsdata.largetxsvar.value}}</td>
        <td>{{store.signalsdata.largetxsvar.score}}</td>
        <td :class="`sentiment-${store.signalsdata.largetxsvar.sentiment}`">
          {{store.signalsdata.largetxsvar.sentiment}}
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
