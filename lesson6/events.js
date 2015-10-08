/**
 * Created by Jihann on 2015/10/2.
 */

var EventEmitter = require('events').EventEmitter;


//事件监听默认10个，可以修改
var life = new EventEmitter();

life.on('play', function(who) {
     console.log('陪 ' + who + ' 吃饭');
});

life.on('play', function(who) {
    console.log('陪 ' + who + ' 唱歌');
});

life.on('play', function(who) {
    console.log('陪 ' + who + ' 踢球');
});

function sleep(who) {
    console.log('陪 ' + who + ' 睡觉');
}

life.on('play', sleep);

life.on('played', function(who) {
    console.log('陪 ' + who + ' 逛街');
});

life.on('played', function(who) {
    console.log('陪 ' + who + ' 聊天');
});

//单个移除
life.removeListener('play', sleep);
//批量移除
life.removeAllListeners('play');

life.setMaxListeners(12);
var hasPlayListener = life.emit('play', '哥哥');
var hasPlayedListener = life.emit('played', '妹纸');
var hasPlayingListener = life.emit('playing', '小姐');

//获取监听事件的数量
console.log('--------played length :' + life.listeners('played').length);
console.log('--------play length :' + EventEmitter.listenerCount(life, 'play'));

//判断事件是否监听
console.log(hasPlayListener);
console.log(hasPlayedListener);
console.log(hasPlayingListener);

