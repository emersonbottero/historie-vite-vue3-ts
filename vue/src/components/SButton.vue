<template>
  <button class="btn">
    <span v-if="icon" @click="emit('iconClicked')">🤌</span> {{ label }}
    <!-- @slot postfix of the label -->
    <slot></slot>
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

/** @component
This is the doc for the component.  
How complex cna this be??  
Another line??
*/

interface ButtonOptions {
  /** Label of the button */
  label: string
  /** Shows 🤌 */
  icon?: boolean
  more?: string[]
}

const props = withDefaults(defineProps<ButtonOptions>(), {
  label: 'is it working '
})

const emit = defineEmits<{
  /** Shows emphasis  */
  (event: 'iconClicked'): void
}>()

onMounted(() => {
  console.log('mounted...')

  console.log(props)
})
</script>
