<template>
  <div id="app">
    <Navbar />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <Footer />

  </div>
</template>
<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Navbar,
    Footer,
  },
}
</script>

<style scoped>
.nav {
  background: #f1f1f1;
  padding: 10px;
  text-align: center;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
