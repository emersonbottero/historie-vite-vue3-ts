<template>
  <button type="button" v-bind="$attrs" @click="onClick" :style="style">{{ label }}</button>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    /**
     * The label of the button
     */
    label: string
    /**
     * primary or secondary button
     */
    primary?: boolean
    /**
     * size of the button
     */
    size?: 'small' | 'medium' | 'large'
    /**
     * background color of the button
     */
    backgroundColor?: string
  }>(),
  { primary: false }
)

const emit = defineEmits<{
  (e: 'click', id: number): void
}>()

const style = computed(() => ({
  backgroundColor: props.backgroundColor
}))

const onClick = () => {
  emit('click', 1)
}
</script>
