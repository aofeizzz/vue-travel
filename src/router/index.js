import Vue    from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            meta: {title: '首页'},
            // 懒加载写法
            component: () => import('../views/home/Home.vue')
        },
        {
            path: '/city',
            name: 'city',
            meta: {title: '选择城市'},
            component: () => import('../views/city/index.vue')
        },
        {
            path: '/detail/:id',
            name: 'detail',
            meta: {title: '详情'},
            component: () => import('../views/detail/index.vue')
        }
    ],
    scrollBehavior () {
        return {x: 0, y: 0}
    }
})
