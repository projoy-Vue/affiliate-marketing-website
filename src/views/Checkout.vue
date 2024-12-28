<template>
    <div class="checkout">
      <h1>Checkout</h1>
      <div v-if="cartItems.length">
        <div v-for="item in cartItems" :key="item.id" class="cart-item">
          <h3>{{ item.name }}</h3>
          <p>Price: {{ item.price }} x {{ item.quantity }}</p>
          <button @click="removeFromCart(item.id)">Remove</button>
        </div>
        <h2>Total: {{ totalPrice }}</h2>
        <button @click="proceedToPayment">Proceed to Payment</button>
      </div>
      <p v-else>Your cart is empty.</p>
    </div>
  </template>
  
  <script>
  import { mapGetters, mapMutations } from 'vuex';
  
  export default {
    computed: {
      ...mapGetters('products', ['cartItems', 'totalPrice'])
    },
    methods: {
      ...mapMutations('products', ['removeFromCart']),
      proceedToPayment() {
        alert('Payment processing...');
      }
    }
  };
  </script>
  