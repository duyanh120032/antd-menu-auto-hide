import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      directoryAsNamespace: true,
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          'border-radius-base': '10px',
          'blue-base': '#efa',
          'layout-trigger-background': '#00000',
          'layout-header-background': '#000000',
        },
        javascriptEnabled: true,
      },
      // scss: {
      //   additionalData: `
      //   @use 'sass:math';
      //   @import "src/styles/global.scss";
      //   `,
      // },
    },
  },
});
