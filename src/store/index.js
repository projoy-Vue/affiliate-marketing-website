 import { createStore } from 'vuex';
 import categories from './modules/categories';
 import products from './modules/products';
 import trendingDeals from './modules/trendingDeals';
 import testimonials from './modules/testimonials';
 import filters from './modules/filters';
 const store = createStore({
     namespaced: true,
     modules: {
     categories,
     products,
     trendingDeals,
    testimonials,
     filters,
   },
 });

 export default store;
