import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// for Adding suport for absolute imports. 
// means instead of import ./.../../components/Ex.jsx
//  to  @components/component-name
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'


export default defineConfig({
  plugins: [
    tailwindcss(), react()],

  // code for suppot of absolute imports 
  resolve: {
    alias: {
      // components coming from src component
      '#components': resolve(dirname(fileURLToPath(import.meta.url)), 'src/components'),
      // constants coming from src constants & so on
      '#constants': resolve(dirname(fileURLToPath(import.meta.url)), 'src/constants'),
      '#store': resolve(dirname(fileURLToPath(import.meta.url)), 'src/store'),
      '#hoc': resolve(dirname(fileURLToPath(import.meta.url)), 'src/hoc'),
      '#windows': resolve(dirname(fileURLToPath(import.meta.url)), 'src/windows'),
    }
  }
})
