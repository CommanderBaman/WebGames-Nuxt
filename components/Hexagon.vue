<template>
  <div class="wrapper">
    <div
      class="hex-container"
      @mouseenter="hover = true"
      @mouseleave="hover = false"
    >
      <div
        id="hexagon"
        :style="{ 'background-color': hover ? backgroundColor : 'transparent' }"
      ></div>
    </div>
    <h3 v-if="isLink">
      <NuxtLink :to="linkTo"> {{ text }} </NuxtLink>
    </h3>
    <p class="display-text" v-else>{{ text }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    text: {
      type: String,
      default: 'Home',
    },
    backgroundColor: {
      type: String,
      default: 'transparent',
    },
    isLink: {
      type: Boolean,
      default: false,
    },
    linkTo: {
      type: String,
      default: '/',
    },
  },
  data() {
    return {
      hover: false,
    }
  },
})
</script>

<style scoped>
@import '~/assets/styles/components/hexagon.css';
</style>
