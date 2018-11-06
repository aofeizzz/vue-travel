<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page, index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.img"/>
                    </div>
                    <p class="icon-title">{{item.title}}</p>
                </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    export default {
        name: 'home-icons',
        data () {
            return {
                swiperOption: {
                    autoplay: false,
                    pagination: '.swiper-pagination',
                    loop: true
                },
                icons: [
                    {
                        id: '001',
                        title: '景点门票',
                        img: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
                    },
                    {
                        id: '002',
                        title: '北京必玩',
                        img: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png'
                    },
                    {
                        id: '003',
                        title: '一日游',
                        img: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png'
                    },
                    {
                        id: '004',
                        title: '文化古迹',
                        img: 'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png'
                    },
                    {
                        id: '005',
                        title: '动植物园',
                        img: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png'
                    },
                    {
                        id: '006',
                        title: '打卡圣地',
                        img: 'https://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png'
                    },
                    {
                        id: '007',
                        title: '野生动物园',
                        img: 'http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png'
                    },
                    {
                        id: '008',
                        title: '泡温泉',
                        img: 'http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png'
                    },
                    {
                        id: '009',
                        title: '东部华侨城',
                        img: 'http://img1.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png'
                    },
                    {
                        id: '010',
                        title: '全部玩乐',
                        img: 'http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png'
                    }
                ]
            }
        },
        computed: {
            pages () {
                const pages = []
                this.icons.forEach((item, index) => {
                    const page = Math.floor(index / 8)
                    if (!pages[page])
                        pages[page] = []
                    pages[page].push(item)
                })
                return pages
            }
        }
    }
</script>

<style lang="stylus">
    .icons
        .swiper-container
            height: 0
            padding-bottom: 50%
</style>

<style lang="stylus" scoped>
    @import "~@/assets/styles/varibles.styl"
    @import "~@/assets/styles/mixins.styl"
    .icon
        position: relative
        overflow: hidden
        float: left
        width: 25%
        padding-bottom: 20%
        .icon-img
            position: absolute
            top: 5%
            left: 22%
            right: 0
            bottom: .44rem
            width: 1.1rem
            height: 1.1rem
            box-sizing: border-box
            .icon-img-content
                display: block
                margin: 0 auto
                height: 100%
        .icon-title
            position: absolute
            left: 0
            right: 0
            bottom: 0
            height: .44rem
            line-height: .44rem
            text-align: center
            color: $darkTextColor
            ellipsis()
</style>