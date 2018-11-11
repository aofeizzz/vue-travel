<template>
    <div>
        <home-header></home-header>
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
    import { mapState }  from 'vuex'

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
                    swiper: [],
                    icons: [],
                    recommend: [],
                    weekend: []
                },
                lastCity: ''
            }
        },
        computed: {
            ...mapState(['city'])
        },
        mounted () {
            this.lastCity = this.city
            this.getHomeInfo()
        },
        methods: {
            getHomeInfo () {
                this.$axios.get('/api/home?city=' + this.city).then((res) => {
                    let _data = res.data.data.data
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
        },
        activated () {
            if (this.lastCity !== this.city) {
                this.lastCity = this.city
                this.getHomeInfo()
            }
        }
    }
</script>

<style scoped>

</style>