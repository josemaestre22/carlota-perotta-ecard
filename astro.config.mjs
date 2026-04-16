// @ts-check
import { defineConfig, fontProviders  } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

    fonts: [
      {
        provider: fontProviders.fontsource(),
        name: "Playfair Display",
        cssVariable: "--font-playfair",
        weights: ["400 900"], // Rango variable
        styles: ["normal", "italic"] // Necesitamos itálicas para "entender" y "empezar a transformarlo"
      },

      {
        provider: fontProviders.fontsource(),
        name: "Inter",
        cssVariable: "--font-inter",
        weights: ["100 900"], // Rango variable
      },

      {
        provider: fontProviders.fontsource(),
        name: "DM Sans",
        cssVariable: "--font-dmsans",
        weights: ["100 1000"], // Rango variable
      }
    ]
});