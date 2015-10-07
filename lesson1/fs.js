/**
 * Created by Jihann on 2015/10/1.
 */
var fs = require('fs');
var path = require('path');


//异步代码并不会阻塞下面代码的执行，而同步方法必须等自己执行完成以后
//再执行它下面的代码

//读取文件(同步sync)
var data = fs.readFileSync('log.txt', 'utf-8');
console.log(data);

//读取文件(异步async)
fs.readFile('sum.js', 'utf-8', function(err, data) {
    if (err) {
        console.log(err);
    }
    console.log(data);
});


//获取操作系统的文件分隔符
var sep = path.sep;
console.log(sep); //win \ linux /