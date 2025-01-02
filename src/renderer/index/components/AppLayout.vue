<script setup lang="ts">
declare global {
  interface Window {
    electron: {
      ipcRenderer: {
        send: (channel: string) => void;
      };
    };
  }
}

import {mdiThemeLightDark, mdiWindowMinimize, mdiWindowClose} from '@mdi/js';
import TitleBar from './TitleBar.vue';
import AppTabs from './AppTabs.vue';

// Define your methods here
const toggleTheme = () => {
  // Add your code to toggle the theme here
};

const minimizeWindow = () => {
  // Add your code to minimize the window here
  window.electron.ipcRenderer.send('minimize');
};

const closeWindow = () => {
  // Add your code to close the window here
  window.electron.ipcRenderer.send('close');
};
</script>

<template>
  <v-app>
    <v-layout class="rounded rounded-md">
      <TitleBar />

      <v-navigation-drawer permanent width="150">
        <v-list>
          <v-list-item title="快速使用"></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main class="align-center justify-center">
        <AppTabs />
      </v-main>
    </v-layout>
  </v-app>
</template>

<style scoped>
.draggable {
  -webkit-app-region: drag;
}

.non-draggable {
  -webkit-app-region: no-drag;
}
</style>
