import { createApp, markRaw } from 'vue'

import App from './App.vue'
import VueApexCharts from "vue3-apexcharts";
import { createPinia } from 'pinia'
import {router} from '@/router'
import Notifications from '@kyvg/vue3-notification';

import AuthLayout from '@/layouts/AuthLayout.vue'
import MainLayout from '@/layouts/MainLayout.vue'
import Icons from '@/components/Icons/Icons.vue'

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

const pinia = createPinia()
pinia.use(({ store }) => { store.router = markRaw(router) });

createApp(App)
.use(router)
.use(pinia)
.use(VueApexCharts)
.use(Notifications)
.directive('click-outside', clickOutside)
.component('auth-layout', AuthLayout)
.component('main-layout', MainLayout)
.component('Icons', Icons)
.mount('#app')
