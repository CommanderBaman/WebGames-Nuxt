<template>
  <button @click="onClick(boxNumber)">{{ sign }}</button>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    sign: {
      type: String,
      default: '',
      required: true,
    },
    finished: {
      type: Boolean,
      default: false,
      required: true,
    },
    boxNumber: {
      type: Number,
      required: true,
    },
    onClick: {
      type: Function,
      required: true,
    },
  },
})
</script>

<style scoped>
button {
  height: 20px;
  width: 20px;
}
</style>
