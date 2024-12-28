<template>
    <section class="featured-products">
        <h2 class="section-title">Featured Products</h2>
        <div class="products-grid">
            <div v-for="product in featuredProducts" :key="product.id" class="product-card" 
                
                @click="showQuickViewModal(product)">
                <img :src="product.image" :alt="product.name" />
                <div class="product-info">
                    <h3>{{ product.name }}</h3>
                    <p>${{ product.price.toFixed(2) }}</p>
                    <div class="rating">
                        <span v-for="n in 5" :key="n" :class="n <= product.rating ? 'filled' : 'empty'">★</span>
                    </div>
                    <button @click.stop="addToCart(product)">Add to Cart</button>
                </div>
            </div>
        </div>

        <!-- Quick View Modal -->
        <div v-if="quickViewProduct" class="quick-view-modal" @click.self="closeQuickView">
            <div class="quick-view-content">
                <button class="close-btn" @click="closeQuickView">X</button>
                <img :src="quickViewProduct.image" :alt="quickViewProduct.name" />
                <h3>{{ quickViewProduct.name }}</h3>
                <p>{{ quickViewProduct.description }}</p>
                <p>${{ quickViewProduct.price.toFixed(2) }}</p>
                <button class="add-to-cart-btn" @click="addToCart(quickViewProduct)">Add to Cart</button>
            </div>
        </div>
    </section>
</template>

<script>
    import { mapState, mapGetters, mapActions } from 'vuex';

    export default {
        data() {
            return {
                quickViewProduct: null,
                featuredProducts: [],

            };
        },
        computed: {
            ...mapGetters('products', ['getFeaturedProducts']),
            featuredProducts() {
                return this.getFeaturedProducts;
            },
        },
        methods: {
            ...mapActions('cart', ['addToCart']),

            showQuickView(product) {
                this.quickViewProduct = product;
                console.log(`Showing quick view for ${product.name}`);
            },
            showQuickViewModal(product) {
                this.quickViewProduct = product;
            },
            closeQuickView() {
                this.quickViewProduct = null;
            },
            addToCart(product) {
                this.$store.dispatch('cart/addToCart', product);
                alert(`${product.name} has been added to the cart!`);
                console.log(`${product.name} added to cart`, product);
            },
        },
        created() {
            this.$store.dispatch('products/loadFeaturedProducts');
        },
    };
</script>




<style scoped>
.featured-products {
    padding: 50px 20px;
    text-align: center;
}

.section-title {
    font-size: 2.5rem;
    margin-bottom: 30px;
    font-weight: bold;
}

.products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
}

.product-card {
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    cursor: pointer;
}

.product-card:hover {
    transform: translateY(-10px);
}

.product-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.product-info {
    padding: 15px;
    background-color: rgba(0, 0, 0, 0.6);
    color: #fff;
    text-align: center;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
}

.product-info h3 {
    font-size: 1.25rem;
    margin-bottom: 10px;
}

.product-info p {
    margin-bottom: 10px;
}

.rating {
    color: gold;
}

.product-info button {
    margin-top: 10px;
    padding: 10px 20px;
    background-color: #ff9f00;
    border: none;
    cursor: pointer;
    border-radius: 5px;
}

.product-info button:hover {
    background-color: #e68900;
}

/* Quick View Modal */
.quick-view-modal {
    position: fixed;
    top: 50px;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
}

.quick-view-content {
    position: relative;
    background-color: #fff;
    padding: 30px;
    max-width: 500px;
    border-radius: 10px;
    text-align: center;
}

.quick-view-content img {
    width: 100%;
    max-height: 300px;
    object-fit: contain;
    margin-bottom: 20px;
}

.close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 20px;
    background: none;
    border: none;
    color: #333;
    cursor: pointer;
}

.close-btn:hover {
    color: red;
}
.add-to-cart-btn{
    margin-top: 10px;
    padding: 10px 20px;
    background-color: #ff9f00;
    border: none;
    cursor: pointer;
    border-radius: 5px;
}

</style>