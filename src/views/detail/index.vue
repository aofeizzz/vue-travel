<template>
    <div>
        <detail-banner></detail-banner>
        <detail-header></detail-header>
        <div class="content"></div>
    </div>
</template>

<script>
    import DetailBanner from './components/detail-banner'
    import DetailHeader from './components/detail-header'

    export default {
        name: 'detail',
        components: {
            DetailHeader,
            DetailBanner
        }
    }
</script>

<style lang="stylus" scoped>
    .content
        height: 50rem
</style>