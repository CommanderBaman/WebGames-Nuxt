<template>
  <div class="container">
    <div class="col">
      <h1 class="title">WebGames</h1>
      <p>Your one stop destination to play games on the web</p>
    </div>
    <div class="col">
      <div v-for="info in hexDetails" :key="info.id" class="hex-wrapper">
        <Hexagon
          :text="info.name"
          :backgroundColor="info.backgroundColor"
          :isLink="info.isLink"
          :linkTo="info.path"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Hexagon from '~/components/Hexagon.vue'
import { routes } from '~/assets/constants'

export default Vue.extend({
  components: { Hexagon },
  layout: 'title',
  data() {
    const backgroundColors: String[] = [
      '#EE0022', // red
      '#AA6600', // brown yellow
      '#0077CC', // blue
      '#118800', // green
    ]
    const hexDetails: Object[] = routes
      .filter((_, indx) => indx)
      .map((route, index) => {
        return {
          ...route,
          backgroundColor: backgroundColors[index % 4],
          isLink: true,
        }
      })

    return {
      hexDetails,
    }
  },
})
</script>

<style scoped>
@import url('~/assets/styles/pages/index.css');
</style>
