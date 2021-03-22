import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Books from './views/Books.vue'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'home',
        component: Home,
        meta: { title: 'Bigbox Challenge - Categories' }
    }, {
        path: '/books',
        name: 'books',
        component: Books,
        meta: { title: 'Bigbox Challenge - Books' }
    }]
})
export default router

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    next();
});