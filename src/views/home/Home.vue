<template>
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-icons></home-icons>
    </div>
</template>

<script>
    import HomeHeader from './components/home-header'
    import HomeSwiper from './components/home-swiper'
    import HomeIcons  from './components/home-icons'

    export default {
        name: 'home',
        components: {
            HomeIcons,
            HomeSwiper,
            HomeHeader
        },
        data () {
            return {
                text: '首页'
            }
        }
    }
</script>

<style scoped>

</style>