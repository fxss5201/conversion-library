/// <reference types="vitest" />
import { defineConfig } from 'vite'
import { coverageConfigDefaults } from 'vitest/config'

export default defineConfig({
  build: {
    lib: {
      entry: './lib/main.ts',
      name: 'Counter',
      fileName: 'counter'
    }
  },
  test: {
    coverage: {
      enabled: true,
      exclude: ['**/src/**', ...coverageConfigDefaults.exclude]
    },
  },
})
