/**
 * Created by Jihann on 2015/10/2.
 */
function learn(something) {
    console.log(something);
}

function we(callback, something) {
    something += ' is cool';
    callback(something);
}

we(learn, 'Node.js');

//匿名
we(function(something) {
    console.log(something);
}, 'express');