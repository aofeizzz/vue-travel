<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
    </div>
</template>

<script>
    import CityHeader from './components/city-header'
    import CitySearch from './components/city-search'

    export default {
        name: 'city',
        components: {
            CitySearch,
            CityHeader
        }
    }
</script>

<style lang="stylus" scoped>
</style>