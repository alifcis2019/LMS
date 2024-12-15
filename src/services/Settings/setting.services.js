import ApiClient from '@/helpers/api.helper'

class Setting extends ApiClient {
  constructor() {
    super('products')
  }
}

export default new Setting()
