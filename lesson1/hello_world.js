/**
 * Created by wuhaoshangpu on 2015/10/1.
 */
console.log('Hello World');

//全局对象global的属性
//__dirname
//__filename
//console
//process

//-------------node直接访问global对象
//console.log(global);

//输出绝对路径
console.log(__dirname);

//输出文件名称
console.log(__filename);


//输出其实和console差不多，尽量用console
//process.stdout;  标准正确信息输出
//process.stderr;  标准错误信息输出

process.stdout.write('This is stdout');
process.stderr.write('This is stderr');




