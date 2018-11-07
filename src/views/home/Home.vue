<template>
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-icons></home-icons>
        <home-recommend></home-recommend>
        <home-weekend></home-weekend>
    </div>
</template>

<script>
    import HomeHeader    from './components/home-header'
    import HomeSwiper    from './components/home-swiper'
    import HomeIcons     from './components/home-icons'
    import HomeRecommend from './components/home-recommend'
    import HomeWeekend   from './components/home-weekend'

    export default {
        name: 'home',
        components: {
            HomeWeekend,
            HomeRecommend,
            HomeIcons,
            HomeSwiper,
            HomeHeader
        },
        data () {
            return {}
        },
        mounted () {
            this.getHomeInfo()
        },
        methods: {
            getHomeInfo () {
                this.$axios.get('/api/home').then((res) => {
                    console.log(res.data.data.data)
                }).catch((res) => {
                    console.log(res)
                }).finally(() => {
                    console.log('finally')
                })
            }
        }
    }
</script>

<style scoped>

</style>