<template>
    <v-app-bar title="植物大战僵尸融合版修改器" class="draggable">
        <v-spacer></v-spacer>
        <!-- This pushes the following elements to the right -->
        <v-btn icon @click="toggleTheme" class="non-draggable">
            <v-icon :icon="mdiThemeLightDark"></v-icon>
        </v-btn>
        <v-btn icon @click="minimizeWindow" class="non-draggable">
            <v-icon :icon="mdiWindowMinimize"></v-icon>
        </v-btn>
        <v-btn icon @click="closeWindow" class="non-draggable">
            <v-icon :icon="mdiWindowClose"></v-icon>
        </v-btn>
    </v-app-bar>
</template>

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

import { mdiThemeLightDark, mdiWindowMinimize, mdiWindowClose } from '@mdi/js';
import { useTheme } from 'vuetify'

const theme = useTheme()

// Define your methods here
const toggleTheme = () => {
    theme.global.name.value = theme.global.name.value === 'light' ? 'dark' : 'light'
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

<style scoped>
.draggable {
    -webkit-app-region: drag;
}

.non-draggable {
    -webkit-app-region: no-drag;
}
</style>
