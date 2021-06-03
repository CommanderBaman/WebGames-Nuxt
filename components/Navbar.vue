<template>
  <div class="wrapper">
    <ul>
      <li v-for="route in routes" :key="route.id">
        <NuxtLink :to="route.path"> {{ route.name }} </NuxtLink>
      </li>
    </ul>
  </div>
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
