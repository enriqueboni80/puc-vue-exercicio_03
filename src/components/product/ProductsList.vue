<template>
  <b-container class="col-md-3">
    <div style="text-align:left; margin-bottom:15px; font-size:40px">
      <router-link to="/">
        <b-icon-arrow-left-circle-fill>listagem de produtos</b-icon-arrow-left-circle-fill>
      </router-link>
    </div>
    <b-table-simple striped outlined>
      <b-thead>
        <b-th>Produto</b-th>
        <b-th>Preço</b-th>
      </b-thead>
      <b-tbody>
        <b-tr v-for="product in this.$store.state.products" v-bind:key="product.name" cols="4">
          <ProductItem :product="product" />
        </b-tr>
      </b-tbody>
    </b-table-simple>
  </b-container>
</template>

<script>
import ProductItem from "./ProductItem";

export default {
  name: "ProductsList",
  components: {
    ProductItem,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>