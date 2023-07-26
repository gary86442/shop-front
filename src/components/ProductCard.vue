<script setup>
const props = defineProps({
  image: String,
  title: String,
  // description: String,
  price: Number,
  id: Number
})
</script>
<template>
  <div class="col-md-2">
    <div class="card mb-4 shadow-sm">
      <router-link :to="`/launched_ps/${id}`">
        <img
          v-if="image === ''"
          class="card-img-top img-fluid"
          src="https://picsum.photos/200/300"
          alt="Card image cap"
          width="286px"
          height="180px"
          style="transition: opacity 0.5s; opacity: 0"
          onload="style.opacity=1;"
        />
        <img
          v-else
          class="card-img-top img-fluid"
          src="https://picsum.photos/200/300"
          alt="Card image cap"
          width="286px"
          height="180px"
          style="transition: opacity 0.5s; opacity: 0"
          onload="style.opacity=1;"
        />
      </router-link>

      <div class="card-body">
        <p class="card-text">
          <router-link :to="`/launched_ps/${id}`">
            {{ title }}
          </router-link>
        </p>

        <p class="card-text text-truncate">售價：{{ price }}</p>
      </div>
    </div>
  </div>
</template>

<style>
.card {
  background-color: #222; /* 使用Netflix黑色背景 */
}

.card-img-top {
  background-color: #222; /* 使用Netflix黑色背景 */
}

.card-body {
  color: #aaa; /* 使用白色文字 */
}
a {
  text-decoration: none;
  color: #fff;
}
</style>
