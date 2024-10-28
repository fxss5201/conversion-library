/// <reference types="vitest" />
import { defineConfig } from 'vite'
import { coverageConfigDefaults } from 'vitest/config'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: './lib/main.ts',
      name: 'conversion-library',
      fileName: 'conversion-library'
    }
  },
  plugins: [
    dts({
      outDir: 'types',
      include: './lib/**'
    })
  ],
  test: {
    coverage: {
      enabled: true,
      exclude: ['**/src/**', '**/scripts/**', ...coverageConfigDefaults.exclude]
    },
  },
})
