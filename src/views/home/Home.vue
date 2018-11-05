<template>
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
    </div>
</template>

<script>
    import HomeHeader from './components/home-header'
    import HomeSwiper from './components/home-swiper'

    export default {
        name: 'home',
        components: {
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