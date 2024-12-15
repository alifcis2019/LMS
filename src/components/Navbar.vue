<template>
  <div>
    <nav class="mb-12 top-0 inse-x-0 bg-[teal] text-white text-xl py-4 flex items-center justify-center gap-12">
      <router-link to="/" active-class="active-link">Home</router-link>
      <router-link to="products" active-class="active-link">Products</router-link>
    </nav>
  </div>
</template>

<style scoped>
.active-link {
  color: rgb(187, 255, 0);
  font-weight: bold;
}
</style>
