<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { SimpleKatex, WindowWithKatex } from '../lib/types'
import { katexReplaceWithTex } from '../lib/katex2tex'
import { useToast, POSITION } from 'vue-toastification'
import type { PluginOptions } from 'vue-toastification'

let katex = ref<SimpleKatex | null>(null)
let p = ref<Element | null>(null)

onMounted(() => {
  katex.value = (window as WindowWithKatex).katex
})

defineProps<{
  item: { title: string; formula: string }
}>()

function copyFormula() {
  const tex = katexReplaceWithTex(p.value)?.textContent
  const toast = useToast()

  const options: PluginOptions = {
    timeout: 1500,
    position: POSITION.BOTTOM_CENTER,
    hideProgressBar: true,
    closeButton: false,
    toastClassName: 'my-custom-toast-class',
    bodyClassName: 'toast-container',
    draggable: false,
    pauseOnHover: false
  }

  if (tex) {
    navigator.clipboard.writeText(tex)
    toast.success('Copied TeX source!', options)
  } else {
    console.error('Cannot read TeX source!')
  }
}
</script>

<template>
  <p
    v-html="katex?.renderToString(item.formula, { throwOnError: false })"
    ref="p"
    id="formula-text"
  ></p>
  <button @click="copyFormula" :class="{}">Copy TeX source</button>
</template>

<style scoped>
button {
  background-color: rgba(135, 206, 235, 0.5);
  padding: 8px 12px;
  border: white;
  border-radius: 8px;
}

/* .Vue-Toastification__toast-body {
      background-color: red;
    } */

/* .Vue-Toastification__toast.Vue-Toastification__toast--success.my-custom-toast-class {
    background-color: red;
  } */
/* .Vue-Toastification__toast--success.my-custom-toast-class {
        background-color: red;
    } */
</style>
