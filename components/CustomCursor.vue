<template>
  <div
    ref="cursorElement"
    :class="{
      cursor: true,
      enlargedCursor: cursorEnlarged,
      cursorDifferenceFilter: cursorNegative,
    }"
    :style="{ top: `${cursorTop}px`, left: `${cursorLeft}px` }"
  />
</template>

<script>
/**
 * @name CustomCursor
 *
 * Creates the cursor on the screen
 * Current occupies 25px on a 1080p screen
 * Has 2 effects applied - cursor gets enlarged and a negative filter
 * Use the store to choose which effect to apply
 * Minimum diameter is 20px
 * Frame rate is limited to 80fps - calculate by 1000/(throttle time)
 *
 */
import Vue from 'vue'
import { performance } from '~/assets/functions'

export default Vue.extend({
  data() {
    return {
      cursorElement: null,
      cursorLeft: -100,
      cursorTop: -100,
    }
  },
  computed: {
    cursorEnlarged() {
      return this.$store.state.cursor.cursorEnlarged
    },
    cursorNegative() {
      return this.$store.state.cursor.cursorNegative
    },
  },
  mounted() {
    window.addEventListener('mousemove', this.updateCursorPosition)
  },
  beforeDestroy() {
    window.removeEventListener('mousemove', this.updateCursorPosition)
  },
  methods: {
    updateCursorPosition: performance.throttle(function (event) {
      this.cursorLeft =
        event.clientX -
        this.$refs.cursorElement.getBoundingClientRect().width / 2
      this.cursorTop =
        event.clientY -
        this.$refs.cursorElement.getBoundingClientRect().height / 2
    }, 12.5), // setting throttle time to 12.5 ms ~ 80fps
  },
})
</script>

<style scoped>
@import url('~/assets/styles/components/cursor.css');
</style>
