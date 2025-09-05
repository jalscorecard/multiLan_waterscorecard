import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/multi_lan/',   
  plugins: [react()],
  optimizeDeps: {
    include: ['hoist-non-react-statics'],
    esbuildOptions: {
      mainFields: ['module', 'main'],
    },
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});
