/**
 * Created by Jihann on 2015/10/1.
 */
function sum (n) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

exports.sum = sum;