import './assets/main.css';

import {createApp} from 'vue';

// Import Material Design Icons
import '@mdi/font/css/materialdesignicons.css';

// Components
import App from './App.vue';

import {ElectronAPI} from '@electron-toolkit/preload';

// Import Vuetify configuration
import vuetify from './plugins/vuetify';

declare global {
  interface Window {
    electron: ElectronAPI;
    api: unknown;
  }
}

createApp(App).use(vuetify).mount('#app');
