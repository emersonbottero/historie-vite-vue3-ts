import { defineCustomElement } from 'vue'
import SButton from '../../src/components/SButton.vue'

console.log(SButton.styles) // ["/* inlined css */"]

// convert into custom element constructor
const SButtonElement = defineCustomElement(SButton)

// register
const register = () => customElements.define('s-button', SButtonElement)

export default register
