/**
 * Created by Jihann on 2015/10/8.
 */
//引入依赖
var express = require('express');
var utility = require('utility');

//创建express实例
var app = express();

app.get('/', function(req, res) {

    //获取请求url参数
    var q = req.query.q;

    //采用utility库中的md5
    var result;
    if (q) {
        result = utility.md5(q);
    } else {
        result = 'null';
    }

    res.send('Hello World, your request is ' + result);
});

app.listen(3000, function() {
   console.log('app is listening at port 3000');
});