/*
 * @Date: 2023-07-06 15:42:37
 * @Author: liufan
 * @Description:
 */
import { fileURLToPath, URL } from "node:url";
import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import ViteComponents, { AntDesignVueResolver } from "vite-plugin-components";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    ViteComponents({
      customComponentResolvers: [AntDesignVueResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      packages: resolve("packages"),
    },
  },
  build: {
    outDir: "liufan-ui",
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, "./src/packages/index.ts"),
      name: "liufan-ui",
      // the proper extensions will be added
      fileName: "liufan-ui",
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ["vue"],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  server: {
    host: true,
    open: true,
  },
});
