const state = {
    cart: [],
  };
  
  const mutations = {
    addToCart(state, product) {
      const existingProduct = state.cart.find(item => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
        existingProduct.price += product.price;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart(state, productId) {
      state.cart = state.cart.filter(item => item.id !== productId);
    },
    clearCart(state) {
      state.cart = [];
    },
  };
  
  const actions = {
    addToCart({ commit }, product) {
      commit('addToCart', product);
      alert('Product added to cart!');
    },
    removeFromCart({ commit }, productId) {
      commit('removeFromCart', productId);
    },
    clearCart({ commit }) {
      commit('clearCart');
    },
  };
  
  const getters = {
    cartItems(state) {
      return state.cart;
    },
    cartTotal(state) {
      return state.cart.reduce((total, product) => total + product.price * product.quantity, 0);
    },
    cartCount(state) {
      return state.cart.reduce((count, product) => count + product.quantity, 0);
    },
  };
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
  };
  