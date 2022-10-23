<template>
  <div class="reddit-chart block" v-if="store.tokens[id].fulldata.reddit">
    <div class="block-head">
      <Icons icon="reddit" class="icon-32"/>
      <h3 class="fw-600">Reddit</h3>
    </div>
    <div class="chart-inner">
      <div class="diagram">
        <div class="diagram-layer">
          <p class="label fw-400 fz-14 ">Better than <br><span style="color: #EF5D27">{{store.tokens[id].summarydata.reddit_perc?.toFixed(2) || 0}}%</span> tokens</p>
        </div>
        <apexchart height="100%" width="100%" :options="options" :series="[store.tokens[id].summarydata.reddit_perc || 0]"></apexchart>
      </div>
      <div class="stats">
        <span class="key">Points</span>
        <span class="value grey">{{store.tokens[id].fulldata.reddit.points || '-'}}</span>
        <span class="key">Active users</span>
        <span class="value grey">{{store.tokens[id].fulldata.reddit.active_users || '-'}}</span>
        <span class="key">Comments / day</span>
        <span class="value grey">{{store.tokens[id].fulldata.reddit.comments_per_day || '-'}}</span>
        <span class="key">Comments / hour</span>
        <span class="value grey">{{store.tokens[id].fulldata.reddit.comments_per_hour || '-'}}</span>
        <span class="key">Posts per day</span>
        <span class="value grey">{{store.tokens[id].fulldata.reddit.posts_per_day || '-'}}</span>
        <span class="key">Subscribers</span>
        <span class="value grey">{{store.tokens[id].fulldata.reddit.subscribers || '-'}}</span>
      </div>
      <div class="no-data" v-if="!store.tokens[id].summarydata.reddit_perc">
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
    colors: ['#FF4500']
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
