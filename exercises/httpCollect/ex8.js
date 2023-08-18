const http = require('http');
http.get(process.argv[2], (response) => {
    let concat = '';
    response.on('data', (chunk)=>{
        concat+=chunk;
    });
    response.on('end', ()=>{
        console.log(concat.length);
        console.log(concat);
    });
    response.on('error',(error)=>{
        console.error('Error:', error.message);
    });
});
