import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const user = reactive({})
  const token = ref('')
  const logout = () => {
    token.value = ''
  }
  return { user, token, logout }
})
