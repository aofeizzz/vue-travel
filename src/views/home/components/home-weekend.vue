<template>
    <div>
        <div class="weekend">周末去哪儿</div>
        <ul>
            <li class="item border-bottom" v-for="item of recommends" :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.img"/>
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'home-weekend',
        data () {
            return {
                recommends: [
                    {
                        id: '001',
                        title: '粤东泡汤好去处',
                        desc: '全时四季的温泉，度假的天堂',
                        img: 'http://img1.qunarzz.com/sight/source/1505/b9/f9d8ace21c06.jpg_r_640x214_1f239a81.jpg'
                    },
                    {
                        id: '002',
                        title: '深圳必游TOP10',
                        desc: '来到深圳，你需要来这里签到',
                        img: 'http://img1.qunarzz.com/sight/source/1505/fa/ca65fde9677de2.jpg_r_640x214_4500e3ff.jpg'
                    },
                    {
                        id: '003',
                        title: '欢乐长隆',
                        desc: '世界欢乐汇聚长隆',
                        img: 'http://img1.qunarzz.com/sight/source/1602/88/bf120edeaea383.jpg_r_640x214_f8591f7b.jpg'
                    },
                    {
                        id: '004',
                        title: '当地人秋游',
                        desc: '当地人带你发现不一样的深圳，在这个秋天',
                        img: 'http://img1.qunarzz.com/sight/source/1507/d9/2ddc7652fdba16.jpg_r_640x214_5e62f1a3.jpg'
                    },
                    {
                        id: '005',
                        title: '周末亲子游',
                        desc: '这个周末就开启美妙的亲子时光',
                        img: 'http://img1.qunarzz.com/sight/source/1505/69/e899202f7abddf.jpg_r_640x214_81b6b528.jpg'
                    }
                ]
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "~@/assets/styles/mixins.styl"
    .weekend
        line-height: .8rem
        background: #eee
        text-indent: .2rem
    
    .item-img-wrapper
        overflow: hidden
        height: 0
        padding-bottom: 33.9%
        .item-img
            width: 100%
    
    .item-info
        padding: .1rem
        .item-title
            line-height: .54rem
            font-size: .32rem
            ellipsis()
        .item-desc
            line-height: .4rem
            color: #616161
            ellipsis()
</style>