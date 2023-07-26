import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useBaseURLStore = defineStore('baseURL', () => {
  const baseURL = ref('https://little-river-2522.fly.dev')
  return { baseURL }
})
