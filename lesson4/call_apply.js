/**
 * Created by Jihann on 2015/10/2.
 */
var pet = {
    words : '...',
    speak :  function(say) {
        console.log(say + ' ' + this.words);
    }
};

//pet.speak('Speak');


var dog = {
    words : 'wangwang'
};

pet.speak.call(dog, 'Speak');