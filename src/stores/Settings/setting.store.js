import { defineStore } from 'pinia'
import SettingServices from '@/services/Settings/setting.services'

export const useSettingsStore = defineStore('products', {
  state: () => ({
    records: null,
    uiFlags: {
      isLoading: false,
    },
  }),
  getters: {},
  actions: {
    get: async function () {
      try {
        this.uiFlags.isLoading = true
        const data = await SettingServices.get()
        this.records = data.data
      } catch (error) {
        console.log(error)
        throw error
      } finally {
        this.uiFlags.isLoading = false
      }
    },
  },
})
