import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
// import { wrapperEnv } from '@/utils/getEnv';

const pathResolve = (pathUrl) => path.join(__dirname, pathUrl);
// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  console.log(mode, ' -------mode------');
  console.log(command, ' -------command------');

  return {
    plugins: [react()],
    build: {
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: command === 'build' && loadEnv(mode, __dirname).NODE_ENV === 'production',
          drop_debugger: command === 'build' && loadEnv(mode, __dirname).NODE_ENV === 'production'
        }
      }
    },
    resolve: {
      // 文件别名
      alias: {
        '@@': pathResolve('.'),
        '@': pathResolve('src'),
        '@assets': pathResolve('src/assets'),
        '@common': pathResolve('src/common'),
        '@components': pathResolve('src/components'),
        '@api': pathResolve('src/api'),

        '@hooks': pathResolve('src/hooks'),
        '@pages': pathResolve('src/pages'),
        '@store': pathResolve('src/store'),
        '@utils': pathResolve('src/utils'),
        '@config': pathResolve('src/config'),

        '@layouts': pathResolve('src/layouts'),
        '@images': pathResolve('src/images'),
        '@styles': pathResolve('src/styles')
      }
    },
    //配置代理解决跨域
    server: {
      port: 8080,
      // 代理跨域（mock 不需要配置，这里只是个事列）
      proxy: {
        '/api': {
          target: 'http://192.168.1.113:8080/',
          changeOrigin: true,

          headers: {
            host: 'http://192.168.1.113:8080',
            origin: 'http://192.168.1.113:8080'
          },
          // rewrite: path => path.replace(/^\/api/, "/api"),
          // pathRewrite: {
          //     "^api": "/api"
          // },
          secure: false
        }
      }
    },
    // global css
    css: {
      preprocessorOptions: {
        // less: {
        // 	// modifyVars: {
        // 	// 	"primary-color": "#1DA57A",
        // 	// },
        // 	javascriptEnabled: true,
        // 	additionalData: `@import "@/styles/var.less";`
        // },
        scss: {
          javascriptEnabled: true,
          additionalData: `@import "@/styles/shared.scss";`
        }
      }
    }
  };
});
