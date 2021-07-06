const http = require('http');
const url = require('url');
const additions = require('./app')
const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req,res) =>{
    const pathUrl = url.parse(req.url, true);
    
    res.setHeader('Content-type', 'text/html;charset=utf-8');
    res.statusCode = 200;
    res.write(`${additions.suma(pathUrl.query.num1,pathUrl.query.num2)}`);
    res.end();
});

server.listen(port,hostname, ()=>{
    console.log (`Server Running at http://${hostname}:${port}`)
});
