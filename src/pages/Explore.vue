<template>
  <main-layout>
    <h1>Cryptocurrencies List</h1>
    <table-grid :tokens="overall_tokens" :loading="loading_overall" />
  </main-layout>
</template>

<script setup>
import { useStore } from '@/store/index'
import { storeToRefs } from 'pinia'

import TableGrid from '@/components/TableGrid.vue'

const store = useStore()
const { overall_tokens, loading_overall } = storeToRefs(store)
</script>

<style>

</style>