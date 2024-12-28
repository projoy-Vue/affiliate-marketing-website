<template>
    <header class="navbar">
        <!-- Logo -->
        <div class="navbar-logo">
            <router-link to="/">
                <!-- <img src="@/assets/logo.svg" alt="Logo" /> -->
                <h1>Logo</h1>
            </router-link>
        </div>

        <!-- Mobile Menu Toggle -->
        <div class="mobile-menu-toggle" @click="toggleMenu">
            ☰
        </div>

        <!-- Navigation Links -->
        <nav class="navbar-links" :class="{ 'mobile-active': isMenuOpen }">
            <ul>
                <li class="dropdown" v-for="(menu, index) in menuItems" :key="index">
                    <span @mouseover="openDropdown(index)" @mouseleave="closeDropdown">
                        {{ menu.name }}
                    </span>
                    <!-- Dropdown Menu -->
                    <ul v-if="activeDropdown === index" class="dropdown-menu">
                        <li v-for="(sub, subIndex) in menu.subcategories" :key="subIndex">
                            <router-link :to="sub.link">
                                <i :class="sub.icon"></i> {{ sub.name }}
                            </router-link>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>

        <!-- Search Bar -->
        <div class="navbar-search">
            <input type="text" v-model="searchQuery" placeholder="Search for products..." @input="fetchSuggestions" />
            <i class="search-icon fas fa-search"></i>
            <!-- Auto-suggestions -->
            <ul v-if="searchSuggestions.length" class="search-suggestions">
                <li v-for="(suggestion, index) in searchSuggestions" :key="index">
                    <router-link :to="'/search?q=' + suggestion">{{ suggestion }}</router-link>
                </li>
            </ul>
        </div>

        <!-- Cart Icon -->
        <div class="navbar-cart">
            <router-link to="/cart">
                <i class="fas fa-shopping-cart"></i>
                <span class="item-count">{{ cartCount }}</span>
            </router-link>
            <!-- Hover Preview -->
            <div class="cart-preview" v-if="cartItems.length && showCartPreview">
                <div v-for="(item, index) in cartItems" :key="index" class="cart-item">
                    <img :src="item.image" :alt="item.name" />
                    <div>
                        <p>{{ item.name }}</p>
                        <span>Qty: {{ item.quantity }}</span>
                    </div>
                </div>
                <router-link to="/cart" class="view-cart">View Cart</router-link>
            </div>
        </div>

        <!-- User Account -->
        <div class="navbar-account">
            <router-link v-if="!isLoggedIn" to="/login" class="login-btn">Login / Signup</router-link>
            <div v-else class="profile-menu" @mouseover="toggleProfileMenu" @mouseleave="toggleProfileMenu">
                <i class="fas fa-user-circle"></i>
                <ul v-if="showProfileMenu" class="profile-dropdown">
                    <li>
                        <router-link to="/profile">My Profile</router-link>
                    </li>
                    <li>
                        <router-link to="/orders">My Orders</router-link>
                    </li>
                    <li @click="logout">Logout</li>
                </ul>
            </div>
        </div>
    </header>
</template>

---

### **Script Section**

