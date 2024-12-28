import axios from 'axios';
const state = {
    categories: [],
  };
  
  const getters = {
    allCategories: (state) => state.categories,
  };
  
  const actions = {
    async fetchCategories({ commit }) {
      const response = await axios.get('https://fakestoreapi.com/products/categories');
      commit('setCategories', response.data);
      console.log(response.data);
    },
  };
  
  const mutations = {
    setCategories: (state, categories) => (state.categories = categories),
  };
  
  export default {
    namespaced: true, // Add this line
    state,
    getters,
    actions,
    mutations,
  };
  

