<template>
  <div>
    <b-form @submit="onFormSubmit">
      <b-form-group label="Produto" label-for="product-name" :description="product.nameError">
        <b-form-input v-model="product.name" type="text" required placeholder="Name"></b-form-input>
      </b-form-group>
      <b-form-group label="Preço" label-for="product-price" :description="product.priceError">
        <b-form-input v-model="product.price" type="text" required placeholder="Preço"></b-form-input>
      </b-form-group>
      <b-button
        class="col-md-12"
        type="submit"
        :disabled="isNameLimitExceeded"
        variant="primary"
      >Save</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "ProductForm",
  data() {
    return {
      product: {
        name: "",
        nameError: "",
        price: "",
        priceError: "",
      },
      isNameLimitExceeded: false,
      isPriceLessThanZero: false,
    };
  },
  watch: {
    "product.name"() {
      if (this.product.name.length > 15) {
        this.isNameLimitExceeded = true;
        this.product.nameError = "Nome não pode ser superior a 15 caracteres.";
      } else {
        this.isNameLimitExceeded = false;
        this.product.nameError = "";
      }
    },
    "product.price"() {
      if (this.product.price < 0) {
        this.isPriceLessThanZero = true;
        this.product.priceError = "Valor não pode ser menor que zero";
      } else {
        this.isPriceLessThanZero = false;
        this.product.priceError = "";
      }
    },
  },
  methods: {
    onFormSubmit(e) {
      e.preventDefault();
      let newProduct = {
        name: this.product.name,
        price: this.product.price,
      };
      this.$store.dispatch("storeProduct", newProduct);
      this.cleanForm();
    },
    cleanForm() {
      this.product.name = "";
      this.product.price = "";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>