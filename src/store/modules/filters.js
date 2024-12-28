const state = {
    searchQuery: '',
    selectedCategory: null,
  };
  
  const getters = {
    searchQuery: (state) => state.searchQuery,
    selectedCategory: (state) => state.selectedCategory,
  };
  
  const actions = {
    updateSearchQuery({ commit }, query) {
      commit('setSearchQuery', query);
    },
    updateSelectedCategory({ commit }, category) {
      commit('setSelectedCategory', category);
    },
  };
  
  const mutations = {
    setSearchQuery: (state, query) => (state.searchQuery = query),
    setSelectedCategory: (state, category) => (state.selectedCategory = category),
  };
  
  export default {
    state,
    getters,
    actions,
    mutations,
  };
  