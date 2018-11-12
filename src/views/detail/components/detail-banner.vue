<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1412/b5/c99be07b7b79cfb5900e03a35bc3051f.water.jpg_600x330_e1187eb8.jpg"/>
            <div class="banner-info">
                <div class="banner-tittle">深圳欢乐谷(AAAAA景区)</div>
                <div class="banner-number">
                    <span class="iconfont banner-icon">&#xe7b3;</span> {{this.imgs.length}}
                </div>
            </div>
        </div>
        <gallery v-model="imgs"
                 v-show="showGallery"
                 @close="handleGalleryClose">
        
        </gallery>
    </div>
</template>

<script>
    import Gallery from '@/components/gallery/index'

    export default {
        name: 'detail-banner',
        components: {Gallery},
        data () {
            return {
                showGallery: false,
                imgs: [
                    'http://img1.qunarzz.com/sight/p0/1412/b5/c99be07b7b79cfb5900e03a35bc3051f.water.jpg_r_800x800_454faea8.jpg',
                    'http://img1.qunarzz.com/sight/p0/1807/33/3359ac3a4bdd2b30a3.water.jpg_r_800x800_735422fe.jpg',
                    'http://img1.qunarzz.com/sight/p0/1412/6c/6f771be863fc45f43cdb313964830e44.water.jpg_r_800x800_0f5e9e7e.jpg'
                ]
            }
        },
        methods: {
            handleBannerClick () {
                this.showGallery = true
            },
            handleGalleryClose () {
                this.showGallery = false
            }
        }

    }
</script>

<style lang="stylus" scoped>
    .banner
        position: relative
        overflow: hidden
        height: 0
        padding-bottom: 55%
        .banner-img
            width: 100%
        .banner-info
            display: flex
            position: absolute
            left: 0
            right: 0
            bottom: 0
            line-height: .6rem
            color: #fff
            background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
            .banner-tittle
                flex: 1
                font-size: .32rem
                padding: 0 .2rem
            .banner-number
                height: .32rem
                line-height: .32rem
                margin-top: .14rem
                padding: 0 .4rem
                border-radius: .2rem
                background: rgba(0, 0, 0, .8)
                font-size: .24rem
                .banner-icon
                    font-size: .24rem
</style>