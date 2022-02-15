<script>
import { defineComponent } from 'vue';
import VueSortableTable from '@/vue-sortable-table.vue';

export default defineComponent({
  name: 'ServeDev',
  components: {
    VueSortableTable
  }
});
</script>

<template>
  <div id="app">
    <vue-sortable-table />
  </div>
</template>
