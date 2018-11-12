<template>
    <div>
        <div class="weekend">周末去哪儿</div>
        <ul>
            <li class="item border-bottom"
                v-for="item of publicValue"
                :key="item.id"
                @click="goto(item.id)">
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
    .weekend
        line-height: .8rem
        background: #eee
        text-indent: .2rem
    
    .item-img-wrapper
        overflow: hidden
        height: 0
        padding-bottom: 37.09%
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