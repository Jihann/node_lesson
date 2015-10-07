/**
 * Created by Jihann on 2015/10/1.
 */

var http = require('http');
var fs = require('fs');
var url = require('url');

//web默认端口都为80

var server = http.createServer(function(request, response) {

    //解析url
    var urlObj =  url.parse(request.url);

    var pathname = urlObj.pathname;
    var query = urlObj.query;

    if (pathname === '/') {
        pathname = '/index.html';
    }

    fs.readFile(pathname.substr(1), 'UTF-8', function(err, data) {
        if (err) {
            console.log(err);
            //请求资源不存在时
            response.writeHead(404);
            response.end('file not found');
        }
        response.end(data);
    });
});

server.listen(8080);
console.log('------------- node http server start ---------------');