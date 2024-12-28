<template>
  <div class="home-page">
    <HeroSection />
    <ProductCategories />
    <FeaturedProducts />
    <TrendingDeals />
    <Testimonials />
    <NewsletterSignup />
    <!-- <BrandsSection/> -->
     
  
   
  </div>
</template>

<script>
import HeroSection from '../components/HeroSection.vue';
import ProductCategories from '../components/ProductCategories.vue';
import FeaturedProducts from '../components/FeaturedProducts.vue';
import TrendingDeals from '../components/TrendingDeals.vue';
import Testimonials from '../components/Testimonials.vue';
import NewsletterSignup from '../components/NewsletterSignup.vue';
// import BrandsSection from '../components/BrandsSection.vue';

export default {
  components: {
    HeroSection,
    ProductCategories,
    FeaturedProducts,
    TrendingDeals,
    Testimonials,
    NewsletterSignup,
    // BrandsSection
  }
};
</script>

<style scoped>

</style>

