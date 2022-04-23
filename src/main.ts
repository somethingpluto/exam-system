import '../src/styles/global.css'

import { createApp } from 'vue'

import App from './App.vue'
import naive from './plugins/naive'
import { router } from './router'
import pinia from './store'
createApp(App)
  .use(naive)
  .use(router)
  .use(pinia)
  .mount('#app')
