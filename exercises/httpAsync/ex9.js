const http = require('http');
const async = require('async');
const links = process.argv.slice(2);
let done = 0;
function doHttpRequest(url, callback) {
    http.get(url, (response)=>{
        let rawData = '';
        response.setEncoding('utf8');
        response.on('data', (chunk)=>{
            rawData+=chunk;
        });
        response.on('end', ()=>{
            callback(null, rawData);
        });
        response.on('error', (error)=>{
            callback(error);
        });
    });
}

function start(urls, callback) {
    async.mapSeries(urls, doHttpRequest, callback);
}

start(links, (err, results) => {
    if (err) {
        console.error('Error:', err.message);
        return;
    }
    results.forEach(result=>{
        console.log(result);
    });
});
