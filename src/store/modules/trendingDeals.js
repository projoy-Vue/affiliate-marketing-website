// store/modules/trendingDeals.js
import productData from '@/data/products.json'; // Path to your product.json file

export default {
    namespaced: true,
  state: {
    trendingDeals: [],
  },
  mutations: {
    SET_TRENDING_DEALS(state, deals) {
      state.trendingDeals = deals;
    },
  },
  actions: {
    loadTrendingDeals({ commit }) {
      // Filter the products that are marked as 'trending' in your product.json
      const trendingDeals = productData.filter(product => product.trending);

      // Commit the mutation to update the state
      commit('SET_TRENDING_DEALS', trendingDeals);
    },
  },
  getters: {
    getTrendingDeals: (state) => state.trendingDeals,
  },
};
