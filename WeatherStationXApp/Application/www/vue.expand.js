
Vue.filter('precision', function (value) {
    if (isNaN(value) || typeof value === 'string')
        return value
    return value.toFixed(2)
})

Vue.filter('time', function (value) {
    if (isNaN(value))
        return "0s"
    if (typeof value === 'string')
        value = parseInt(value)
    if (value < 60)
        return value.toFixed(0) + "s"
    else if (value < 3600)
        return (value/60).toFixed(0) +"m " + (value%60).toFixed(0) +"s"
    else
        return (value/3600).toFixed(0) +"h " + ((value/60)%60).toFixed(0) +"m " + (value%60).toFixed(0) +"s"
})
