<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前位置</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">深圳</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper"
                         v-for="item of publicValue"
                         :key="item.id">
                        <div class="button">{{item.name}}</div>
                    </div>
                </div>
            </div>
            <div class="area"
                 v-for="(items, key) of publicCities"
                 :key="key"
                 :ref="key">
                <div class="title border-topbottom">{{key}}</div>
                <div class="item-list"
                     v-for="item of items"
                     :key="item.id">
                    <div class="item border-bottom">{{item.name}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Bscroll from 'better-scroll' // 重点解决移动端（现已支持 PC 端）各种滚动场景需求

    export default {
        name: 'city-list',
        props: {
            value: {
                type: Array,
                required: true
            },
            cities: {
                type: Object,
                required: true
            },
            letter: String
        },
        data () {
            return {
                publicValue: this.value,
                publicCities: this.cities
            }
        },
        mounted () {
            this.scroll = new Bscroll(this.$refs.wrapper)
        },
        watch: {
            value (val) {
                this.publicValue = val
            },
            cities (val) {
                this.publicCities = val
            },
            letter (val) {
                if (val) {
                    const element = this.$refs[val][0]
                    // scrollToElement 方法：滚动到的目标元素
                    this.scroll.scrollToElement(element)
                }
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .border-topbottom
        &:before
            border-color: #ccc
        &:after
            border-color: #ccc
    
    .border-bottom
        &:before
            border-color: #ccc
    
    .list
        overflow: hidden
        position: absolute
        top: 1.58rem
        left: 0
        right: 0
        bottom: 0
        .title
            line-height: .54rem
            background: #eee
            padding-left: .2rem
            color: #666
            font-size: .26rem
        
        .button-list
            overflow: hidden
            padding: .1rem .6rem .1rem .1rem
            .button-wrapper
                float: left
                width: 33.33%
                .button
                    margin: .1rem
                    padding: .1rem 0
                    text-align: center
                    border: .02rem solid #ccc
                    border-radius: .06rem
        
        .item-list
            .item
                line-height: .76rem
                padding-left: .2rem
</style>