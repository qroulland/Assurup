<template>
  <div id="containerApp">
    <sidebar />
    <div class="main">
      <transition
        name="fade"
        mode="out-in"
      >
        <router-view />
      </transition>
    </div>
  </div>
</template>
<script>
import contracts from '@/assets/data/contracts.json';
import products from '@/assets/data/products.json';
import Sidebar from '@/components/Sidebar.vue';

export default {
  components: {
    Sidebar,
  },
  mounted() {
    this.$store.dispatch('contracts/setValue', { list: contracts });
    this.$store.dispatch('products/setValue', { list: products });
  },
};
</script>
