<template>
    <div class="wrapper">
        <swiper :options="swiperOption" v-if="show">
            <swiper-slide v-for="item of publicValue" :key="item.id">
                <img class="swiper-img" :src="item.img"/>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    export default {
        name: 'home-swiper',
        props: {
            value: {
                type: Array,
                required: true
            }
        },
        data () {
            return {
                swiperOption: {
                    pagination: '.swiper-pagination',
                    loop: true,
                    autoplay: 3000
                },
                publicValue: this.value
            }
        },
        computed: {
            show () {
                return this.publicValue.length
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
    .wrapper
        .swiper-pagination-bullet-active
            background: #fff
</style>

<style lang="stylus" scoped>
    .wrapper
        overflow: hidden
        width: 100%
        height: 0
        padding-bottom: 26.67%
        background: #eee
        .swiper-img
            width: 100%
</style>