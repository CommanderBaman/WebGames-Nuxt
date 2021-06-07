<template>
  <nav class="nav-wrapper">
    <ul>
      <li v-for="route in routes" :key="route.id">
        <h3>
          <NuxtLink :to="route.path"> {{ route.name }} </NuxtLink>
        </h3>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
import { routes } from '~/assets/constants'

export default Vue.extend({
  data() {
    return {
      routes,
    }
  },
})
</script>

<style scoped>
@import '~/assets/styles/components/navbar.css';
</style>
