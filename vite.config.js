import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/CnTrol/', 
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',  // auto update the service worker
      manifest: {
        name: 'CnTrol',
        short_name: 'CP',
        start_url: '/',
        display: 'standalone',
        background_color: '#def2f1',
        theme_color: '#00796b',
        icons: [
          {
            src: 'favicon.ico',
            sizes: '64x64 32x32 24x24 16x16',
            type: 'image/x-icon'
          },
          {
            src: 'icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})
