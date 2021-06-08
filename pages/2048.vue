<template>
  <div class="wrapper">
    <h1 @mouseover="onMouseOver" @mouseleave="onMouseLeave">2048</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapMutations } from 'vuex'

export default Vue.extend({
  methods: {
    ...mapMutations({
      onMouseOver: 'cursor/makeCursorNegative',
      onMouseLeave: 'cursor/makeCursorNormal',
    }),
  },
})
</script>

<style scoped>
.wrapper {
  display: grid;
  place-items: center;
  height: 100vh;
}
</style>
