<template>
  <main-layout>
    <h1>Cryptocurrencies List</h1>
    <table-grid :tokens="overall_tokens" :loading="loading" />
  </main-layout>
</template>

<script setup>
import { useStore } from '@/store/index'
import { storeToRefs } from 'pinia'

import TableGrid from '@/components/TableGrid.vue'

const store = useStore()
const { overall_tokens, loading } = storeToRefs(store)
</script>

<style>

</style>