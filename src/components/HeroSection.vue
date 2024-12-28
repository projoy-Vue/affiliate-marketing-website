<template>
    <section class="hero-section">
      <!-- Parallax Banner -->
      <div class="hero-banner">
        <div class="hero-content">
          <h1 class="hero-title">Discover Your Perfect Gift</h1>
          <p class="hero-tagline">Shop personalized products made with love!</p>
          <div class="cta-buttons">
            <button class="btn btn-primary" @click="navigateToShop">Shop Now</button>
            <button class="btn btn-secondary">View Deals</button>
          </div>
        </div>
      </div>
  
      <!-- Carousel of Featured Products -->
      <div class="carousel-container">
        <div 
          class="carousel" 
          :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
        >
          <div
            class="carousel-item"
            v-for="(product, index) in featuredProducts"
            :key="index"
          >
            <img :src="product.image" :alt="product.title" />
            <h3>{{ product.title }}</h3>
            <p>{{ product.description }}</p>
          </div>
        </div>
        <!-- Carousel Controls -->
        <button class="carousel-control prev" @click="prevSlide">‹</button>
        <button class="carousel-control next" @click="nextSlide">›</button>
      </div>
    </section>
  </template>
  <script>
  export default {
    name: "HeroSection",
    data() {
      return {
        currentSlide: 0,
        featuredProducts: [
          {
            title: "Custom Mug",
            description: "Start your mornings with personalized mugs.",
            image: "https://picsum.photos/id/14/367/267",
          },
          {
            title: "Engraved Watch",
            description: "A timeless gift for any occasion.",
            image: "https://picsum.photos/id/14/367/267",
          },
          {
            title: "Photo Frame",
            description: "Capture memories in custom frames.",
            image: "https://picsum.photos/id/14/367/267",
          },
        ],
      };
    },
    methods: {
      navigateToShop() {
        // Redirect to the shop page
        this.$router.push("/shop");
      },
      nextSlide() {
        this.currentSlide =
          (this.currentSlide + 1) % this.featuredProducts.length;
      },
      prevSlide() {
        this.currentSlide =
          (this.currentSlide - 1 + this.featuredProducts.length) %
          this.featuredProducts.length;
      },
    },
  };
  </script>
  <style scoped>
  .hero-section {
    position: relative;
    width: 100%;
    overflow: hidden;
  }
  
  /* Parallax Banner */
  .hero-banner {
    background-image: url('https://picsum.photos/536/354');
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    padding: 100px 20px;
    color: #fff;
    text-align: center;
  }
  .hero-title {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .hero-tagline {
    font-size: 1.5rem;
    margin-bottom: 30px;
  }
  .cta-buttons .btn {
    padding: 10px 20px;
    margin: 0 10px;
    font-size: 1rem;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  .btn-primary {
    background-color: #ff6b6b;
    color: #fff;
  }
  .btn-primary:hover {
    background-color: #e65c5c;
  }
  .btn-secondary {
    background-color: #4caf50;
    color: #fff;
  }
  .btn-secondary:hover {
    background-color: #439a44;
  }
  
  /* Carousel */
  .carousel-container {
    position: relative;
    margin-top: 50px;
    overflow: hidden;
    width: 100%;
    height: 300px;
  }
  .carousel {
    display: flex;
    transition: transform 0.5s ease-in-out;
  }
  .carousel-item {
    flex: 0 0 100%;
    text-align: center;
    padding: 20px;
  }
  .carousel-item img {
    max-width: 100%;
    height: 200px;
    object-fit: contain;
    margin-bottom: 15px;
  }
  .carousel-item h3 {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }
  .carousel-item p {
    font-size: 0.9rem;
    color: #555;
  }
  
  /* Carousel Controls */
  .carousel-control {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    border: none;
    padding: 10px 15px;
    cursor: pointer;
    font-size: 1.5rem;
    z-index: 10;
  }
  .carousel-control.prev {
    left: 10px;
  }
  .carousel-control.next {
    right: 10px;
  }
  .carousel-control:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
  </style>
  