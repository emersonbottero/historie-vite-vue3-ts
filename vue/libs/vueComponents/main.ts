import { defineCustomElement } from 'vue'
import VButton from '../../src/components/SButton.vue'

console.log(VButton.styles) // ["/* inlined css */"]

// convert into custom element constructor
const VButtonElement = defineCustomElement(VButton)
