import { defineConfig } from 'vite';
import { fileURLToPath } from 'url';

import vue from '@vitejs/plugin-vue';


// Exporta a configuração do Vite
export default defineConfig({
  plugins: [
    vue()
  ],
  test: {
    globals: true
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
});
