import Vue from 'vue';
import VueRouter from 'vue-router';
import CartList from '../components/cart/CartList.vue';
import ProductList from '../components/product/ProductList.vue';
import ProductItem from '../components/product/ProductItem.vue';
import LoginBox from '../components/login/LoginBox.vue';
import SignUp from '../components/login/SignUp.vue';
import NotFound from '../components/NotFound.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/products',
      component: ProductList
    },
    {
      path: '/products/:id',
      component: ProductItem,
      props: true
    },
    {
      path: '/cart',
      component: CartList
    },
    {
      path: '/login',
      component: LoginBox,
      beforeEnter: (to, from, next) => {
        const token = localStorage.getItem("token");
        if (token) next('/products');
        else next();
      }
    },
    {
      path: '/',
      redirect: '/products'
    },
    {
      path: '/signup',
      component: SignUp
    },
    {
      path: '*',
      component: NotFound
    }
  ]
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");
  if (!token && to.path !== '/login' && to.path !== '/signup') next('/login');
  else next();
});

export default router;
