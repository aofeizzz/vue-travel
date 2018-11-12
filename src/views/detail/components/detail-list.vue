<template>
    <div>
        <div class="item"
             v-for="(item,index) in publicValue"
             :key="index">
            <div class="item-title border-bottom">
                <span class="item-title-icon"></span> {{item.title}}
            </div>
            <div v-if="item.children" class="item-chilren">
                <detail-list v-model="item.children"></detail-list>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'detail-list',
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
        watch: {
            value (val) {
                this.publicValue = val
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .item-title-icon
        position: relative
        left: .06rem
        top: .06rem
        display: inline-block
        width: .36rem
        height: .36rem
        background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
        margin-right: .1rem
        background-size: .4rem 3rem
    
    .item-title
        line-height: .8rem
        font-size: .32rem
        padding: 0 .2rem
    
    .item-chilren
        padding: 0 .8rem
</style>