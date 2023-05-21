<template>
  <button class="btn">
    <span v-if="icon">🤌</span> {{ label }}
    <span v-for="item in more" :key="item"> {{ item }} </span>
  </button>
</template>

<style lang="scss">
@import '../../../styles/button.scss';

.btn {
  width: 300px;
  color: blue;
}
</style>

<script setup lang="ts">
import { onMounted } from 'vue'
import { ButtonOptions } from '../types'

const props = defineProps<ButtonOptions>()

onMounted(() => {
  console.log('mounted...')

  console.log(props)
})
</script>
