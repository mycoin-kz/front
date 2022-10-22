<template>
  <table class="crypto-signals">
    <thead>
      <tr>
        <td class="grey fw-400">Signal</td>
        <!-- <td>Value</td>
        <td>Score</td> -->
        <td class="grey fw-400">Sentiment</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>In-Out Var</td>
        <!-- <td>{{store.tokens[id].signalsdata.inoutvar.value || '-'}}</td>
        <td>{{store.tokens[id].signalsdata.inoutvar.score || '-'}}</td> -->
        <td :class="`sentiment-${store.tokens[id].signalsdata.inoutvar.sentiment || '-'}`">
          {{store.tokens[id].signalsdata.inoutvar.sentiment || '-'}}
        </td>
      </tr>
      <tr>
        <td>Concetration Var</td>
        <!-- <td>{{store.tokens[id].signalsdata.concentrationvar.value || '-'}}</td>
        <td>{{store.tokens[id].signalsdata.concentrationvar.score || '-'}}</td> -->
        <td :class="`sentiment-${store.tokens[id].signalsdata.concentrationvar.sentiment || '-'}`">
          {{store.tokens[id].signalsdata.concentrationvar.sentiment || '-'}}
        </td>
      </tr>
      <tr>
        <td>Adresses Net Growth</td>
        <!-- <td>{{store.tokens[id].signalsdata.addressesnetgrowth.value || '-'}}</td>
        <td>{{store.tokens[id].signalsdata.addressesnetgrowth.score || '-'}}</td> -->
        <td :class="`sentiment-${store.tokens[id].signalsdata.addressesnetgrowth.sentiment || '-'}`">
          {{store.tokens[id].signalsdata.addressesnetgrowth.sentiment || '-'}}
        </td>
      </tr>
      <tr>
        <td>Large txs Var</td>
        <!-- <td>{{store.tokens[id].signalsdata.largetxsvar.value || '-'}}</td>
        <td>{{store.tokens[id].signalsdata.largetxsvar.score || '-'}}</td> -->
        <td :class="`sentiment-${store.tokens[id].signalsdata.largetxsvar.sentiment || '-'}`">
          {{store.tokens[id].signalsdata.largetxsvar.sentiment || '-'}}
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
