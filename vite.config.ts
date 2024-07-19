/// <reference types="vitest" />
import { defineConfig } from 'vite'
import { coverageConfigDefaults } from 'vitest/config'

export default defineConfig({
  build: {
    lib: {
      entry: './lib/main.ts',
      name: 'conversion-library',
      fileName: 'conversion-library'
    }
  },
  test: {
    coverage: {
      enabled: true,
      exclude: ['**/src/**', '**/scripts/**', ...coverageConfigDefaults.exclude]
    },
  },
})
