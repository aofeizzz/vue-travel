<template>
    <div>
        <div class="search">
            <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音"/>
        </div>
        <div class="search-content"
             ref="search"
             v-show="keyword">
            <ul>
                <li class="search-item border-bottom"
                    v-for="item of list"
                    :key="item.id"
                    @click="handleCityClick(item.name)">
                    {{item.name}}
                </li>
                <li class="search-item border-bottom" v-show="show">
                    没有找到匹配数据
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import Bscroll          from 'better-scroll' // 重点解决移动端（现已支持 PC 端）各种滚动场景需求
    import { mapMutations } from 'vuex'

    export default {
        name: 'city-search',
        props: {
            value: {
                type: Object,
                required: true
            }
        },
        data () {
            return {
                keyword: '',
                list: [],
                timer: null,
                start: new Date()
            }
        },
        computed: {
            show () {
                return !this.list.length
            }
        },
        mounted () {
            this.scroll = new Bscroll(this.$refs.search)
        },
        methods: {
            filterData () {
                const result = []
                for (let i in this.value) {
                    this.value[i].forEach((item) => {
                        if (item.name.indexOf(this.keyword) > -1
                            || item.spell.indexOf(this.keyword) > -1) {
                            result.push(item)
                        }
                    })
                }
                return result
            },
            handleCityClick (city) {
                this.changeCity(city)
                this.$router.push('/')
            },
            ...mapMutations(['changeCity'])
        },
        watch: {
            keyword () {
                // 函数节流
                // 当时间间隔超过 3s 时，则执行一次函数，这样做到了不重复调用，又能保证3秒执行一次。
                const current = new Date()
                this.timer && clearTimeout(this.timer)
                if (!this.keyword) {
                    this.list = []
                    return
                }
                if (current - this.start >= 3000) {
                    this.list = this.filterData()
                    this.start = current
                } else {
                    this.timer = setTimeout(() => {
                        this.list = this.filterData()
                    }, 100)
                }
                console.log(this.list, !this.list.length)
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "~@/assets/styles/varibles"
    .search
        height: .72rem
        padding: 0 .2rem
        background: $bgColor
        .search-input
            box-sizing: border-box
            width: 100%
            height: .62rem
            line-height: .62rem
            text-align: center
            padding: 0 .1rem
            border-radius: .06rem
            color: #666
    
    .search-content
        z-index: 1
        overflow: hidden
        position: absolute
        top: 1.58rem
        left: 0
        right: 0
        bottom: 0
        background: #eee
        .search-item
            line-height: .62rem
            padding-left: .2rem
            background: #fff
            color: #666
</style>