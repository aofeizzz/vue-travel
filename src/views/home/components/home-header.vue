<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe624;</div>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe632;</span> 输入城市/景点/游玩主题
        </div>
        <div class="header-right">
<<<<<<< HEAD
            城市 <span class="iconfont">&#xe6aa;</span>
=======
            城市<span class="iconfont">&#xe6aa;</span>
>>>>>>> index-swiper
        </div>
    </div>
</template>

<script>
    export default {
        name: 'home-header',
    }
</script>

<!-- 样式使用stylus，必须增加lang="stylus" -->
<!-- scoped:作用于，此样式只针对改组件，其他外部无效 -->
<!--
    预设的css中设置了html的font-size为50px。
        也就是说：1rem=50px
        然而设计图为iPhone设计图375px的两倍 也就是750px
        所以量出来的东西要除于2，
        假如一个东西宽86px 高42px
        则页面除于2为宽43px 高为21px
        然而要转化成rem，则宽为43/50=0.86  高为21/50=0.42
        也就是说设计图出来的宽度 直接除于100就是rem了
-->
<style lang="stylus" scoped>
    @import "~@/assets/styles/varibles.styl"
    .header
        display: flex
        line-height: .86rem
        background: $bgColor
        color: #fff
        .header-left
            width: .64rem
            float: left
            .back-icon
                text-align: center
                font-size: .4rem
        .header-input
            flex: 1
            height: .64rem
            line-height: .64rem
            margin-top: .12rem
            margin-left: .2rem
            padding-left: .2rem
            background: #fff
            color: #ccc
            border-radius: .1rem
        .header-right
            width: 1.24rem
            float: right
            text-align: center
</style>