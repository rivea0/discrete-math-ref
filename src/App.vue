<script setup lang="ts">
import { ref, onMounted } from 'vue'
import ListContainer from './components/ListContainer.vue'
import LightThemeIcon from './components/icons/LightThemeIcon.vue'
import DarkThemeIcon from './components/icons/DarkThemeIcon.vue'
import GitHubIcon from './components/icons/GitHubIcon.vue'
import SiteLinkIcon from './components/icons/SiteLinkIcon.vue'

type UserTheme = 'light' | 'dark'

const userTheme = ref<UserTheme>(getTheme())

onMounted(() => setTheme(userTheme.value || getMediaPreference()))

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
  const hasDarkPreference = window.matchMedia('(prefers-color-scheme: dark)').matches
  return hasDarkPreference ? 'dark' : 'light'
}
</script>

<template>
  <header>
    <div class="title" data-test="title">
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
  <footer>
    <div>
      <p class="footer-primary" data-test="footer-primary">
        Made with &#128156; by Eda Eren. &copy; {{ new Date().getFullYear() }}
      </p>
      <p>
        Rubik (fav)icon from
        <a href="https://www.svgrepo.com/collection/eighties-3/">the Eighties 3 collection</a> from
        SVG Repo.
      </p>
      <p>Icons from <a href="https://phosphoricons.com">Phosphor Icons</a>.</p>
      <div class="footer-icons">
        <a href="https://github.com/rivea0">
          <GitHubIcon :fill-color="userTheme === 'light' ? '#10131a' : '#eff1f5'" />
        </a>
        <a href="https://rivea0.github.io">
          <SiteLinkIcon :fill-color="userTheme === 'light' ? '#10131a' : '#eff1f5'" />
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Imprima&display=swap');

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

.footer-icons {
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
  justify-content: center;
}

.footer-primary {
  text-align: center;
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
