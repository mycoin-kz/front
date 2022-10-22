<template>
  <div class="signals">
    <div class="group">
      <div class="block trading">
        <h3>Trading Signals</h3>
        <trading-signals></trading-signals>
      </div>

      <div class="block project-score">
        <h3>Project Score</h3>
        <div class="diagram">
          <div class="diagram-layer">
            <p class="label fw-400 fz-14 ">Better than <br><span class="purple">{{store.tokens[id].summarydata.total_perc.toFixed(2)}}%</span> tokens</p>
          </div>
          <apexchart height="100%" width="100%" :options="options" :series="[store.tokens[id].summarydata.total_perc]"></apexchart>
        </div>
      </div>
    </div>
    <div class="group">
      <div class="block onchain">
        <h3>Onchain Signals</h3>
        <onchain-signals></onchain-signals>
      </div>

      <div class="block statictics"></div>
    </div>
    <div class="group">
      <div class="block technical">
        <h3>Technical Indicators</h3>
        <technical-indicators></technical-indicators>
      </div>
    </div>
  </div>
</template>

<script setup>
import OnchainSignals from '../TradingSignals/CryptoSignals.vue'
import TechnicalIndicators from '../TradingSignals/TechnicalIndicators.vue'
import TradingSignals from './TradingSignals.vue'
import { useStore } from '@/store/index'
import { useRoute } from 'vue-router'
import { reactive } from 'vue'

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
    colors: ['#5B44DF']
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

<style scoped lang="scss">
@import '@/assets/scss/vars';
.signals{
  // display: grid;
  // grid-template-columns: repeat(3, 1fr);
  // grid-template-rows: repeat(3, 1fr);
  display: flex;
  grid-gap: 2rem;

  .group{
    flex: 1 1 0px;
    display: flex;
    flex-direction: column;
    grid-gap: 2rem;
  }

  .block{
    background: $white;
    padding: 1rem 0;
    h3{
      margin: 0;
      padding: 2rem 2rem 1rem 2rem;
      font-weight: 600;
    }
  }
  .project-score{
    display: flex;
    flex-direction: column;

    h3{
      border-bottom: 1px solid #E6E6EA;
    }
  }
  .statictics{
    flex-grow: 1;
  }
}
</style>
