/**
 * Created by wuhaoshangpu on 2015/10/1.
 */

//记录日志方法
console.log('This is log');
console.info('This is an info');
console.warn('This is an warn');
console.error('This is an error');


// 记录代码执行的时间
console.time('test');
for (var i = 0; i < 1000000; i++) {

}
console.timeEnd('test');