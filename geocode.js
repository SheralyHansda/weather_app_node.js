const request = require('request')

const geocode = (address , callbacks) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoic2hlcmFseTI0IiwiYSI6ImNrczNwb3BvbTF5bW4yd285NDVtZzQ5eTIifQ.d6mU_zqU61vLL7QZ3UvDhg&limit=1'

        request({url: url , json: true}, (error, response) => {
            if (error){
                callbacks('Unable to connect to location services!', undefined)
            } else if (response.body.features.length === 0) {
                callbacks('Unable to find the location. Try another search!' , undefined )
            } else{
                callbacks(undefined, {
                    latitude: response.body.features[0].center[1] ,
                    longitude: response.body.features[0].center[0] ,
                    location: response.body.features[0].place_name
                })
            }
        })
}

module.exports = geocode