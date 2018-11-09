<template>
    <div class="header">
        城市选择
        <div class="iconfont header-back" @click="goto('/')">&#xe624;</div>
    </div>
</template>

<script>
    export default {
        name: 'city-header',
        methods: {
            goto (name) {
                this.$router.push(name)
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "~@/assets/styles/varibles"
    .header
        overflow: hidden
        height: $headerHeight
        line-height: $headerHeight
        text-align: center
        color: #fff
        background: $bgColor
        font-style: .32rem
        .header-back
            position: absolute
            top: 0
            left: 0
            width: .64rem
            text-align: center
            font-size: .4rem
            color: #fff
</style>