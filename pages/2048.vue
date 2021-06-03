<template>
  <div class="wrapper">
    <h1>2048</h1>
    <p>Count: {{ count }}</p>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    increment(): void {
      this.count++
    },
    decrement(): void {
      this.count--
    },
  },
})
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>
