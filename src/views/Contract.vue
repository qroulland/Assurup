<template>
  <div>
    <div class="d-flex align-items-center mb-3">
      <router-link
        :to="{name: 'home'}"
        class="btn btn-primary me-3 p-2"
      >
        <i class="fas fa-chevron-left text-white"></i>
      </router-link>
      <h1 class="h3 mb-0">Contracts</h1>
      <p class="ms-2 mb-0">| Contract N°{{ this.$route.params.id }}</p>
    </div>
    <p>
      <span class="fw-bold">
        Product name:
      </span>
      {{ this.getProductName }}
    </p>
    <p>
      <span class="fw-bold">
        Effective date:
      </span>
      {{ this.getContract[0].effectiveDate }}
    </p>
    <p>
      <span class="fw-bold">
        Price:
      </span>
      {{ this.getContract[0].price }}$
    </p>
    <p>
      <span class="fw-bold">
        Status:
      </span>
      {{ this.getContract[0].status }}
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
// import { mapState } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      getContracts: 'contracts/get',
      getProducts: 'products/get',
    }),
    getContract() {
      const parseId = parseInt(this.$route.params.id, 10);
      return this.getContracts.filter((elt) => elt.id === parseId);
    },
    getProductName() {
      const contract = this.getContract[0];
      return this.getProducts.filter((elt) => elt.id === contract.productId)[0].name;
    },
  },
};
</script>
