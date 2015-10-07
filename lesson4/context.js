/**
 * Created by Jihann on 2015/10/2.
 */

//this三种上下文
var person = {
    age : 20,
    say : function() {
        console.log(this.age);
        console.log(this === person);
    }
};

person.say();


function show(name) {
    this.name = name;
    console.log(this.name);
    console.log(this === global);
}

show('Jihann');


function Person(name) {
    this.name = name;
    this.say = function() {
        console.log(this.name);
        console.log(this);
    }
}

var p = new Person('bb');
p.say();