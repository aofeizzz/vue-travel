<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list v-model="info.hotCities"
                   :cities="info.cities"
                   :letter="info.letter">
        
        </city-list>
        <city-alphabet v-model="info.cities"
                       @change="handleLetterChange">
        
        </city-alphabet>
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
        },
        data () {
            return {
                info: {
                    hotCities: [],
                    cities: {},
                    letter: ''
                }
            }
        },
        mounted () {
            this.getCityInfo()
        },
        methods: {
            getCityInfo () {
                this.$axios.get('/api/city').then((res) => {
                    let _data = res.data.data.data
                    this.info.cities = _data.cities
                    this.info.hotCities = _data.hotCities
                }).catch((res) => {
                    console.log(res)
                }).finally(() => {
                    console.log(this.info)
                })
            },
            handleLetterChange (letter) {
                this.info.letter = letter
            }
        }
    }
</script>

<style lang="stylus" scoped>

</style>