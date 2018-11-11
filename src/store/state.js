let defaultCity = '深圳'
try {
    if (localStorage.city) {
        defaultCity = localStorage.city
    }
} catch (e) {
    console.log(e)
}

export default {
    city: defaultCity
}