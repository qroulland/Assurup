<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th
            scope="col"
            v-for="col in this.columns"
            :key="col.key"
            @click="sort(col.key)"
          >
            <div class="d-flex">
              {{ col.label }}
              <div
                class="sort-indicator"
                :class="[currentSortDir, currentSort === col.key ? 'd-block' : 'd-none']"
              >
                <i class="fas fa-sort-up"></i>
                <i class="fas fa-sort-down"></i>
              </div>
            </div>
          </th>
          <th class="text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="row in this.sortedContracts"
          :key="row.id"
        >
          <td>{{ row.id }}</td>
          <td>{{ getProductNameById(row.productId) }}</td>
          <td>{{ row.effectiveDate }}</td>
          <td>{{ row.price }}$</td>
          <td>{{ row.status }}</td>
          <td class="align-middle text-center">
            <router-link
            :to="{name: 'contract', params: {id: row.id}}"
            class="btn btn-primary rounded-circle"
            >
              <i class="far fa-eye fa-sm text-white"></i>
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      columns: [
        {
          key: 'id',
          label: '#',
        },
        {
          key: 'productId',
          label: 'Product name',
        },
        {
          key: 'effectiveDate',
          label: 'Effective date',
        },
        {
          key: 'price',
          label: 'Price',
        },
        {
          key: 'status',
          label: 'Status',
        },
      ],
      currentSort: 'id',
      currentSortDir: 'asc',
    };
  },
  computed: {
    ...mapState('products', {
      getProducts: (state) => state.list,
    }),
    ...mapState('contracts', {
      getContracts: (state) => state.list,
    }),
    sortedContracts() {
      return this.getContracts.slice().sort((a, b) => {
        const isDate = this.currentSort === 'effectiveDate';
        const modifier = this.currentSortDir === 'desc' ? -1 : 1;
        let val1 = a[this.currentSort];
        let val2 = b[this.currentSort];
        if (isDate) {
          const pattern = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
          const date1 = a[this.currentSort].match(pattern);
          const date2 = b[this.currentSort].match(pattern);
          val1 = new Date(date1[3], date1[2] - 1, date1[1]);
          val2 = new Date(date2[3], date2[2] - 1, date2[1]);
        }
        if (val1 < val2) return -1 * modifier;
        if (val1 > val2) return 1 * modifier;
        return 0;
      });
    },
  },
  methods: {
    getProductNameById(id) {
      const product = this.getProducts.filter((elt) => elt.id === id);
      return product[0].name;
    },
    sort(col) {
      if (col === this.currentSort) {
        this.currentSortDir = this.currentSortDir === 'asc' ? 'desc' : 'asc';
      }
      this.currentSort = col;
    },
  },
  mounted() {
  },
};
</script>
