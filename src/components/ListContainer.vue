<script setup lang="ts">
import { ref } from 'vue'
import { formulas, convertToKey } from '../lib/utils'
import type { FormulaItem } from '../lib/types'
import KatexElement from './KatexElement.vue'

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

function selectSubject(e: Event) {
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
    <div v-for="item of listOfSubjects" :key="item">
      <button
        @click="selectSubject"
        class="subject-btn"
        :class="{ isActive: activeButton === convertToKey(item) }"
        :value="convertToKey(item)"
      >
        {{ item.toUpperCase() }}
      </button>
    </div>
  </div>
  <div class="formulas-container">
    <div v-for="(item, index) in filteredValues" :key="index">
      <div class="formula-card">
        <h1>{{ item.title }}</h1>
        <KatexElement :item="item" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.subjects {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.subject-btn {
  background-color: rgba(0, 0, 0, 0.03);
  padding: 16px;
  border-color: rgba(147, 112, 219, 0.7);
  border-radius: 4px;
}

.isActive {
  background-color: rgba(135, 206, 235, 0.7);
}

.formulas-container {
  display: grid;
  grid-template-columns: repeat(2, 500px);
  gap: 3rem;
  place-content: center;
  text-align: center;
  font-size: smaller;
}

@media (orientation: portrait) {
  .subjects {
    flex-direction: column;
  }
  .formulas-container {
    /* flex-direction: column; */
    grid-template-columns: 1fr;
  }
}
</style>
