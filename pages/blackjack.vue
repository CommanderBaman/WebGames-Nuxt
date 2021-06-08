<template>
  <h1 @mouseover="onMouseOver" @mouseleave="onMouseLeave">Black Jack!</h1>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapMutations } from 'vuex'
export default Vue.extend({
  methods: {
    ...mapMutations({
      onMouseOver: 'cursor/makeCursorEnlarged',
      onMouseLeave: 'cursor/makeCursorNormal',
    }),
  },
})
</script>

<style scoped>
h1 {
  display: grid;
  margin: 20vh auto;
  place-items: center;
}
</style>
