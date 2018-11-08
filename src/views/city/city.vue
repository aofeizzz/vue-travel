<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list></city-list>
        <city-alphabet></city-alphabet>
    </div>
</template>

<script>
    import CityHeader   from './components/city-header'
    import CitySearch   from './components/city-search'
    import CityList     from './components/city-list'
    import CityAlphabet from './components/city-alphabet'

    export default {
        name: 'city',
        components: {
            CityAlphabet,
            CityList,
            CitySearch,
            CityHeader
        }
    }
</script>

<style lang="stylus" scoped>

</style>