const request = require ('request')

const forecast = (latitude , longitude , callbacks) => {
    const url = 'http://api.weatherstack.com/current?access_key=6101ec4745adee5123afaf4eeabe6bf0&query=' + longitude + ',' + latitude + '&units=f'

    request({ url : url, json : true} , (error , response) => {
        if(error){
            callbacks('unable to connect to weather service! ', undefined)
        }else if(response.body.error){
            callbacks('Unable to find location!', undefined)
        }else{
            callbacks(undefined, response.body.current.weather_descriptions[0]+'. It is currently ' + response.body.current.temperature + ' degrees out. It feels like ' + response.body.current.feelslike + ' degrees out.')
        }
    })
}

module.exports = forecast


