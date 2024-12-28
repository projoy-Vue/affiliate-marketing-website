<template>
    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      totalPages: Number,
      currentPage: Number
    },
    emits: ['pageChange'],
    methods: {
      nextPage() {
        this.$emit('pageChange', this.currentPage + 1);
      },
      prevPage() {
        this.$emit('pageChange', this.currentPage - 1);
      }
    }
  };
  </script>
  