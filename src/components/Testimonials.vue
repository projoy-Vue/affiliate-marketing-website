<template>
    <section class="customer-testimonials">
      <h2 class="section-title">What Our Customers Are Saying</h2>
      
      <div class="testimonial-carousel">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="testimonial.id"
          class="testimonial-card"
          :class="{ active: index === currentIndex }"
        >
          <div class="avatar">
            <img :src="testimonial.avatar" alt="customer avatar" />
          </div>
          <div class="testimonial-content">
            <p class="quote">"{{ testimonial.testimonial }}"</p>
            <div class="rating">
              <span v-for="star in testimonial.rating" :key="star" class="star">★</span>
            </div>
            <p class="customer-name">{{ testimonial.name }}</p>
          </div>
        </div>
        
        <div class="carousel-controls">
          <button @click="prevTestimonial" class="prev-btn">❮</button>
          <button @click="nextTestimonial" class="next-btn">❯</button>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import { mapGetters } from 'vuex';
  
  export default {
    data() {
      return {
        currentIndex: 0
      };
    },
    computed: {
      ...mapGetters('testimonials', ['getTestimonials']),
      testimonials() {
        return this.getTestimonials;
      }
    },
    methods: {
      prevTestimonial() {
        this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
      },
      nextTestimonial() {
        this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
      }
    },
    created() {
      this.$store.dispatch('testimonials/loadTestimonials');
    }
  };
  </script>
  
  <style scoped>
  /* Styles for the customer testimonials section */
  .customer-testimonials {
    padding: 40px 20px;
    background-color: #f8f9fa;
    text-align: center;
  }
  
  .section-title {
    font-size: 2rem;
    margin-bottom: 20px;
    color: #333;
  }
  
  .testimonial-carousel {
    position: relative;
    max-width: 800px;
    margin: 0 auto;
  }
  
  .testimonial-card {
    display: none;
    transition: opacity 0.3s ease;
    opacity: 0;
  }
  
  .testimonial-card.active {
    display: block;
    opacity: 1;
  }
  
  .avatar {
    margin-bottom: 15px;
  }
  
  .avatar img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
  
  .testimonial-content {
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .testimonial-content .quote {
    font-style: italic;
    color: #333;
  }
  
  .rating {
    margin-top: 10px;
  }
  
  .star {
    color: #f39c12;
    font-size: 18px;
  }
  
  .customer-name {
    margin-top: 15px;
    font-weight: bold;
    color: #007bff;
  }
  
  .carousel-controls {
    position: absolute;
    top: 50%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    transform: translateY(-50%);
  }
  
  .prev-btn, .next-btn {
    background-color: transparent;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    color: #007bff;
  }
  
  .prev-btn:hover, .next-btn:hover {
    color: #0056b3;
  }
  </style>
  