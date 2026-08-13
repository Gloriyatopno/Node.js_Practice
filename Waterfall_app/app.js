/* console.log('Starting')

setTimeout(() => {  
    console.log('2 Second Timer')
}, 2000)

setTimeout(() => {
    console.log('0 Second Timer')

},0)
console.log('Stopping')*/

const request = require('request')

const url = 'https://api.weatherstack.com/current?access_key=dc04b9d75396821c906d02c5a11bdbb9&query=37.8267,-122.4233&units=f'

request({ url: url, json: true }, (error, response) => {
   // console.log(response.body.current)
    console.log(response.body.current.weather_descriptions[0] + ". It is currently " +response.body.current.temperature + " degrees out. It feels like " + response.body.current.feelslike + " degrees out.")
})

//Geocoding
//Address -> Lat/Long -> Weather

const geocodeURL = 'https://api.positionstack.com/v1/forward?access_key=6b90fd1518718a918c1314d95d179c2c&query=1600%20Pennsylvania%20Ave%20NW%2C%20Washington%20DC'
request({ url: geocodeURL, json: true }, (error, response) => {
    const latitude = response.body.data[0].latitude
    const longitude = response.body.data[0].longitude
    console.log(latitude, longitude)

})