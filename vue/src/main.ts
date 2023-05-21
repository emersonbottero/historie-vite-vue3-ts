import { defineCustomElement } from 'vue'
import VButton from './components/SButton.vue'

console.log(VButton.styles) // ["/* inlined css */"]

// convert into custom element constructor
const VButtonElement = defineCustomElement(VButton)

// register
customElements.define('v-button', VButtonElement)
