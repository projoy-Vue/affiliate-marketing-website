// store/modules/testimonials.js
import testimonialData from '@/data/Testmonials.json'; // Path to your testimonials.json file

export default {
    namespaced: true,
  state: {
    testimonials: [],
  },
  mutations: {
    SET_TESTIMONIALS(state, testimonials) {
      state.testimonials = testimonials;
    }
  },
  actions: {
    loadTestimonials({ commit }) {
      // Load the JSON data (or fetch it from an API if needed)
      const testimonials = testimonialData;

      commit('SET_TESTIMONIALS', testimonials);
    }
  },
  getters: {
    getTestimonials: (state) => state.testimonials
  }
};
