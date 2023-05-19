<template>
  <button class="btn">{{ label }}</button>
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

const props = defineProps<{ label: string }>()

onMounted(() => {
  console.log(props)
})
</script>
