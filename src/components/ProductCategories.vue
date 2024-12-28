<template>
    <section class="product-categories">
      <h2 class="section-title">Browse Our Categories</h2>
      <div class="categories-grid">
        <router-link
          v-for="(category, index) in categories"
          :key="index"
          :to="`/category/${category.name.toLowerCase()}`"
          class="category-card-link"
        >
          <div class="category-card">
            <div class="category-card-inner">
              <img :src="category.image" :alt="category.name" />
              <div class="category-info">
                <h3>{{ category.name }}</h3>
                <p>{{ category.description }}</p>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "ProductCategories",
    data() {
      return {
        categories: [
          {
            name: "Home Decor",
            description: "Stylish items to brighten up your space.",
            image: "https://picsum.photos/id/13/367/267",
          },
          {
            name: "Personalized Gifts",
            description: "Unique gifts made just for you.",
            image: "https://picsum.photos/id/13/367/267",
          },
          {
            name: "Toys & Games",
            description: "Fun and exciting toys for kids of all ages.",
            image: "https://picsum.photos/id/13/367/267",
          },
          {
            name: "Fashion",
            description: "Trendy and stylish clothing for every occasion.",
            image: "https://picsum.photos/id/13/367/267",
          },
        ],
      };
    },
  };
  </script>

 <style scoped>
.product-categories {
  padding: 50px 20px;
  text-align: center;
}
.section-title {
  font-size: 2.5rem;
  margin-bottom: 30px;
  font-weight: bold;
}
.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  justify-items: center;
}

.category-card-link {
  text-decoration: none;
  display: block;
}
.category-card {
  position: relative;
  width: 100%;
  max-width: 300px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.category-card:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.2);
}
.category-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease;
}
.category-card:hover img {
  transform: scale(1.1);
}

/* Gradient overlay */
.category-card-inner {
  position: relative;
}
.category-card-inner::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.8));
  transition: opacity 0.3s ease;
  opacity: 0;
}
.category-card:hover .category-card-inner::after {
  opacity: 1;
}

.category-info {
  background-color: rgba(0, 0, 0, 0.6);
  color: #fff;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 15px;
  text-align: center;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
  transform: translateY(10px);
}
.category-card:hover .category-info {
  opacity: 1;
  transform: translateY(0);
}
.category-info h3 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
  transform: translateY(20px);
  transition: transform 0.3s ease;
}
.category-card:hover .category-info h3 {
  transform: translateY(0);
}
.category-info p {
  font-size: 1rem;
  margin-bottom: 0;
}
</style>


  