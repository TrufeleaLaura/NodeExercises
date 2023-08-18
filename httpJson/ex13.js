const http = require('http');
const url = require('url');

const server = http.createServer((request, response) => {
    const extractUrl = url.parse(request.url, true);
    const pathname = extractUrl.pathname;
    const iso = extractUrl.query.iso;
    if (request.method==='GET') {
        if (pathname==='/api/parsetime') {
            const date=new Date(iso);
            const obj={
                hour: date.getHours(),
                minute: date.getMinutes(),
                second: date.getSeconds()
            };
            response.writeHead(200, {'Content-Type':'application/json'});
            response.end(JSON.stringify(obj));
        } else if (pathname==='/api/unixtime') {
            const date=new Date(iso);
            const obj={
                unixtime: date.getTime()
            };
            response.writeHead(200,{ 'Content-Type':'application/json'});
            response.end(JSON.stringify(obj));
        }
    }
});
server.listen(process.argv[2]);
