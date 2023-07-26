<script setup>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div>
    <NavBar />
    <main class="text-center d-flex justify-content-center">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
main {
  min-height: 800px;
}
</style>
