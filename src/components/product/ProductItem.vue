<template>
  <fragment>
    <b-td>{{product.name}}</b-td>
    <b-td>{{product.price}}</b-td>
  </fragment>
</template>
<script>
export default {
  name: "ProductItem",
  props: {
    product: Object,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>