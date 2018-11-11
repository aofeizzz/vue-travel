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
            component: resolve => {
                require(['../views/home/Home.vue'], resolve)
            }
        },
        {
            path: '/city',
            name: 'city',
            meta: {title: '选择城市'},
            component: resolve => {
                require(['../views/city/city.vue'], resolve)
            }
        }
    ]
})
