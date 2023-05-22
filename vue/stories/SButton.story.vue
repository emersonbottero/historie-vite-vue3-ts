<template>
  <Story>
    <SButton :more="iconList" label="ma ché!!" icon> </SButton>
  </Story>
</template>

<script setup>
import SButton from './src/components/SButton.vue'
const iconList = ['🌞', '😁', '🎉']
</script>
