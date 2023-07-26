<template>
  <nav class="navbar d-flex justify-content-between align-items-center">
    <router-link class="logo ms-5" to="/">Logo</router-link>

    <ul class="menu d-flex justify-content-between align-items-center m-2">
      <li><a class="m-3" href="#">賣家中心</a></li>
      <li><a class="m-3" href="#">購物車</a></li>
      <li><a class="m-3" href="#">使用者</a></li>
    </ul>
  </nav>
</template>

<style>
/* 样式可以根据您的需要进行自定义 */
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
</style>
