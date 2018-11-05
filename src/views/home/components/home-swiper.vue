<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            <swiper-slide v-for="item of swiperSlides" :key="item.id">
                <img class="swiper-img" :src="item.img"/>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    export default {
        name: 'home-swiper',
        data () {
            return {
                swiperOption: {
                    pagination: '.swiper-pagination',
                    loop: true
                },
                swiperSlides: [
                    {
                        id: 1,
                        img: 'http://img1.qunarzz.com/piao/fusion/1809/31/da037478f37cf202.jpg_750x200_a02cf862.jpg'
                    },
                    {
                        id: 2,
                        img: 'http://img1.qunarzz.com/piao/fusion/1809/c6/2467595fffc3b302.jpg_750x200_cca13d51.jpg'
                    },
                    {
                        id: 3,
                        img: 'http://img1.qunarzz.com/piao/fusion/1811/1b/4143c7e0bfe78d02.jpg_750x200_5a220f6e.jpg'
                    },
                    {
                        id: 4,
                        img: 'http://img1.qunarzz.com/piao/fusion/1809/12/856f100069809e02.jpg_750x200_e3485a2b.jpg'
                    },
                    {
                        id: 5,
                        img: 'http://img1.qunarzz.com/piao/fusion/1810/6e/4a5551bbb189d902.jpg_750x200_25257467.jpg'
                    }
                ]
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