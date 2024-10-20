import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { federation } from '@module-federation/vite';
import topLevelAwait from 'vite-plugin-top-level-await';

export default defineConfig({
  server: {
    port: 2001,
    origin: 'http://localhost:2001',
    
  },
  preview: {
    port: 2001,
  },
  base: 'http://localhost:2001',
  plugins: [
    react(),
    federation({
      name: '@namespace/remote',
      filename: 'remoteEntry-[hash].js',
      manifest: true,
      exposes: {
        './features/featureA/PageA': './src/features/featureA/PageA',
        './App': './src/App',
      },
      remotes: {},
      shared: {
        'react/': {},
        react: {},
        'react-dom/': {},
        'react-dom': {},
      },
    }),
    topLevelAwait(),
  ],
});