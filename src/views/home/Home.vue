<template>
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-icons></home-icons>
        <home-recommend></home-recommend>
    </div>
</template>

<script>
    import HomeHeader    from './components/home-header'
    import HomeSwiper    from './components/home-swiper'
    import HomeIcons     from './components/home-icons'
    import HomeRecommend from './components/home-recommend'

    export default {
        name: 'home',
        components: {
            HomeRecommend,
            HomeIcons,
            HomeSwiper,
            HomeHeader
        }
    }
</script>

<style scoped>

</style>