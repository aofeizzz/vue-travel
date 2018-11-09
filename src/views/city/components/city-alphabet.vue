<template>
    <ul class="list">
        <li class="item"
            v-for="item of letters"
            :key="item"
            :ref="item"
            @click="handleLetterClick"
            @touchstart="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd">
            {{item}}
        </li>
    </ul>
</template>

<script>
    export default {
        name: 'city-alphabet',
        props: {
            value: {
                type: Object,
                required: true
            }
        },
        data () {
            return {
                publicValue: this.value,
                touchStatus: false,
                startY: 0,
                timer: null,
                start: new Date()
            }
        },
        computed: {
            letters () {
                const letters = []
                for (let i in this.publicValue) {
                    letters.push(i)
                }
                return letters
            }
        },
        updated () {
            this.startY = this.$refs['A'][0].offsetTop
        },
        methods: {
            handleLetterClick (e) {
                this.$emit('change', e.target.innerText)
            },
            handleTouchStart () {
                this.touchStatus = true
            },
            handleTouchMove (e) {
                if (this.touchStatus) {
                    // 函数节流
                    const current = new Date()
                    this.timer && clearTimeout(this.timer)
                    if (current - this.start >= 3000) {
                        this.handleChange(e)
                        this.start = current
                    } else {
                        this.timer = setTimeout(() => {
                            this.handleChange(e)
                        }, 16)
                    }
                }
            },
            handleTouchEnd () {
                this.touchStatus = false
            },
            handleChange (e) {
                const touchY = e.touches[0].clientY - 79
                const index = Math.floor((touchY - this.startY) / 20)
                if (index >= 0 && index < this.letters.length) {
                    this.$emit('change', this.letters[index])
                }
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
    @import '~@/assets/styles/varibles.styl'
    .list
        display: flex
        flex-direction: column
        justify-content: center
        position: absolute
        top: 1.58rem
        right: 0
        bottom: 0
        width: .4rem
        .item
            line-height: .4rem
            text-align: center
            color: $bgColor
</style>