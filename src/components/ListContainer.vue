<script setup lang="ts">
import { ref } from 'vue'
import { formulas, convertToKey } from '../lib/utils'
import type { FormulaItem } from '../lib/types'
import KatexElement from './KatexElement.vue'

let allValues = Object.values(formulas).flat()
let filteredValues = ref<FormulaItem[]>(allValues)

function filterList(filterBy: string, wholeList: { [k: string]: FormulaItem[] }) {
  if (filterBy === 'all') {
    filteredValues.value = allValues
  }
  filteredValues.value = wholeList[filterBy].flat()
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
        @click="
          (e) => filterList(convertToKey((e.currentTarget as HTMLButtonElement)?.value), formulas)
        "
        class="subject-btn"
        :value="item"
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
  background-color: rgba(0, 0, 0, 0.07);
  padding: 16px;
  border-color: mediumpurple;
  border-radius: 2px;
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
