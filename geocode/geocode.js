const request = require('request');
const apiKey='+CA&key=AIzaSyCch3nluCWGTOJasVoBCpoVcqAZDK8nWkE';

const geocodeAddress = (addr,callback) => {
     addr=encodeURIComponent(addr);
    request ({
        url:`https://maps.googleapis.com/maps/api/geocode/json?address=${addr}${apiKey}`,
        json: true
    },(error,response,body) => {
        //console.log(response);
        if (error){
            callback('Unable to connect to Google servers')
            
        }else if(body.status ==="ZERO_RESULTS"){
            callback('Unable to find that address')
        }else if(body.status==='OK'){
            callback(undefined,{
                address: body.results[0].formatted_address,
                lat:body.results[0].geometry.location.lat,
                lng:body.results[0].geometry.location.lng
            })
        }
    });
};

module.exports={
    geocodeAddress
}