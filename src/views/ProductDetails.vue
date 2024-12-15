<template>
  <div class="product-details">
    <div v-if="product" class="product-card">
      <!-- Product Image -->
      <img :src="product.image" alt="Product Image" class="product-image" />

      <!-- Product Information -->
      <div class="product-info">
        <h1 class="product-title">{{ product.title }}</h1>
        <p class="product-price">price</p>
        <p class="product-description">{{ product.description }}</p>

        <!-- Add to Cart Button -->
        <button @click="addToCart" class="btn btn-primary">Add to Cart</button>
      </div>
    </div>

    <!-- Show loading state while fetching data -->
    <div v-else class="loading">Loading...</div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute()
const productId = route.params.id
console.log(productId);

onMounted(() => {
  store.getProductById(productId)
})

</script>

<style scoped>
.product-details {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.product-card {
  display: flex;
  max-width: 800px;
  margin: 20px;
}

.product-image {
  max-width: 300px;
  margin-right: 20px;
}

.product-info {
  flex: 1;
}

.product-title {
  font-size: 2rem;
  font-weight: bold;
}

.product-price {
  font-size: 1.5rem;
  color: #28a745;
  margin: 10px 0;
}

.product-description {
  font-size: 1.1rem;
  margin-bottom: 20px;
}

.btn {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.loading {
  text-align: center;
  font-size: 1.5rem;
}
</style>
