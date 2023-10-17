<script setup lang="ts">
import ListContainer from './components/ListContainer.vue'
import VueFooter from './components/VueFooter.vue'
</script>

<template>
  <header>
    <h1>Reference Formulas</h1>
    <h4>from <a href="">Discrete Mathematics with Applications</a> by Susanna S. Epp</h4>
  </header>
  <main>
    <ListContainer />
  </main>
  <VueFooter />
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Imprima&display=swap');

header,
main {
  font-family: 'Imprima', sans-serif;
}

header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.5;
}

h1 {
  margin-bottom: 0;
}

h4 {
  font-size: smaller;
  margin-top: 0;
}

a {
  color: mediumpurple;
}
</style>
