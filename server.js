const http = require('node:http');
var HOST='localhost';
var PORT = '3002'
const server = http.createServer((request, response) =>{
    if (request.url === '/' ) {
        if (request.method === 'GET') {response.end("Hello Galvanize!");}
        response.statusCode = 404;
        response.end()}})
server.listen(PORT, HOST, () => {
    console.log(`Server running at http://localhost:3000/`); })    
