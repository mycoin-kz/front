<template>
  <div class="facebook-chart block" v-if="store.tokens[id].fulldata.facebook">
    <div class="block-head">
      <Icons icon="facebook" class="icon-32"/>
      <h3 class="fw-600">Facebook</h3>
    </div>
    <div class="chart-inner">
      <div class="diagram">
        <div class="diagram-layer">
          <p class="label fw-400 fz-14 ">Better than <br><span style="color: #1570E7">{{store.tokens[id].summarydata.fb_perc?.toFixed(2) || 0}}%</span> tokens</p>
        </div>
        <apexchart height="100%" width="100%" :options="options" :series="[store.tokens[id].summarydata.fb_perc || 0]"></apexchart>
      </div>
      <div class="stats">
        <span class="key">Points</span>
        <span class="value grey">{{store.tokens[id].fulldata.facebook.points || '-'}}</span>
        <span class="key">Likes</span>
        <span class="value grey">{{store.tokens[id].fulldata.facebook.likes || '-'}}</span>
        <span class="key">Talking about</span>
        <span class="value grey">{{store.tokens[id].fulldata.facebook.talking_about || '-'}}</span>
        <span class="key">Is closed?</span>
        <span class="value grey">{{store.tokens[id].fulldata.facebook.is_closed !== null ?(store.tokens[id].fulldata.facebook.is_closed ? 'Yes' : 'No') : '-'}}</span>
      </div>
      <div class="no-data" v-if="!store.tokens[id].summarydata.fb_perc">
        <span class="fz-16">No data available for this block</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useStore} from '@/store/index'
import { reactive } from '@vue/reactivity';
import { useRoute } from 'vue-router'


const id = useRoute().params.id

const store = useStore()

const options = reactive({
  chart: {
    type: 'radialBar',
    sparkline: {
      enabled: true
    },
    parentHeightOffset: 0,
    grid: {
      padding: {
        left: 0,
        right: 0
      }
    }
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: '60%'
      },
      track: {
        background: '#E4E8EF'
      },
      dataLabels: {
        name: {
          show: false
        },
        value: {
          show: true,
          color: '#808191',
          offsetY: 5,
          fontSize: '14px',
          fontWeight: '700',
          fontFamily: 'Manrope',
          formatter: (val) => ''
        }
      }
    }
  },
  fill: {
    colors: ['#1570E7']
  },
  states: {
    hover: {
      filter: 'none'
    },
    normal: {
      filter: 'none'
    },
    active: {
      filter: 'none'
    }
  }
})
</script>

 

<style scoped>
 
.chart{
  display: flex;
  flex-direction: column;
  align-items: center;
}

 
 
</style>