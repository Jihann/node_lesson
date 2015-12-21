/**
 * Created by Jihann on 2015/10/8.
 */
//引入依赖
var express = require('express');
var cheerio = require('cheerio');
var superagent = require('superagent');

//创建express实例
var app = express();

//网络爬虫，一次性爬完
app.get('/', function(req, res) {
    superagent.get('https://cnodejs.org/').end(function(err, sres) {
        if (err) {
            console.log(err);
        }
        var $ = cheerio.load(sres.text);
        var data = [];
        $('#topic_list .cell').each(function(index, item) {
            var $element = $(this);
            var author = $element.find('.user_avatar').children('img').attr('title');
            var content = $element.find('.topic_title');
            data.push({
                title : content.attr('title'),
                href : content.attr('href'),
                author : author
            });
        });
        res.send(data);
    });
});

app.listen(3000, function() {
   console.log('app is listening at port 3000');
});