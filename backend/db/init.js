var teacher = require('../models/teacher');
var student = require('../models/student');
var apply = require('../models/apply');
var exam = require('../models/exam');
var plane = require('../models/plane');
var letter = require('../models/letter');

// // 同步表结构
teacher.sync({
    alter: true
});

student.sync({
    alter: true
});

apply.sync({
    alter: true
});

exam.sync({
    alter: true
});

plane.sync({
    alter: true
});

letter.sync({
    alter: true
});
