<script setup lang="ts">
import { ref, onMounted } from 'vue'
import ListContainer from './components/ListContainer.vue'
import VueFooter from './components/VueFooter.vue'
import LightThemeIcon from './components/icons/LightThemeIcon.vue'
import DarkThemeIcon from './components/icons/DarkThemeIcon.vue'

type UserTheme = 'light' | 'dark'

const userTheme = ref<UserTheme>(getTheme() || getMediaPreference())

onMounted(() => setTheme(userTheme.value))

function setTheme(theme: UserTheme) {
  localStorage.setItem('user-theme', theme)
  userTheme.value = theme
  document.documentElement.className = theme
}

function getTheme(): UserTheme {
  return localStorage.getItem('user-theme') as UserTheme
}

function toggleTheme() {
  const activeTheme = localStorage.getItem('user-theme')
  if (activeTheme === 'light') {
    setTheme('dark')
  } else {
    setTheme('light')
  }
}

function getMediaPreference(): UserTheme {
  const hasDarkPreference = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return (hasDarkPreference) ? 'dark' : 'light'
}
</script>

<template>
  <header>
    <div class="title">
      <h1>Reference Formulas</h1>
      <h4>from <a href="">Discrete Mathematics with Applications</a> by Susanna S. Epp</h4>
    </div>
    <div class="theme">
      <button @click="toggleTheme" class="theme-btn">
        <span v-if="userTheme === 'dark'">
          <LightThemeIcon />
        </span>
        <span v-if="userTheme === 'light'">
          <DarkThemeIcon />
        </span>
      </button>
    </div>
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
  justify-content: center;
}

.title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.5;
  flex: 1;
  margin-left: 1rem;
}

h1 {
  margin-bottom: 0;
}

h4 {
  font-size: smaller;
  margin-top: 0;
}

.theme {
  align-self: center;
  border: 1px solid var(--background-color-secondary);
  border-radius: 4px;
}

.theme-btn {
  background-color: inherit;
  border: none;
}

@media (orientation: portrait) {
  header {
    flex-direction: column;
    gap: 18px;
  }

  .theme {
    align-self: flex-start;
  }
}
</style>