```javascript
<script>
    export default {
        data() {
            return {
                menuItems: [
                    {
                        name: "Categories",
                        subcategories: [
                            { name: "Electronics", link: "/category/electronics", icon: "fas fa-tv" },
                            { name: "Fashion", link: "/category/fashion", icon: "fas fa-tshirt" },
                            { name: "Home", link: "/category/home", icon: "fas fa-couch" },
                        ],
                    },
                    {
                        name: "Deals",
                        subcategories: [
                            { name: "Today's Deals", link: "/deals/today", icon: "fas fa-tags" },
                            { name: "Clearance", link: "/deals/clearance", icon: "fas fa-percent" },
                        ],
                    },
                ],
                activeDropdown: null,
                searchQuery: "",
                searchSuggestions: [],
                cartCount: 3,
                cartItems: [
                    {
                        name: "Product 1",
                        image: "@/assets/product1.jpg",
                        quantity: 1,
                    },
                    {
                        name: "Product 2",
                        image: "@/assets/product2.jpg",
                        quantity: 2,
                    },
                ],
                showCartPreview: false,
                isLoggedIn: false,
                showProfileMenu: false,
                isMenuOpen: false,
            };
        },
        methods: {
            toggleMenu() {
                this.isMenuOpen = !this.isMenuOpen;
            },
            openDropdown(index) {
                this.activeDropdown = index;
            },
            closeDropdown() {
                this.activeDropdown = null;
            },
            fetchSuggestions() {
                // Simulate fetching suggestions
                this.searchSuggestions = ["Product A", "Product B", "Product C"];
            },
            toggleCartPreview() {
                this.showCartPreview = !this.showCartPreview;
            },
            toggleProfileMenu() {
                this.showProfileMenu = !this.showProfileMenu;
            },
            logout() {
                // Handle logout logic
                this.isLoggedIn = false;
            },
        },
    };
</script>
<style scoped>
/* Navbar Container */
.navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 30px;
    background-color: #ffffff;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 1000;
    font-family: 'Poppins', sans-serif;
}

/* Mobile Menu Toggle */
.mobile-menu-toggle {
  display: none;
  font-size: 24px;
  cursor: pointer;
}

/* Logo */
.navbar-logo {
    display: flex;
    align-items: center;
    z-index: 10;
}
.navbar-logo a {
    text-decoration: none;
}

.navbar-logo img {
    max-height: 50px;
    cursor: pointer;
    transition: transform 0.3s ease;
}

.navbar-logo img:hover {
    transform: scale(1.1);
}
.navbar-links {
    display: flex;
    gap: 25px;
}
.navbar-links.mobile-active {
  display: block;
  animation: slide-down 0.3s ease-in-out;
}

/* Navigation Links */
.navbar-links ul {
    list-style: none;
    display: flex;
    gap: 25px;
    margin: 0;
    padding: 0;
}

.navbar-links li {
    position: relative;
    font-size: 16px;
    font-weight: 500;
    color: #333333;
    cursor: pointer;
    transition: color 0.3s ease;
}

.navbar-links li:hover {
    color: #0077cc;
}

.dropdown-menu {
    width: 200px;
    position: absolute;
    top: 40px;
    left: 0;
    background-color: #ffffff;
    border: 1px solid #dddddd;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    padding: 10px 15px;
    gap: 10px;
    opacity: 0;
    pointer-events: none;
    transform: translateY(10px);
    transition: all 0.3s ease;

}

.dropdown:hover .dropdown-menu {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
    z-index: 10;
}

.dropdown-menu li {
    display: flex;
    align-items: center;
    gap: 10px;
}

.dropdown-menu li a {
    text-decoration: none;
    color: #333333;
}

.dropdown-menu li i {
    font-size: 14px;
    color: #0077cc;
    margin: 5px 0;

}

.dropdown-menu li:hover {
    color: #0077cc;
}

/* Search Bar */
.navbar-search {
    position: relative;
    width: 250px;
}

.navbar-search input {
    width: 100%;
    padding: 8px 12px 8px 36px;
    border: 1px solid #dddddd;
    border-radius: 25px;
    outline: none;
    transition: border 0.3s ease;
    font-size: 14px;
}

.navbar-search input:focus {
    border-color: #0077cc;
    box-shadow: 0 0 5px rgba(0, 119, 204, 0.4);
}

.search-icon {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 16px;
    color: #888888;
}

.search-suggestions {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: #ffffff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    list-style: none;
    padding: 10px 0;
    margin: 0;
    z-index: 10;
}

.search-suggestions li {
    padding: 8px 15px;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.search-suggestions li:hover {
    background-color: #f7f7f7;
}

/* Cart Icon */
.navbar-cart {
    position: relative;
    cursor: pointer;
}

.navbar-cart i {
    font-size: 20px;
    color: #333333;
    transition: color 0.3s ease;
}

.navbar-cart i:hover {
    color: #0077cc;
}

.item-count {
    position: absolute;
    top: -5px;
    right: -10px;
    background-color: #ff5722;
    color: #ffffff;
    font-size: 12px;
    font-weight: bold;
    border-radius: 50%;
    padding: 2px 6px;
}

.cart-preview {
    position: absolute;
    top: 40px;
    right: 0;
    background-color: #ffffff;
    border: 1px solid #dddddd;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    padding: 10px;
    width: 300px;
    display: none;
    z-index: 10;
}

.navbar-cart:hover .cart-preview {
    display: block;
}

.cart-item {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
}

.cart-item img {
    width: 40px;
    height: 40px;
    border-radius: 4px;
}

.view-cart {
    display: block;
    text-align: center;
    padding: 10px 15px;
    background-color: #0077cc;
    color: #ffffff;
    text-decoration: none;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    transition: background-color 0.3s ease;
}

.view-cart:hover {
    background-color: #005fa3;
}

/* User Account */
.navbar-account {
    position: relative;
    z-index: 10;
}

.login-btn {
    color: #0077cc;
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
}

.profile-menu {
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
}

.profile-menu i {
    font-size: 20px;
    color: #333333;
    transition: color 0.3s ease;
}

.profile-menu:hover i {
    color: #0077cc;
}

.profile-dropdown {
    position: absolute;
    top: 40px;
    right: 0;
    background-color: #ffffff;
    border: 1px solid #dddddd;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    padding: 10px 0;
    list-style: none;
    width: 150px;
    opacity: 0;
    pointer-events: none;
    transform: translateY(10px);
    transition: all 0.3s ease;
}

.profile-menu:hover .profile-dropdown {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
}

.profile-dropdown li {
    padding: 8px 15px;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.profile-dropdown li:hover {
    background-color: #f7f7f7;
    color: #000;
}

/* Media Queries for Mobile */
@media (max-width: 768px) {
  .navbar {
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .navbar-logo {
    flex: 1;

  }

  .mobile-menu-toggle {
    display: block;
    position: absolute;
    top: 15px;
    right: 15px;
    font-size: 24px;
  }

  .navbar-links {
    position: absolute;
    top: 100%;
    left: 0;
    display: none;
    flex-direction: column;
    width: 100%;
    background-color: #ffffff;
    padding: 15px 0;
  }
  .navbar-links ul {
    flex-direction: column;
    gap: 15px;
  }

  .navbar-search,
  .navbar-cart {
    display: none;
  }
  .navbar-account {
    /* order: -1; */
    margin-right: 2rem;
  }
  .login-btn {
    font-size: 15px;
  }


  @keyframes slide-down {
    from {
      transform: translateY(-20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
}
</style>