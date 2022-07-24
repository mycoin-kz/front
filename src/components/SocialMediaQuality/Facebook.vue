<template>
  <div class="twitter-chart" v-if="facebook">
    <div class="stats">
      <h3 class="fw-600">Facebook</h3>
      <div class="stats-elem">
        <div class="stats-circle" style="background: #6C5DD3;"></div>
        <span class="key">Points</span>
        <span class="value grey">{{facebook.points}}</span>
      </div>
      <div class="stats-elem">
        <div class="stats-circle" style="background: #3B5998;"></div>
        <span class="key">Likes</span>
        <span class="value grey">{{facebook.likes}}</span>
      </div>
      <div class="stats-elem">
        <div class="stats-circle" style="background: #3B5998;"></div>
        <span class="key">Talking about</span>
        <span class="value grey">{{facebook.talking_about}}</span>
      </div>
      <div class="stats-elem">
        <div class="stats-circle" style="background: #3B5998;"></div>
        <span class="key">Is closed?</span>
        <span class="value grey">{{facebook.is_closed ? 'Yes' : 'No'}}</span>
      </div>
    </div>
    <div class="chart">
      <h3 class="fw-600">Better than</h3>
      <div class="chart-inner">
        <apexchart height="100%" width="100%" :options="options" :series="[fb_perc]"></apexchart>
      </div>
      <h3 class="fw-600">tokens</h3>
    </div>
  </div>
</template>

<script setup>
import {useStore} from '@/store/index'
import { reactive, ref } from '@vue/reactivity';

const facebook = useStore().fulldata.facebook
const {fb_perc} = useStore().summarydata

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
    colors: ['#3B5998']
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
const series = ref([75])
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