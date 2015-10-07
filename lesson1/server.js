/**
 * Created by Jihann on 2015/10/1.
 */

var http = require('http');
var fs = require('fs');

//web默认端口都为80

var server = http.createServer(function(request, response) {

    fs.readFile('index.html', 'UTF-8', function(err, data) {
        if (err) {
            console.log(err);
        }
        response.end(data);
    });
    //response.end('<html><head><meta charset="utf-8" /></head><body><h1>哈哈 Welcome node.js</h1></body></html>');
});

server.listen(8080);
console.log('------------- node http server start ---------------');