<template>
    <div class="container" @click="handleGalleryClick">
        <div class="wrapper">
            <swiper :options="swiperOption">
                <swiper-slide v-for="(item, index) in publicValue"
                              :key="index">
                    <img class="gallery-img" :src="item"/>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'gallery',
        props: {
            value: {
                type: Array,
                default: () => []
            }
        },
        data () {
            return {
                swiperOption: {
                    pagination: '.swiper-pagination',
                    paginationType: 'fraction',
                    observeParents: true,
                    observer: true
                },
                publicValue: this.value
            }
        },
        methods: {
            handleGalleryClick () {
                this.$emit('close')
            }
        },
        watch: {
            value (val) {
                this.publicValue = val
            }
        }
    }
</script>

<style lang="stylus">
    .container
        .swiper-container
            overflow: inherit
</style>

<style lang="stylus" scoped>
    .container
        display: flex
        flex-direction: column
        justify-content: center
        z-index: 99
        position: fixed
        left: 0
        right: 0
        top: 0
        bottom: 0
        background: #000
        .wrapper
            height: 0
            width: 100%
            padding-bottom: 100%
            .gallery-img
                width: 100%
            .swiper-pagination
                color: #fff
                bottom: -1rem
</style>