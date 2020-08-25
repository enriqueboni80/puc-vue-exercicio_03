import Vue from 'vue'
import Router from 'vue-router'
import ProductIndex from './components/product/Index'
import ProductsList from './components/product/ProductsList'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        component: ProductIndex
    }, {
        path: '/products',
        component: ProductsList
    }]
})