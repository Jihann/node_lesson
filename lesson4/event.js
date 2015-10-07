/**
 * Created by Jihann on 2015/10/2.
 */

function clickIt(e) {
    window.alert('Button is clicked');
}

var button = document.getElementById('button');
button.addEventListener('click', clickIt);