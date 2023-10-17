import 'vue-toastification/dist/index.css'
import './assets/main.css'

import { createApp } from 'vue'
import Toast, { TYPE } from 'vue-toastification'
import type { PluginOptions } from 'vue-toastification'
import App from './App.vue'

const app = createApp(App)
app.mount('#app')

const options: PluginOptions = {
  toastDefaults: {
    [TYPE.SUCCESS]: {
      bodyClassName: 'toast-success'
    }
  }
}
app.use(Toast, options)
