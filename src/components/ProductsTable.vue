<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th
            scope="col"
            v-for="col in this.columns"
            :key="col"
          >
            {{ col }}
          </th>
          <th class="text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="row in this.getProducts"
          :key="row.id"
        >
          <td class="align-middle">{{ row.id }}</td>
          <td scope="row" class="align-middle">{{ getProductNameById(row.id) }}</td>
          <td>{{ row.description }}</td>
          <td class="align-middle text-center">
            <button
              @click="modalProduct = getProductById(row.id)"
              class="btn btn-primary rounded-circle"
              data-bs-toggle="modal"
              data-bs-target="#productModal"
            >
              <i class="far fa-edit fa-sm text-white"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <product-modal :product="this.modalProduct"/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ProductModal from '@/components/ProductModal.vue';

export default {
  data() {
    return {
      columns: [
        '#',
        'Name',
        'Description',
      ],
      modalProduct: {
        id: 0,
        name: 'default',
        description: 'default',
      },
    };
  },
  components: {
    ProductModal,
  },
  computed: {
    ...mapState('products', {
      getProducts: (state) => state.list,
    }),
  },
  methods: {
    getProductNameById(id) {
      const product = this.getProducts.filter((elt) => elt.id === id);
      return product[0].name;
    },
    getProductById(id) {
      const product = this.getProducts.filter((elt) => elt.id === id);
      return product[0];
    },
  },
  mounted() {
  },
};
</script>
