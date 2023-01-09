import { createStore } from 'vuex'

export default createStore({
  state: {
    products: []
  },
  getters: {
    products(items) {
      return items.products;
    }
  },
  mutations: {
    setProducts(state, products) {
      
    }
  },
  actions: {
  },
  modules: {
  }
})
