<template>
    <div>
        <div class="recommend">热销推荐</div>
        <ul>
            <li class="item border-bottom" v-for="item of recommends" :key="item.id">
                <img class="item-img" :src="item.img"/>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'home-recommend',
        data () {
            return {
                recommends: [
                    {
                        id: '001',
                        title: '深圳欢乐谷',
                        desc: '狂欢无罪，够胆你就来！',
                        img: 'http://img1.qunarzz.com/sight/p0/1810/22/226c137568f18ac0a3.water.jpg_200x200_81ac3ecf.jpg'
                    },
                    {
                        id: '002',
                        title: '世界之窗',
                        desc: '一个下午让你走遍全世界~',
                        img: 'http://img1.qunarzz.com/sight/p0/1809/87/8796d4dfe0366858a3.water.png_200x200_ca6e25bf.png'
                    },
                    {
                        id: '003',
                        title: '深圳野生动物园',
                        desc: '这里有优雅和呆萌并存的睫毛精',
                        img: 'http://img1.qunarzz.com/sight/p0/1508/2e/d9363ce50a88c8c5ff5a138c67687cd4.water.jpg_200x200_1c15c8f5.jpg'
                    },
                    {
                        id: '004',
                        title: '锦绣中华民俗村',
                        desc: '56个民族56支花~',
                        img: 'http://img1.qunarzz.com/sight/p0/1810/ea/eafded52d4c963e5a3.water.png_200x200_34270547.png'
                    },
                    {
                        id: '005',
                        title: '东部华侨城大侠谷',
                        desc: '行走峡湾栈道，倾听大自然的天籁之音',
                        img: 'http://img1.qunarzz.com/sight/p0/1502/15/15ca1d0eab6bf46c.water.jpg_200x200_50ca7bb1.jpg'
                    }
                ]
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "~@/assets/styles/mixins.styl"
    .recommend
        line-height: .8rem
        background: #eee
        text-indent: .2rem
    
    .item
        overflow: hidden
        display: flex
        height: 1.9rem
        .item-img
            width: 1.7rem
            height: 1.7rem
            padding: .1rem
        .item-info
            flex: 1
            padding: .1rem
            min-width: 0
            .item-title
                line-height: .54rem
                font-size: .32rem
                ellipsis()
            .item-desc
                line-height: .4rem
                color: #f55
                ellipsis()
            .item-button
                line-height: .44rem
                margin-top: .16rem
                background: #ff9300
                padding: 0 .2rem
                border-radius: .06rem
                color: #fff
</style>