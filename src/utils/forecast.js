const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/84adebb804ee7e4640e769e365794953/' + latitude + ',' + longitude + '?units=si'
    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.error) {
            callback('Unable to find location. Please try again', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain. If this percent is zero, no need for an umbrella, mate. The wind speed is ' + body.currently.windSpeed + ' something...')
        }
    })
}

module.exports = forecast