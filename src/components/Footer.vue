<template>
    <footer class="footer">
      <div class="footer-container">
        <!-- Links Section -->
        <div class="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><router-link to="/about">About Us</router-link></li>
            <li><router-link to="/contact">Contact Us</router-link></li>
            <li><router-link to="/privacy-policy">Privacy Policy</router-link></li>
            <li><router-link to="/terms">Terms & Conditions</router-link></li>
          </ul>
        </div>
  
        <!-- Social Media Section -->
        <div class="footer-social">
          <h4>Follow Us</h4>
          <div class="social-icons">
            <a href="https://facebook.com" target="_blank" aria-label="Facebook">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" aria-label="Twitter">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" aria-label="Instagram">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
  
        <!-- Newsletter Signup Section -->
        <div class="footer-newsletter">
          <h4>Newsletter</h4>
          <p>Subscribe to our newsletter for the latest updates and deals!</p>
          <form @submit.prevent="subscribeNewsletter">
            <input type="email" v-model="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
  
      <div class="footer-bottom">
        <p>&copy; 2024 YourCompanyName. All Rights Reserved.</p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
      };
    },
    methods: {
      subscribeNewsletter() {
        alert(`Thank you for subscribing with email: ${this.email}`);
        console.log('Newsletter subscription:', this.email);
        this.email = ''; // Clear the input field after submission
      },
    },
  };
  </script>
  
  <style scoped>
  /* Footer Styles */
  .footer {
    background-color: #333;
    color: #fff;
    padding: 20px 0;
    font-family: Arial, sans-serif;
  }
  
  .footer-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-start;
    gap: 20px;
    padding: 0 20px;
  }
  
  .footer-links,
  .footer-social,
  .footer-newsletter {
    flex: 1;
    min-width: 250px;
  }
  
  .footer-links h4,
  .footer-social h4,
  .footer-newsletter h4 {
    margin-bottom: 10px;
    font-size: 18px;
  }
  
  .footer-links ul {
    list-style: none;
    padding: 0;
  }
  
  .footer-links li {
    margin: 8px 0;
  }
  
  .footer-links a {
    text-decoration: none;
    color: #fff;
    transition: color 0.3s ease;
  }
  
  .footer-links a:hover {
    color: #00bcd4;
  }
  
  .footer-social .social-icons {
    display: flex;
    gap: 10px;
  }
  
  .footer-social a {
    color: #fff;
    font-size: 20px;
    transition: color 0.3s ease;
  }
  
  .footer-social a:hover {
    color: #00bcd4;
  }
  
  .footer-newsletter p {
    margin-bottom: 10px;
    font-size: 14px;
  }
  
  .footer-newsletter form {
    display: flex;
    gap: 10px;
  }
  
  .footer-newsletter input {
    flex: 1;
    padding: 8px;
    border: none;
    border-radius: 4px;
  }
  
  .footer-newsletter button {
    padding: 8px 15px;
    border: none;
    border-radius: 4px;
    background-color: #00bcd4;
    color: #fff;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .footer-newsletter button:hover {
    background-color: #0097a7;
  }
  
  .footer-bottom {
    text-align: center;
    margin-top: 20px;
    font-size: 14px;
    border-top: 1px solid #444;
    padding-top: 10px;
  }
  </style>
  