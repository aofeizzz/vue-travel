<template>
    <home-header></home-header>
</template>

<script>
    import HomeHeader from './components/home-header'

    export default {
        name: 'home',
        components: {HomeHeader},
        data () {
            return {
                text: '首页'
            }
        }
    }
</script>

<style scoped>

</style>