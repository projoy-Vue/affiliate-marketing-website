import productsData from '@/data/products.json';

const state = {
  products: productsData,
  featuredProducts: [],
};

const mutations = {
  setFeaturedProducts(state) {
    state.featuredProducts = state.products.filter(product => product.featured);
    console.log(state.featuredProducts);
  },
};

const actions = {
  loadFeaturedProducts({ commit }) {
    commit('setFeaturedProducts');
  },
};

const getters = {
  getAllProducts(state) {
    return state.products;
  },
  getFeaturedProducts(state) {
    return state.featuredProducts;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};

