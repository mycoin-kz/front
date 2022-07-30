<template>
  <div class="social-media-quality" v-if="store.summarydata.total_perc">
    <div class="description">
      <span class="gray fw-500 with-icon message">Social Media Quality</span>
      <span style="font-weight: 700;font-size: 24px;line-height: 2rem; width: 10rem;">Better than {{ store.summarydata.total_perc.toFixed(1) }}% tokens</span>
    </div>
    <div class="social-media-quality__chart">
      <apexchart height="100%" width="100%" :options="options" :series="[store.summarydata.total_perc]"></apexchart>
    </div>
  </div>
</template>

<script setup>
import {ref} from '@vue/reactivity'
import { useStore } from '@/store';

const store = useStore()

const options = ref({
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
      dataLabels: {
        show: false
      },
      hollow: {
        size: '16px'
      },
      track: {
        background: '#E4E8EF'
      }
    }
  },
  fill: {
    colors: ['#6C5DD3']
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

<style lang="scss" scoped>
.social-media-quality{
  display: inline-flex;

  .description{
    display: grid;
  }
  &__chart{
    height: 80px;
    width: 80px;
  }
  &__chart > div{
    transform: scale(1.6);
  }
}
</style>
