/**
 * Created by Jihann on 2015/10/2.
 */
function Pet(words) {
    this.words = words;
    this.speak = function(say) {
        console.log(say + ' ' + this.words);
    }
}

function Dog(words) {
    Pet.call(this, words)
}

var dog = new Dog('Wang');
dog.speak('Speak');