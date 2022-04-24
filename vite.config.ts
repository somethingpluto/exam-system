import vue from '@vitejs/plugin-vue'
// https://vitejs.dev/config/
import dotenv from 'dotenv';
import path from 'path';
import postcssNesting from "postcss-nesting";
import { defineConfig } from 'vite'
/* load envs */
[`.env`, `.env.${process.env.NODE_ENV}`, `.env.${process.env.NODE_ENV}.local`].forEach(item => {
  dotenv.config({
    path: item
  })
})

/**
 * postcss 插件：https://www.jianshu.com/p/21be605c6ad1
 */
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.join(__dirname, 'src')
    }
  },
  build: {
    sourcemap: 'hidden'
  },
  css: {
    postcss: {
      plugins: [
        postcssNesting()
      ]
    }
  },
  server: {
    port: 88,
    open: true, //自动打开 
    base: "./ ", //生产环境路径
    proxy: { // 本地开发环境通过代理实现跨域，生产环境使用 nginx 转发
      // 正则表达式写法
      '^/api': {
        target: 'http://101.35.158.149:8080/', // 后端服务实际地址
        changeOrigin: true, //开启代理
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})