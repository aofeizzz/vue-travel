import Vue    from 'vue'
import Router from 'vue-router'
import Home   from './views/home/Home.vue'
import List   from './views/list/index.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            meta: {title: '首页'},
            component: Home
        },
        {
            path: '/list',
            name: 'index',
            component: List
        }
    ]
})
