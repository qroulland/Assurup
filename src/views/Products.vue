<template>
  <div>
    <div class="d-flex align-items-center">
      <h1 class="h3">Products</h1>
      <p class="ms-2 pb-1 mb-0">| Listing of all products</p>
    </div>
    <products-table class="mt-3"/>
  </div>
</template>

<script>
import ProductsTable from '@/components/ProductsTable.vue';

export default {
  components: {
    ProductsTable,
  },
};
</script>
