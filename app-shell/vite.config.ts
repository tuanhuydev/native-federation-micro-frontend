import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { federation } from '@module-federation/vite';
import topLevelAwait from 'vite-plugin-top-level-await';

export default defineConfig({
  server: {
    port: 2000,
  },
  preview: {
    port: 2000,
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
  plugins: [
    react(),
    topLevelAwait(),
    federation({
      name: 'app_shell',
      remotes: {
        '@namespace/remote': 'http://localhost:2001/mf-manifest.json',
      },
      shared: {
        react: { singleton: true },
        'react-dom': { singleton: true },
      },
      exposes: {},
      
    }),
  ],
});