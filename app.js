
const yargs = require('yargs');
const geocode = require('./geocode/geocode');

const argv = yargs
    .options({
        address:{
            demand:true,
            alias:'a',
            describe: 'Addres to fetch the weather for',
            string: true
        }
    })
    .help('help','h')
    .argv;

    console.log(argv.address);
    
    
    geocode.geocodeAddress(argv.address,(errorMessage,results) =>{
        if(errorMessage){
            console.log(errorMessage);
        }else{
            console.log(JSON.stringify(results,undefined,2));
        }
    });
