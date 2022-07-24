import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import {router} from '@/router'

import VueApexCharts from "vue3-apexcharts";

createApp(App).use(createPinia()).use(VueApexCharts).use(router).mount('#app')
