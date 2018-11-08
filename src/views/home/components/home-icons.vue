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
        props: {
            value: {
                type: Array,
                required: true
            }
        },
        data () {
            return {
                swiperOption: {
                    pagination: '.swiper-pagination'
                },
                publicValue: this.value
            }
        },
        computed: {
            pages () {
                const pages = []
                this.publicValue.forEach((item, index) => {
                    const page = Math.floor(index / 8)
                    if (!pages[page])
                        pages[page] = []
                    pages[page].push(item)
                })
                return pages
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