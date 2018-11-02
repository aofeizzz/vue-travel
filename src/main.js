import Vue       from 'vue'
import App       from './App.vue'
import router    from './router'
import store     from './store'

// 解决移动端click 300ms延迟的问题
import fastClick from 'fastclick'
// 重置页面样式表，把不同手机初始化样式统一
import './assets/styles/reset.css'
// 解决移动端1px边框的问题
import './assets/styles/border.css'

fastClick.attach(document.body)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
