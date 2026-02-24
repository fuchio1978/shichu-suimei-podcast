import { defineConfig } from 'vite'

export default defineConfig({
    // GitHub Pagesにデプロイする場合、リポジリ名に合わせて設定する必要があります
    base: '/shichu-suimei-podcast/',
    build: {
        outDir: 'dist',
    }
})
