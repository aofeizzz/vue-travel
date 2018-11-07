import Vue              from 'vue'
import App              from './App.vue'
import router           from './router'
import store            from './store'
import fastClick        from 'fastclick' // 解决移动端click 300ms延迟的问题
import VueAwesomeSwiper from 'vue-awesome-swiper' // 轮播图
import 'swiper/dist/css/swiper.css'
import iView            from 'iview' // iView
import axios            from 'axios'
import 'iview/dist/styles/iview.css'
import './assets/styles/reset.css' // 重置页面样式表，把不同手机初始化样式统一
import './assets/styles/border.css' // 解决移动端1px边框的问题
import './assets/styles/iconfont.css'

Vue.config.productionTip = false

fastClick.attach(document.body)

Vue.use(VueAwesomeSwiper)

Vue.use(iView)

Vue.prototype.$axios = axios

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
