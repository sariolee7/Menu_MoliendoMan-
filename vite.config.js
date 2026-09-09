// En este lugar se colocan todas la librerias 

import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'

import tailwindcss from "@tailwindcss/vite"; //libreria para tailwindcss

// https://vite.dev/config/

export default defineConfig({
  plugins: [
    tailwindcss(), //agregando tailwindcss
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
})
