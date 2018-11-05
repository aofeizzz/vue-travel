import Vue    from 'vue'
import App    from './App.vue'
import router from './router'
import store  from './store'

// 解决移动端click 300ms延迟的问题
import fastClick        from 'fastclick'
// 轮播图
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
// iView
import iView            from 'iview'
import 'iview/dist/styles/iview.css'
// 重置页面样式表，把不同手机初始化样式统一
import './assets/styles/reset.css'
// 解决移动端1px边框的问题
import './assets/styles/border.css'
import './assets/styles/iconfont.css'

Vue.use(VueAwesomeSwiper)
Vue.use(iView)

Vue.config.productionTip = false

fastClick.attach(document.body)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
