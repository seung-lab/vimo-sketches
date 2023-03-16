import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from "@vitejs/plugin-react";

export default defineConfig({
  resolve: {
    alias: {
      'react': 'https://esm.sh/react@17',
      'react-dom': 'https://esm.sh/react-dom@17',
    }
  },
  define: { 'process.env.NODE_ENV': '"production"' },
    esbuild: {
        loader: 'jsx',
      },
      optimizeDeps: {
        esbuildOptions: {
          loader: {
            '.js': 'jsx',
          },
        },
      },
    plugins: [ react(),],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/lib/index.js'),
      name: 'Vimo',
      // the proper extensions will be added
      fileName: 'vimo',
    },

  },
})