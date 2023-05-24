import { resolve } from 'path';
import { defineConfig, loadEnv } from 'vite';
import vue2 from '@vitejs/plugin-vue2';
import stylelint from 'vite-plugin-stylelint';
import inspect from 'vite-plugin-inspect';

export default ({ mode }) => {
  const { VITE_PORT, VITE_BASE_URL } = loadEnv(mode, process.cwd());

  return defineConfig({
    base: VITE_BASE_URL,
    plugins: [
      vue2(),
      stylelint({
        // fix: true,
      }),
      inspect(),
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
    css: {
      modules: false,
    },
    server: {
      https: false,
      port: VITE_PORT,
      host: '0.0.0.0',
      open: true,
      cors: true,
      proxy: {},
    },
    build: {
      target: 'es2015',
      sourcemap: false,
      chunkSizeWarningLimit: 2000,
      reportCompressedSize: false,
    },
  });
};
