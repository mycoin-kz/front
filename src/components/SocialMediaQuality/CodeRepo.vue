<template>
  <div class="code-repo block" v-if="store.tokens[id].fulldata.codrepo">
    <div class="block-head">
      <Icons icon="git" class="icon-32"/>
      <Icons icon="github" class="icon-32"/>
      <h3 class="fw-600">Code Repository</h3>
    </div>
    <div class="chart-inner">
      <div class="diagram">
        <div class="diagram-layer">
          <p class="label fw-400 fz-14 ">Better than <br><span style="color: #2B3036">{{store.tokens[id].summarydata.codrepo_perc?.toFixed(2) || 0}}%</span> tokens</p>
        </div>
        <apexchart height="100%" width="100%" :options="options" :series="[store.tokens[id].summarydata.codrepo_perc || 0]"></apexchart>
      </div>
      <div class="stats">
        <span class="key">Points</span>
        <span class="value grey">{{store.tokens[id].fulldata.codrepo.points || '-'}}</span>
        <span class="key">Closed Issues</span>
        <span class="value grey">{{store.tokens[id].fulldata.codrepo.closed_total_issues || '-'}}</span>
        <span class="key">Contributors</span>
        <span class="value grey">{{store.tokens[id].fulldata.codrepo.contributors || '-'}}</span>
        <span class="key">Forks</span>
        <span class="value grey">{{store.tokens[id].fulldata.codrepo.forks || '-'}}</span>
        <span class="key">Stars</span>
        <span class="value grey">{{store.tokens[id].fulldata.codrepo.stars || '-'}}</span>
        <span class="key">Subscribers</span>
        <span class="value grey">{{store.tokens[id].fulldata.codrepo.subscribers || '-'}}</span>
      </div>
      <div class="no-data" v-if="!store.tokens[id].summarydata.codrepo_perc">
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
    colors: ['#2B3036']
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