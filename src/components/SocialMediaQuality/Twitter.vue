<template>
  <div class="twitter-chart">
    <div class="stats">
      <h3 class="fw-600">Twitter</h3>
      <div class="stats-elem">
        <div class="stats-circle" style="background: #6C5DD3;"></div>
        <span class="key">Points</span>
        <span class="value grey">{{points}}</span>
      </div>
      <div class="stats-elem">
        <div class="stats-circle" style="background: #1D9BF0;"></div>
        <span class="key">Followers</span>
        <span class="value grey">{{followers}}</span>
      </div>
      <div class="stats-elem">
        <div class="stats-circle" style="background: #1D9BF0;"></div>
        <span class="key">Following</span>
        <span class="value grey">{{following}}</span>
      </div>
      <div class="stats-elem">
        <div class="stats-circle" style="background: #1D9BF0;"></div>
        <span class="key">Favourites</span>
        <span class="value grey">{{favourites}}</span>
      </div>
      <div class="stats-elem">
        <div class="stats-circle" style="background: #1D9BF0;"></div>
        <span class="key">Lists</span>
        <span class="value grey">{{lists}}</span>
      </div>
      <div class="stats-elem">
        <div class="stats-circle" style="background: #1D9BF0;"></div>
        <span class="key">Statuses</span>
        <span class="value grey">{{statuses}}</span>
      </div>
    </div>
    <div class="chart">
      <h3 class="fw-600">Better than</h3>
      <div class="chart-inner">
        <apexchart height="100%" width="100%" :options="options" :series="[twitter_perc]"></apexchart>
      </div>
      <h3 class="fw-600">tokens</h3>
    </div>
  </div>
</template>

<script setup>
import {useStore} from '@/store/index'
import { reactive, ref } from '@vue/reactivity';

const {favourites, followers, following, lists, points, statuses} = useStore().fulldata.twitter
const {twitter_perc} = useStore().summarydata
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
    colors: ['#1D9BF0']
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

<style lang="scss">
.stats-circle{
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  display: inline-block;
  margin-right: 10px;
}
.stats-elem{
  display: flex;
  align-items: center;

  .key{
    flex-grow: 1;
  }
}
.twitter-chart{
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>

<style scoped>
.stats{
  display: flex;
  grid-gap: 1rem;
  flex-direction: column;
}
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