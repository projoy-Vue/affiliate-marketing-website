<template>
    <section class="brands-section">
        <h2 class="section-title">Popular Brands</h2>

        <!-- Skeleton Loader -->
        <div v-if="loading" class="brands-grid">
            <div class="brand-card skeleton" v-for="index in 5" :key="index"></div>
        </div>

        <!-- Brands Grid -->
        <div v-else class="brands-grid">
            <router-link v-for="(brand, index) in brands" :key="index" :to="brand.link" class="brand-card"
                @mouseover="showTooltip(index)" @mouseleave="hideTooltip">
                <img :src="brand.logo" :alt="brand.name" />
                <!-- Tooltip -->
                <div v-if="tooltipIndex === index" class="tooltip">
                    {{ brand.description }}
                </div>
            </router-link>
        </div>
    </section>
</template>

<script>
    import axios from "axios";

    export default {
        data() {
            return {
                brands: [],
                loading: true,
                tooltipIndex: null,
            };
        },
        methods: {
            async fetchBrands() {
                try {
                    const response = await axios.get("@/data/brands.json");
                    this.brands = response.data;
                    this.loading = false;
                } catch (error) {
                    console.error("Error fetching brands:", error);
                }
            },
            showTooltip(index) {
                this.tooltipIndex = index;
            },
            hideTooltip() {
                this.tooltipIndex = null;
            },
        },
        mounted() {
            this.fetchBrands();
            console.log("Brands:", this.brands);
            console.log("Loading:", this.loading);
        }


    };
</script>

<style scoped>
.brands-section {
    padding: 40px 20px;
    background-color: #f9f9f9;
    text-align: center;
}

.section-title {
    font-size: 2rem;
    margin-bottom: 20px;
    color: #333;
}

.brands-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 20px;
    align-items: center;
}

.brand-card {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;
    overflow: hidden;
    color: #000;
}

.brand-card:hover {
    transform: scale(1.05);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);
}

img {
    max-width: 100%;
    height: auto;
    filter: grayscale(100%);
    transition: filter 0.3s ease-in-out;
}

.brand-card:hover img {
    filter: grayscale(0%);
}

.tooltip {
    position: absolute;
    bottom: -20px;
    background-color: #333;
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 0.85rem;
    white-space: nowrap;
    transform: translateY(10px);
    opacity: 0;
    transition: transform 0.3s, opacity 0.3s;
}

.brand-card:hover .tooltip {
    transform: translateY(0);
    opacity: 1;
}

/* Skeleton Loader */
.skeleton {
    height: 100px;
    background-color: #e0e0e0;
    border-radius: 8px;
    animation: shimmer 1.5s infinite linear;
}

@keyframes shimmer {
    0% {
        background-color: #e0e0e0;
    }

    50% {
        background-color: #f5f5f5;
    }

    100% {
        background-color: #e0e0e0;
    }
}
</style>