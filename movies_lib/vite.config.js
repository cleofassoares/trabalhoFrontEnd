import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

console.log('VITE_API:', process.env.VITE_API);
console.log('VITE_API_KEY:', process.env.VITE_API_KEY);
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
