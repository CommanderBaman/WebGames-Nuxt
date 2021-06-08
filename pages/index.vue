<template>
  <div class="container">
    <div class="col">
      <h1 class="title" :style="{ '--animation-steps': pageTitle.length }">
        {{ pageTitle }}
      </h1>
      <p class="description">
        Your one stop destination to play games on the web
      </p>
    </div>
    <div class="col-grid">
      <div
        v-for="(info, index) in hexDetails"
        :key="info.id"
        class="hex-wrapper"
        :style="{ 'grid-area': `hex${index + 1}` }"
      >
        <Hexagon
          :text="info.name"
          :backgroundColor="info.backgroundColor"
          :isLink="info.isLink"
          :linkTo="info.path"
          :delay="info.delay"
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
          delay: index + 1,
        }
      })
    const pageTitle = 'Webgames'

    return {
      hexDetails,
      pageTitle,
    }
  },
})
</script>

<style scoped>
@import url('~/assets/styles/pages/index.css');
</style>
