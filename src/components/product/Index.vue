<template>
  <div id="app">
    <b-container class="col-md-3">
      <div>
        <ProductForm />
      </div>
      <div
        class="qtd-produtos-container"
      >Quantidade de produtos: {{this.$store.state.products.length}}</div>
      <div class>
        <router-link to="products">listagem de produtos</router-link>
      </div>
    </b-container>
  </div>
</template>

<script>
import ProductForm from "./ProductForm";

export default {
  name: "productApp",
  components: {
    ProductForm,
  },
};
</script>

<style>
#app {
  margin-top: 40px;
}
.qtd-produtos-container {
  margin-top: 20px;
}
</style>