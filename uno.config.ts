import { defineConfig } from 'unocss'

export const cyberColors = {
  bg: '#0B100E',
  surface: '#151E1A',
  cyan: '#3EC8D8',
  neon: '#5CFF8A',
  alert: '#FF5A3A',
  text: '#E7E9E6',
  muted: '#9AA39C',
} as const

export default defineConfig({
  theme: {
    colors: {
      cyber: cyberColors,
    },
  },
  shortcuts: {
    // Tarjeta estándar del deck. Cambiar el borde/acá ajusta las ~100 tarjetas de una vez.
    card: 'rounded-lg border border-gray-300/60',
    // Variante enfatizada (borde doble), usada en las diapositivas de principios.
    'card-strong': 'rounded-lg border-2 border-gray-300/60',
  },
})
