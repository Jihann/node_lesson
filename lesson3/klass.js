/**
 * Created by Jihann on 2015/10/2.
 */

var student = require('./student');
var teacher = require('./teacher');


function add(teacherName, students) {

    teacher.add(teacherName);

    students.forEach(function(item, index) {
        student.add(item);
    });
}

exports.add = add;