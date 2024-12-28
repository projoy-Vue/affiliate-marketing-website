<template>
    <section class="trending-deals">
      <h2 class="section-title">Trending Deals</h2>
      <div class="deals-grid">
        <div
          v-for="deal in trendingDeals"
          :key="deal.id"
          class="deal-card"
        >
          <img :src="deal.image" :alt="deal.name" />
          <div class="deal-info">
            <h3>{{ deal.name }}</h3>
            <p><strong>Price:</strong> \${{ deal.price.toFixed(2) }}</p>
            <div class="countdown">
              <p v-if="deal.isSale">
                Ends in: 
                <span>{{ timeLeft(deal.endTime) }}</span>
              </p>
            </div>
            <button @click="goToProductPage(deal)">Shop Now</button>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import { mapGetters } from 'vuex';
  
  export default {
    computed: {
      ...mapGetters('trendingDeals', ['getTrendingDeals']),
      trendingDeals() {
        return this.getTrendingDeals;
      },
    },
    methods: {
      timeLeft(endTime) {
        const currentTime = new Date();
        const timeDifference = new Date(endTime) - currentTime;
        
        if (timeDifference <= 0) {
          return "Offer Expired";
        }
        
        const hours = Math.floor(timeDifference / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
        
        return `${hours}h ${minutes}m ${seconds}s`;
      },
      goToProductPage(deal) {
        this.$router.push({ name: 'product-details', params: { id: deal.id } });
        console.log(`Navigating to product page for ${deal.name}`);
      },
    },
    created() {
      // Dispatch action to load trending deals when component is created
      this.$store.dispatch('trendingDeals/loadTrendingDeals');
    },
  };
  </script>
  
  
  <style scoped>
  /* Styles for the trending deals section */
  .trending-deals {
    padding: 40px 20px;
    background-color: #f8f9fa;
    text-align: center;
  }
  
  .section-title {
    font-size: 2rem;
    margin-bottom: 20px;
    color: #333;
  }
  
  .deals-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
  }
  
  .deal-card {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    padding: 20px;
    text-align: center;
    position: relative;
  }
  
  .deal-card img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }
  
  .deal-info {
    margin-top: 15px;
  }
  
  .deal-info h3 {
    font-size: 1.2rem;
    color: #007bff;
    margin: 10px 0;
  }
  
  .deal-info p {
    color: #333;
    font-size: 1rem;
  }
  
  .countdown p {
    font-size: 1.1rem;
    color: #e74c3c;
    font-weight: bold;
  }
  
  button {
    margin-top: 15px;
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  