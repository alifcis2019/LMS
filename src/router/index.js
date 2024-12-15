import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Products from '@/views/Products.vue'
import ProductDetails from '@/views/ProductDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/products',
      name: 'products',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Products,
    },
    {
      path: '/product/:id',  // Dynamic route for product details
      name: 'ProductDetails',
      component: ProductDetails,  // The product details page
      props: true  // Makes the `id` available as a prop in the component
    },
  ],
})

export default router
