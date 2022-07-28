import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import {router} from '@/router'

import VueApexCharts from "vue3-apexcharts";

const clickOutside = {
  beforeMount: (el, binding) => {
    el.clickOutsideEvent = event => {
      // here I check that click was outside the el and his children
      if (!(el == event.target || el.contains(event.target))) {
        // and if it did, call method provided in attribute value
        binding.value();
      }
    };
    document.addEventListener("click", el.clickOutsideEvent);
  },
  unmounted: el => {
    document.removeEventListener("click", el.clickOutsideEvent);
  },
};

createApp(App)
.use(createPinia())
.use(VueApexCharts)
.use(router)
.directive('click-outside', clickOutside)
.mount('#app')
