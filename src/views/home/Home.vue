<template>
    <div>
        <home-header v-model="info.city"></home-header>
        <home-swiper v-model="info.swiper"></home-swiper>
        <home-icons v-model="info.icons"></home-icons>
        <home-recommend v-model="info.recommend"></home-recommend>
        <home-weekend v-model="info.weekend"></home-weekend>
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
            return {
                info: {
                    city: '',
                    swiper: [],
                    icons: [],
                    recommend: [],
                    weekend: []
                }
            }
        },
        mounted () {
            this.getHomeInfo()
        },
        methods: {
            getHomeInfo () {
                this.$axios.get('/api/home').then((res) => {
                    let _data = res.data.data.data
                    this.info.city = _data.city
                    this.info.swiper = _data.swiperList
                    this.info.icons = _data.iconList
                    this.info.recommend = _data.recommendList
                    this.info.weekend = _data.weekendList
                }).catch((res) => {
                    console.log(res)
                }).finally(() => {
                    console.log(this.info)
                })
            }
        }
    }
</script>

<style scoped>

</style>