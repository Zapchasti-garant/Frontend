import vue from "@vitejs/plugin-vue";
import autoprefixer from 'autoprefixer';
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),
    vuetify({
      autoImport: true,
    }),
  ],
  css: {
    postcss: {
      plugins: [
        autoprefixer(),
      ],
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "/img": fileURLToPath(new URL("./public/img/", import.meta.url)),
    },
  },
  server: {
    port: 3000,
  },
});
