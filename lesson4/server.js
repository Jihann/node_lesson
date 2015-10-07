/**
 * Created by Jihann on 2015/10/1.
 */

var http = require('http');

http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type' : 'text/plain'});
    response.write('Hello World');
    response.end();
}).listen(1234, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1234/');