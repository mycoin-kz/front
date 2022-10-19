<template>
  <aside class="sidebar">
    <div class="logo-sidebar">
      <Icons icon="logo" class="logo-sidebar-image"></Icons>
      <h3>Coinfolio</h3>
    </div>

    <nav class="sidebar-nav">
      <ul>
        <li v-for="link in links" :key="link.name">
          <router-link :to="{name: link.name}" active-class="sidebar-active-link" :class="{'disabled': !link.availible}">
            <Icons :icon="link.icon" color="currentColor" />
            <span class="fw-700">{{link.name}}</span>
            <Icons v-if="!link.availible" icon="lock"/>
          </router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup>
import { defineProps } from 'vue'
import { useRoute } from 'vue-router'

defineProps({
  links: Array
})
const route = useRoute()
</script>

<style lang="scss" scoped>
.logo-sidebar{
  height: 2.5rem;
  display: inline-flex;
  align-items: center;
  grid-gap: 0.75rem;

  h3{
    font-size: 25px;
    margin: 0;
  }
}
.logo-sidebar-image{
  height: 2.5rem;
  width: 2.5rem;
}
aside.sidebar{
  background: #FCFCFC;
}
.sidebar{
  padding: 2.5rem 4rem 4rem 2rem;
  display: flex;
  flex-direction: column;
  grid-gap: 2.5rem;
}
.sidebar-nav{
  ul{
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;

    li a{
      padding: .6rem 1rem;
      display: flex;
      grid-gap: 0.5em;
      align-items: center;
      color: #929296;
      min-width: 10rem;
      border-radius: 12px;

      span{
        flex-grow: 1;
        color: #929296;
      }
      &.sidebar-active-link{
        background: #5B44DF;
        color: #FCFCFC;
        span{
          color: #FCFCFC;
        }
        &:hover{
          background: #5B44DF;
        }
      }

      &:hover{
        background: rgba(0, 0, 0, 0.03);
      }
    }
  }
}
a.disabled {
  // opacity: 0.5;
  pointer-events: none;
}
</style>