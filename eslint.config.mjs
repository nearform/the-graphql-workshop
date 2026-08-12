import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'
import js from '@eslint/js'
import prettierRecommended from 'eslint-plugin-prettier/recommended'

export default defineConfig([
  globalIgnores([
    '**/coverage/',
    '**/node_modules/',
    '**/dist/',
    '**/public/',
    '**/migrations/',
    '**/theme/'
  ]),
  {
    extends: [js.configs.recommended, prettierRecommended],

    languageOptions: {
      globals: {
        ...globals.node
      },

      ecmaVersion: 2020,
      sourceType: 'module'
    }
  }
])
