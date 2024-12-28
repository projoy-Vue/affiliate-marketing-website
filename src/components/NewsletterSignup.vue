<template>
    <section class="newsletter-signup">
      <div class="content">
        <h2 class="headline">Stay Updated with Our Latest Deals!</h2>
        <p class="description">
          Subscribe to our newsletter and never miss out on our exclusive offers and updates.
        </p>
        <form @submit.prevent="subscribe">
          <div class="form-group">
            <input
              type="email"
              v-model="email"
              placeholder="Enter your email address"
              required
            />
            <button type="submit" class="subscribe-btn">Subscribe Now</button>
          </div>
        </form>
        <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: "",
        successMessage: "",
      };
    },
    methods: {
      subscribe() {
        if (this.email) {
          // Simulate subscription success
          console.log(`Subscribed email: ${this.email}`);
          this.successMessage = "Thank you for subscribing!";
          this.email = ""; // Clear the input field
        } else {
          alert("Please enter a valid email address.");
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .newsletter-signup {
    padding: 40px 20px;
    text-align: center;
    background: linear-gradient(135deg, #6b73ff, #000dff);
    color: white;
    border-radius: 10px;
    margin: 20px;
  }
  
  .content {
    max-width: 600px;
    margin: 0 auto;
  }
  
  .headline {
    font-size: 2rem;
    margin-bottom: 10px;
    font-weight: bold;
  }
  
  .description {
    font-size: 1.2rem;
    margin-bottom: 20px;
  }
  
  .form-group {
    display: flex;
    gap: 10px;
    justify-content: center;
    margin-bottom: 15px;
  }
  
  input {
    flex: 1;
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
  }
  
  .subscribe-btn {
    padding: 10px 20px;
    font-size: 1rem;
    font-weight: bold;
    color: white;
    background-color: #ff7e5f;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .subscribe-btn:hover {
    background-color: #ff6a4a;
  }
  
  .success-message {
    color: #4caf50;
    font-size: 1rem;
    margin-top: 10px;
  }
  </style>
  