<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" :src="publicValue.bannerImg"/>
            <div class="banner-info">
                <div class="banner-tittle">{{publicValue.sightName}}</div>
                <div class="banner-number">
                    <span class="iconfont banner-icon">&#xe7b3;</span> {{publicValue.galleryImgs.length}}
                </div>
            </div>
        </div>
        <fade-animation>
            <gallery v-model="publicValue.galleryImgs"
                     v-show="showGallery"
                     @close="handleGalleryClose">
            
            </gallery>
        </fade-animation>
    </div>
</template>

<script>
    import Gallery       from '@/components/gallery/index'
    import FadeAnimation from '@/components/fade/index'

    export default {
        name: 'detail-banner',
        components: {
            FadeAnimation,
            Gallery
        },
        props: {
            value: {
                type: Object,
                required: true
            }
        },
        data () {
            return {
                showGallery: false,
                publicValue: this.value
            }
        },
        methods: {
            handleBannerClick () {
                this.showGallery = true
            },
            handleGalleryClose () {
                this.showGallery = false
            }
        },
        watch: {
            value (val) {
                this.publicValue = val
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