<template>
  <header>
    <div class="header-inner">
      <div class="searchbar" v-click-outside="hide" tabindex="0">
        <Icons class="searchbar-icon" icon="search"></Icons>
        <input type="text" v-model="searchword" placeholder="Search symbol, name ...">
        <div class="options" v-if="options.length">
          <router-link @click="hide" :to="'/explore/'+token.cryptocompare_id" class="search-option" v-for="token in options" :key="token.cryptocompare_id">
            <img class="token-image" :src="token.imageurl" alt="" v-if="token.imageurl">
            <div v-else class="token-image no-image"></div>
            <span>{{token.fullname}}</span>
          </router-link>
        </div>
      </div>
      <logout-btn v-if="isAuthenticated"></logout-btn>
    </div>
  </header>
</template>

<script setup>
import { computed, ref } from '@vue/reactivity';
import { storeToRefs } from 'pinia';
import { useStore } from '@/store';

import LogoutBtn from '@/components/UI/LogoutBtn.vue'
import { useAuth } from '@/store/auth/token';

const searchword = ref('')
const {overall_tokens} = storeToRefs(useStore())
const options = computed(() => {
  return searchword.value ? overall_tokens.value.filter(el => el.fullname.toLowerCase().includes(searchword.value.toLowerCase())) : []
})
const hide = () => {
  searchword.value = ''
}
const {isAuthenticated} = storeToRefs(useAuth())
</script>

<style lang="scss" scoped>
.options{
  position: absolute;
  z-index: 1;
  left: 0;
  top: 2.5rem;
  width: 100%;
  background: white;
  .token-image{
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .no-image{
    background: grey;
  }
  .search-option{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    grid-gap: 1rem;

    padding: 0.5rem;
    cursor: pointer;

    &:hover{
      background: rgb(243, 243, 243);
    }
  }
}
.searchbar .searchbar-icon{
  width: 16px;
  height: 16px;
}
header{
  // background: #FCFCFC;
  padding: 1rem;
  .header-inner{
    justify-content: space-between;
    display: flex;
    grid-gap: 1rem;
    .searchbar{
      position: relative;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      background: #FCFCFC;
      color: #808191;
      padding: .7rem;
      width: 400px;
      grid-gap: .5rem;
      border-radius: 8px;

      svg{
        width: 1rem;
        height: 1rem;
      }
      input{
        font-size: 14px;
        font-weight: 400;
        line-height: 18px;
        flex-grow: 1;
        border: none;
        outline: none;
        background: transparent;
      }
    }
  }
}
.logo-text{
  font-weight: 700;
  font-size: 24px;
}
</style>