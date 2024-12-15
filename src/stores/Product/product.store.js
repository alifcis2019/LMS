import { defineStore } from 'pinia'
import SettingServices from '@/services/Settings/setting.services'

export const useProductStore = defineStore('products', {
  state: () => ({
    records: null,
    uiFlags: {
      isLoading: false,
    },
  }),
  getters: {},
  actions: {
    // Fetch a single product by ID
    getProductById: async function (productId) {
      try {
        this.uiFlags.isLoading = true
        // Assuming your service has a method for fetching a single product by ID
        const data = await SettingServices.getById(productId)
        this.selectedProduct = data.data  // Store the specific product data
      } catch (error) {
        console.log(error)
        throw error
      } finally {
        this.uiFlags.isLoading = false
      }
    },
  },
})
