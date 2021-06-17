<template>
  <div>
    <div class="d-flex align-items-center">
      <h1 class="h3">Contracts</h1>
      <p class="ms-2 pb-1 mb-0">| Listing of all contracts</p>
    </div>
    <contracts-table class="mt-3"/>
  </div>
</template>

<script>
import ContractsTable from '@/components/ContractsTable.vue';

export default {
  components: {
    ContractsTable,
  },
};
</script>
