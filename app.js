const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

geocode('India kerala' , (Error, data) => {

    console.log('ERROR', Error);
    console.log('DATA', data);
    forecast( data.latitude , data.longitude , (error, data) => {
        console.log('ERROR : ', error)
        console.log('DATA : ', data)
    })
    
})




// const url= 'http://api.weatherstack.com/current?access_key=6101ec4745adee5123afaf4eeabe6bf0&query=23.5204,87.3119&units=f';

// request({ url : url, json : true}, (error, response) => {
//     if (error){
//         console.log('Unable to connect to weather service! ')
//     }else if(response.body.error){
//         console.log('Unable to find location!')
//     }else{

//    console.log(response.body.current.weather_descriptions[0] +'. It is currently ' + response.body.current.temperature + ' degrees out. It feels like ' + response.body.current.feelslike + ' degrees out.')
//     } 
// });

// const forecast = (address, callbacks) => {
//     const url = 'http://api.weatherstack.com/' + encodeURIComponent(address) +'current?access_key=6101ec4745adee5123afaf4eeabe6bf0&query=23.5204,87.3119&units=f'
// }
// request({ url : url , json : true} , (error , response) => {
//     if(error){
//         callbacks('unable to connect to weather service! ', undefined)
//     }else if(response.body.error){
//         callbacks('Unable to find location!', undefined)
//     }else{
//         callbacks(undefined, response.body.current.weather_descriptions[0]+'. It is currently ' + response.body.current.temperature + ' degrees out. It feels like ' + response.body.current.feelslike + ' degrees out.')
//     }
// })





// const geocodeURL='https://api.mapbox.com/geocoding/v5/mapbox.places/India.json?access_token=pk.eyJ1Ijoic2hlcmFseTI0IiwiYSI6ImNrczNwb3BvbTF5bW4yd285NDVtZzQ5eTIifQ.d6mU_zqU61vLL7QZ3UvDhg&limit=1';

// request({ url : geocodeURL , json : true}, (error, response) => {
//     if(error){

//         console.log('Unable to connect to weather service!')

//     }else if(response.body.features.length==0){

//         console.log('Unable to find the longitude and latitude!')

//     }else{


//     const latitude =  response.body.features[0].center[1] ;
//     const longitude = response.body.features[0].center[0] ;
//     console.log( 'Longitude : ' + longitude + ' , Latitude : ' + latitude)
//     }
// });

