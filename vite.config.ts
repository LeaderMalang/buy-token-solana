import react from "@vitejs/plugin-react-swc";
import dts from 'vite-plugin-dts'

export default {
    plugins: [
        react(),
        dts({ include: ["src"] }),
    ],
    build: {
        outDir: 'dist',
        cssTarget: 'chrome61',
        lib: {
            entry: 'src/index.ts',
            name: 'test',
            fileName: 'index',
        },
        sourcemap: true,
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'react',
                    'react-dom': 'react-dom',
                },
                manualChunks: {
                    antd: ['antd'],
                  },
            },
            onwarn(warning, defaultHandler) {
                if (warning.code === 'SOURCEMAP_ERROR') {
                  return
                }
        
                defaultHandler(warning)
              },
        },
    }
};
