<template>
    <div class="search">
        <input class="search-input" type="text" placeholder="输入城市名或拼音"/>
    </div>
</template>

<script>
    export default {
        name: 'city-search'
    }
</script>

<style lang="stylus" scoped>
    @import "~@/assets/styles/varibles"
    .search
        height: .72rem
        padding: 0 .2rem
        background: $bgColor
        .search-input
            box-sizing: border-box
            width: 100%
            height: .62rem
            line-height: .62rem
            text-align: center
            padding: 0 .1rem
            border-radius: .06rem
            color: #666
</style>