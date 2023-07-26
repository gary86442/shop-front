<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useAuthStore } from '../stores/useAuthStore'
const { token, user, logout } = storeToRefs(useAuthStore())
</script>
<template>
  <nav class="navbar d-flex justify-content-between align-items-center">
    <router-link class="logo ms-5" to="/">Logo</router-link>

    <ul class="menu d-flex justify-content-between align-items-center m-2">
      <li><a class="m-3" href="#">賣家中心</a></li>
      <li><a class="m-3" href="#">購物車</a></li>
      <li v-if="user === ''">
        <router-link to="/login" class="btn">登入</router-link>
      </li>
      <li v-else><a class="m-3" href="#">使用者</a></li>
    </ul>
  </nav>
</template>

<style>
.navbar {
  background-color: #000;
  padding: 10px;
}

.navbar .logo {
  color: #e50914;
  font-size: 36px;
}
.menu li {
  list-style: none;
}

.menu li a {
  color: #fff;
  text-decoration: none;
  font-size: 24px;
}

.menu li a:hover {
  color: #aaa;
}
.btn {
  background-color: #e50914;
}
</style>
