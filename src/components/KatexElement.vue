<script setup lang="ts">
import type { SimpleKatex, WindowWithKatex } from '../lib/types'
import { ref, onMounted } from 'vue'
import { katexReplaceWithTex } from '../lib/katex2tex'

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
  if (tex) {
    navigator.clipboard.writeText(tex)
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
  <button @click="copyFormula">copy it</button>
</template>
