<template>
  <div class="reddit-chart" v-if="store.tokens[id].fulldata.reddit">
    <div class="stats">
      <h3 class="fw-600">Reddit</h3>
      <div class="stats-elem">
        <div class="stats-circle" style="background: #6C5DD3;"></div>
        <span class="key">Points</span>
        <span class="value grey">{{store.tokens[id].fulldata.reddit.points || '-'}}</span>
      </div>
      <div class="stats-elem">
        <div class="stats-circle" style="background: #FF4500;"></div>
        <span class="key">Active users</span>
        <span class="value grey">{{store.tokens[id].fulldata.reddit.active_users || '-'}}</span>
      </div>
      <div class="stats-elem">
        <div class="stats-circle" style="background: #FF4500;"></div>
        <span class="key">Comments / day</span>
        <span class="value grey">{{store.tokens[id].fulldata.reddit.comments_per_day || '-'}}</span>
      </div>
      <div class="stats-elem">
        <div class="stats-circle" style="background: #FF4500;"></div>
        <span class="key">Comments / hour</span>
        <span class="value grey">{{store.tokens[id].fulldata.reddit.comments_per_hour || '-'}}</span>
      </div>
      <div class="stats-elem">
        <div class="stats-circle" style="background: #FF4500;"></div>
        <span class="key">Posts per day</span>
        <span class="value grey">{{store.tokens[id].fulldata.reddit.posts_per_day || '-'}}</span>
      </div>
      <div class="stats-elem">
        <div class="stats-circle" style="background: #FF4500;"></div>
        <span class="key">Subscribers</span>
        <span class="value grey">{{store.tokens[id].fulldata.reddit.subscribers || '-'}}</span>
      </div>
    </div>
    <div class="chart" v-if="store.tokens[id].summarydata.reddit_perc">
      <h3 class="fw-600">Better than</h3>
      <div class="chart-inner">
        <apexchart height="100%" width="100%" :options="options" :series="[store.tokens[id].summarydata.reddit_perc]"></apexchart>
      </div>
      <h3 class="fw-600">tokens</h3>
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
        size: '28px'
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
          fontSize: '10px',
          fontWeight: '700',
          fontFamily: 'Manrope',
          formatter: (val) => val.toFixed(1)+'%'
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

 

<style scoped>
 
.chart{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.chart-inner{
  height: 9rem;
  width: 9rem;
}
.chart-inner > div{
  transform: scale(1.6);
}
</style>