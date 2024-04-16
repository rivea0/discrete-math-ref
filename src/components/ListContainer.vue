<script setup lang="ts">
import { ref } from 'vue'
import { formulas, convertToKey } from '../lib/utils'
import type { FormulaItem } from '../lib/types'
// import KatexElement from './KatexElement.vue'
import FormulaCard from './FormulaCard.vue'

let allValues = Object.values(formulas).flat()
let filteredValues = ref<FormulaItem[]>(allValues)

const activeButton = ref('all')

function filterList(filterBy: string, wholeList: { [k: string]: FormulaItem[] }) {
  if (filterBy === 'all') {
    filteredValues.value = allValues
  } else {
    filteredValues.value = wholeList[filterBy].flat()
  }
}

function selectSubject(e: MouseEvent) {
  const key = convertToKey((e.currentTarget as HTMLButtonElement)?.value)
  filterList(key, formulas)
  activeButton.value = key
}

const listOfSubjects = ref([
  'All',
  'Logic',
  'Sums',
  'Counting & probability',
  'Laws of exponents',
  'Properties of logarithms'
])
</script>

<template>
  <div class="subjects">
    <div v-for="item of listOfSubjects" :key="item" data-test="subjects">
      <button
        @click="selectSubject"
        class="subject-btn"
        :class="{ isActive: activeButton === convertToKey(item) }"
        :value="convertToKey(item)"
        data-test="subject-btn"
      >
        {{ item.toUpperCase() }}
      </button>
    </div>
  </div>
  <div class="formulas-container">
    <FormulaCard :filtered-values="filteredValues" />
  </div>
</template>

<style scoped>
.subjects {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
}

.subject-btn {
  background-color: var(--background-color-primary);
  padding: 16px;
  border-color: rgba(147, 112, 219, 0.5);
  border-radius: 4px;
  color: var(--text-primary-color);
}

.subject-btn:hover {
  background-color: var(--background-color-secondary);
}

.subject-btn.isActive {
  background-color: var(--accent-color);
}

.formulas-container {
  display: grid;
  grid-template-columns: repeat(2, 500px);
  gap: 3rem;
  place-content: center;
  text-align: center;
  margin-top: 2rem;
}

@media (orientation: portrait) {
  .subjects {
    flex-direction: column;
  }
  .formulas-container {
    grid-template-columns: 1fr;
  }
}
</style>
