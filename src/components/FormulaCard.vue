<script setup lang="ts">
import KatexElement from './KatexElement.vue'
import type { FormulaItem } from '../lib/types'

defineProps<{
  filteredValues: FormulaItem[]
}>()
</script>

<template>
  <div
    v-for="(item, index) in filteredValues"
    :key="index"
    class="formula-card"
    data-test="formulas"
  >
    <h1>{{ item.title }}</h1>
    <KatexElement :item="item" />
  </div>
</template>

<style scoped>
.formula-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.formula-card > h1 {
  font-size: 1.1rem;
}

@media (orientation: portrait) {
  .formula-card:not(h1) {
    font-size: 0.75rem;
  }
}
</style>
