<template>
    <div>
        <div class="header-abs"
             @click="goto"
             v-show="showAbs">
            <div class="iconfont header-abs-back">&#xe624;</div>
        </div>
        <div class="header-fixed"
             v-show="!showAbs"
             :style="opacityStyle">
            <div class="iconfont header-fixed-back" @click="goto">&#xe624;</div>
            景点详情
        </div>
    </div>
</template>

<script>
    export default {
        name: 'detail-header',
        data () {
            return {
                showAbs: true,
                opacityStyle: {
                    opacity: 0
                }
            }
        },
        methods: {
            goto () {
                this.$router.push('/')
            },
            handleScroll () {
                const top = document.documentElement.scrollTop ||
                    window.pageYOffset ||
                    document.body.scrollTop
                if (top > 60) {
                    let opacity = top / 140
                    this.opacityStyle.opacity = opacity > 1 ? 1 : opacity
                    this.showAbs = false
                } else {
                    this.showAbs = true
                }
            }
        },
        activated () {
            // 对全局对象事件绑定，如果不解绑，会在全局其他页面执行handleScroll方法，影响到全局
            window.addEventListener('scroll', this.handleScroll)
        },
        deactivated () {
            // 对全局事件解绑
            window.removeEventListener('scroll', this.handleScroll)
        }
    }
</script>

<style lang="stylus" scoped>
    @import '~@/assets/styles/varibles.styl'
    .header-abs
        position: absolute
        left: .2rem
        top: .2rem
        width: .8rem
        height: .8rem
        line-height: .8rem
        border-radius: .4rem
        text-align: center
        background: rgba(0, 0, 0, .8)
        .header-abs-back
            color: #fff
            font-size: .4rem
    
    .header-fixed
        z-index: 2
        position: fixed
        top: 0
        left: 0
        right: 0
        height: $headerHeight
        line-height: $headerHeight
        text-align: center
        color: #fff
        background: $bgColor
        font-size: .32rem
        .header-fixed-back
            position: absolute
            top: 0
            left: 0
            width: .64rem
            text-align: center
            font-size: .4rem
            color: #fff
</style>