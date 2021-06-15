<template>
  <div id="containerApp">
    <router-view />
  </div>
</template>
<script>
import contracts from '@/assets/data/contracts.json';
import products from '@/assets/data/products.json';

export default {
  mounted() {
    this.$store.dispatch('contracts/setValue', { list: contracts });
    this.$store.dispatch('products/setValue', { list: products });
  },
};
</script>
