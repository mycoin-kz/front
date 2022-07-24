<template>
  <div class="twitter-chart" v-if="coderepo">
    <div class="stats">
      <h3 class="fw-600">Code Repository</h3>
      <div class="stats-elem">
        <div class="stats-circle" style="background: #6C5DD3;"></div>
        <span class="key">Points</span>
        <span class="value grey">{{coderepo.points}}</span>
      </div>
      <div class="stats-elem">
        <div class="stats-circle" style="background: #000000;"></div>
        <span class="key">Closed Issues</span>
        <span class="value grey">{{coderepo.closed_total_issues}}</span>
      </div>
      <div class="stats-elem">
        <div class="stats-circle" style="background: #000000;"></div>
        <span class="key">Contributors</span>
        <span class="value grey">{{coderepo.contributors}}</span>
      </div>
      <div class="stats-elem">
        <div class="stats-circle" style="background: #000000;"></div>
        <span class="key">Forks</span>
        <span class="value grey">{{coderepo.forks}}</span>
      </div>
      <div class="stats-elem">
        <div class="stats-circle" style="background: #000000;"></div>
        <span class="key">Stars</span>
        <span class="value grey">{{coderepo.stars}}</span>
      </div>
      <div class="stats-elem">
        <div class="stats-circle" style="background: #000000;"></div>
        <span class="key">Subscribers</span>
        <span class="value grey">{{coderepo.subscribers}}</span>
      </div>
    </div>
    <div class="chart">
      <h3 class="fw-600">Better than</h3>
      <div class="chart-inner">
        <apexchart height="100%" width="100%" :options="options" :series="[codrepo_perc]"></apexchart>
      </div>
      <h3 class="fw-600">tokens</h3>
    </div>
  </div>
</template>

<script setup>
import {useStore} from '@/store/index'
import { reactive, ref } from '@vue/reactivity';

const coderepo = useStore().fulldata.codrepo
const {codrepo_perc} = useStore().summarydata

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
    colors: ['#000000']
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