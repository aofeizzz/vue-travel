<template>
    <div>
        <div class="recommend">热销推荐</div>
        <ul>
            <li class="item border-bottom"
                v-for="item of publicValue"
                :key="item.id"
                @click="goto(item.id)">
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
        props: {
            value: {
                type: Array,
                required: true
            }
        },
        data () {
            return {
                publicValue: this.value
            }
        },
        methods: {
            goto (id) {
                this.$router.push('/detail/' + id)
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