// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: ['@pinia/nuxt', "@nuxtjs/tailwindcss"],
    vite: {
        clearScreen: false,
        server: {
            port: 1420,
            strictPort: true,
            watch: {
                // 3. tell vite to ignore watching `src-tauri`
                ignored: ["**/src-tauri/**"],
            },
        }
    }
})