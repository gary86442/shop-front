<script setup>
import axios from 'axios'
import router from '../router'
import { useAuthStore } from '../stores/useAuthStore.js'
const { user, token } = useAuthStore()
const login = async () => {
  try {
    // 發送 API 請求進行登入驗證
    const res = await axios.post(
      'https://little-river-2522.fly.dev/api/v1/users/login',
      {
        account: account.value,
        password: password.value
      }
    )
    // 登入成功，獲取回傳的 TOKEN
    token.value = res.data.data.token
    user.value = res.data.user
    router.push('/')

    // 在這裡處理登入成功後的動作，例如導向其他頁面，顯示歡迎訊息等
  } catch (error) {
    // 登入失敗，處理錯誤
    console.error('登入失敗：', error.res.data)
    // 在這裡可以顯示錯誤訊息給使用者
  }
}
</script>
<template>
  <!-- {{ token }} -->
  <div
    class="container-fluid d-flex align-items-center justify-content-center login"
  >
    <div class="login-form">
      <h1 class="logo">Logo</h1>
      <form @submit.prevent="login">
        <div class="mb-3">
          <label for="account" class="form-label">帳號</label>
          <input
            v-model="account"
            type="account"
            class="form-control"
            id="account"
            required
          />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">密碼</label>
          <input
            v-model="password"
            type="password"
            class="form-control"
            id="password"
            required
          />
        </div>
        <button type="submit" class="btn btn-danger btn-lg btn-block">
          登入
        </button>
      </form>
    </div>
  </div>
</template>

<style>
/* 在這裡可以自訂樣式以模仿 Netflix 風格 */
.container-fluid login {
  height: 100vh;
  background-color: #111;
}

.login-form {
  padding: 40px;
  border-radius: 8px;
  background-color: #222;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.logo {
  color: #e50914;
  font-size: 36px;
  text-align: center;
  margin-bottom: 30px;
}
</style>
