<template>
    <div class="category-page">
      <header>
        <h1>{{ categoryName }}</h1>
      </header>
  
      <section class="products-section">
        <h2>Products</h2>
        <ul class="products-list">
          <li v-for="product in products" :key="product.id" class="product-item">
            <div class="card">
              <!-- Product Image -->
              <img
                :src="product.image || 'https://via.placeholder.com/150'"
                :alt="product.name"
                class="product-image"
              />
  
              <!-- Product Details -->
              <div class="card-content">
                <h3>{{ product.name }}</h3>
                <p>{{ product.description || 'No description available.' }}</p>
                <p class="price">{{ product.price || 'Contact for price' }}</p>
              </div>
  
              <!-- View Product Button -->
              <router-link
                :to="`/product/${product.id}`"
                class="view-product-button"
              >
                View Details
              </router-link>
            </div>
          </li>
        </ul>
      </section>
    </div>
  </template>
  <script>
  
  import axios from 'axios';

  export default {
    namespaced: true,
    state: {
      categoryProducts: [],
    },
    getters: {
      categoryProducts: (state) => state.categoryProducts,
    },
    actions: {
      async fetchCategoryProducts({ commit }, categoryId) {
        try {
          // Use the FakeStoreAPI to fetch products by category
          const response = await axios.get(`https://fakestoreapi.com/products/category/${categoryId}`);
          commit('setCategoryProducts', response.data);
        } catch (error) {
          console.error('Error fetching products from FakeStoreAPI:', error);
        }
      },
    },
    mutations: {
      setCategoryProducts(state, products) {
        state.categoryProducts = products;
      },
    },
  };
  
</script>
  <style scoped>
  /* General styles */
  .category-page {
    font-family: Arial, sans-serif;
    padding: 20px;
    text-align: center;
  }
  
  header h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }
  
  .products-section {
    margin-top: 40px;
  }
  
  .products-section h2 {
    font-size: 2rem;
    margin-bottom: 20px;
  }
  
  /* Products list styles */
  .products-list {
    list-style-type: none;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
  }
  
  .product-item {
    text-align: left;
  }
  
  /* Card styles */
  .card {
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.2s;
  }
  
  .card:hover {
    transform: scale(1.05);
  }
  
  .card img {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }
  
  .card-content {
    padding: 15px;
  }
  
  .card-content h3 {
    font-size: 1.25rem;
    margin: 0 0 10px;
  }
  
  .card-content p {
    font-size: 0.9rem;
    color: #555;
  }
  
  .price {
    color: #007bff;
    font-weight: bold;
  }
  
  /* Button styles */
  .view-product-button {
    display: inline-block;
    margin: 10px 15px 15px;
    padding: 10px 15px;
    background: #28a745;
    color: white;
    text-decoration: none;
    font-size: 0.9rem;
    border-radius: 5px;
    transition: background 0.3s;
  }
  
  .view-product-button:hover {
    background: #218838;
  }
  </style>
  
  