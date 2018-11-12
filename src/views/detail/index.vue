<template>
    <div>
        <detail-banner v-model="info"></detail-banner>
        <detail-header></detail-header>
        <div class="content">
            <detail-list v-model="list"></detail-list>
        </div>
    </div>
</template>

<script>
    import DetailBanner from './components/detail-banner'
    import DetailHeader from './components/detail-header'
    import DetailList   from './components/detail-list'

    export default {
        name: 'detail',
        components: {
            DetailList,
            DetailHeader,
            DetailBanner
        },
        data () {
            return {
                info: {
                    sightName: '',
                    bannerImg: '',
                    galleryImgs: []
                },
                list: []
            }
        },
        mounted () {
            this.getDetailInfo()
        },
        methods: {
            getDetailInfo () {
                this.$axios.get('/api/detail', {
                    params: {
                        id: this.$route.params.id
                    }
                }).then((res) => {
                    res = res.data.data
                    if (res.ret && res.data) {
                        const _data = res.data
                        this.info.sightName = _data.sightName
                        this.info.bannerImg = _data.bannerImg
                        this.info.galleryImgs = _data.gallaryImgs
                        this.list = _data.categoryList
                    }
                }).catch((res) => {
                    console.log(res)
                }).finally(() => {
                    console.log(this.info)
                })
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .content
        height: 50rem
</style>