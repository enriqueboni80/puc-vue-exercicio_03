import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0,
        products: [],
    },
    mutations: {
        _storeProduct(state, newProduct) {
            state.products.push(newProduct);
        }
    },
    actions: {
        storeProduct(context, newProduct) {
            context.commit('_storeProduct', newProduct)
        }
    }
})

export { store }