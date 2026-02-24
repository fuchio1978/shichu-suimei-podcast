import { defineConfig } from 'vite'

export default defineConfig({
    // GitHub Pagesにデプロイする場合、リポジトリ名に合わせて設定する必要があります
    // 例: https://<USERNAME>.github.io/<REPO>/ の場合は '/<REPO>/'
    base: './',
    build: {
        outDir: 'dist',
    }
})
