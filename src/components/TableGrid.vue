<template>
  <div class="text-center" v-if="loading">
    <loading-spinner/>
  </div>
  <div class="table-grid" v-else :style="{'--fields-length': fields.length}">
    <table class="tokens-data">
      <thead>
        <tr>
          <th class="grey fw-400 token-number">#</th>
          <th class="grey fw-400 token-name">Token</th>
          <th class="green fw-400 token-bullish" v-if="fields.includes('bullish')">Bullish</th>
          <th class="yellow fw-400 token-neutral" v-if="fields.includes('neutral')">Neutral</th>
          <th class="red fw-400 token-bearish" v-if="fields.includes('bearish')">Bearish</th>
          <th class="grey fw-400 token-score" v-if="fields.includes('score')">Score</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="token in page_tokens" :key="token.cryptocompare_id" @click="router.push('/explore/'+token.cryptocompare_id)">
          <td class="token-number grey">{{token.number}}</td>
          <td class="token-name">
            <token-thumb :token="token" />
          </td>
          <td class="fw-400 token-bullish" v-if="fields.includes('bullish')">{{token.bullish}}</td>
          <td class="fw-400 token-neutral" v-if="fields.includes('neutral')">{{token.neutral}}</td>
          <td class="fw-400 token-bearish" v-if="fields.includes('bearish')">{{token.bearish}}</td>
          <td class="fw-400 token-score" v-if="fields.includes('score')">{{token.total_perc ? token.total_perc.toFixed(2): '-'}}</td>
        </tr>
      </tbody>
    </table>
    <div class="pagination" v-if="pages() > 1">
      <Icons @click="page > 1 && page--" icon="arrowLeft" />
      <button 
        @click="page = item" 
        class="page-buttons btn-main" 
        v-for="item in pages()" 
        :key="item"
        :class="{'btn-purple': page === item}"
      >
        {{item}}
      </button>
      <Icons @click="page < pages() && page++" icon="arrowRight" />
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref, computed } from 'vue'
import { useRouter } from 'vue-router'

import TokenThumb from '@/components/UI/Token.vue'
import LoadingSpinner from '@/components/UI/Loader.vue'

const props = defineProps({
  tokens: Array,
  loading: Boolean,
  fields: {
    type: Array,
    default: () => [
      'bullish',
      'neutral',
      'bearish',
      'score',
    ]
  }
})
const router = useRouter()

const TOKENS_PER_PAGE = 14
const page = ref(1)
const pages = () => Math.ceil(props.tokens.length/TOKENS_PER_PAGE)
const page_tokens = computed(() => {
  const res = props.tokens.map((val, index) => ({...val, number: index+1})).slice((page.value-1)*TOKENS_PER_PAGE, page.value*TOKENS_PER_PAGE)
  return res
})

</script>

<style lang="scss">
@import '@/assets/scss/_vars.scss';

.table-grid{
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  grid-gap: 2.5rem;
  // margin-bottom: 4rem;
}
table.tokens-data{
  background: $white;
  border-radius: 16px;
  border-collapse: collapse;

  thead{
    background: transparent;
    th{
      padding: 1.75rem 0 1rem 0;
      border-bottom: 1px solid #E6E6EA;

      &.token-name{
        text-align: left;
      }
    }
  }
  tbody {
    tr{
      cursor: pointer;

      &:hover{
        background: rgba(0, 0, 0, 0.03);
      }
    }
    .token-number{
      padding-right: 0;
      padding-left: 0;
    }
    .token-name{
      padding: 0.75rem 0;
      text-align: left;
    }
  }
  tr{
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 3.5rem 2fr repeat(var(--fields-length), 1fr);
  }
  td{
    text-align: center;
  }
  // .token-number{
  //   width: 1.5rem;
  // }
}
.pagination{
  display: flex;
  align-items: center;
  grid-gap: 0.5rem;
  justify-content: center;

  .page-buttons{
    border-radius: 50%;
    height: 2rem;
    width: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: $white;
    color: $purple;
    padding: 0;
  }
  .component-icon{
    cursor: pointer;
  }
}
</style>