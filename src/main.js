import { createApp } from 'vue'

// Import our custom CSS
import './scss/style.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import App from './App.vue'
import { router } from './js/router'

createApp(App).use(router).mount('#app')
