<template>
  <main-layout>
    <h1>Watchlist</h1>
    <table-grid :tokens="watchlist.data" :loading="watchlist.loading" />
  </main-layout>
</template>

<script setup>
import { useStore } from '@/store/index'
import { storeToRefs } from 'pinia'

import TableGrid from '@/components/TableGrid.vue'

const store = useStore()
const { watchlist } = storeToRefs(store)
</script>
