var createError = require('http-errors');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser');
const { tokenVerification } = require('./middleware/index.js');
var mount = require('mount-routes')

var indexRouter = require('./routes/index');

var app = express();

/**
 *
 * 公共系统初始化
 *
 */
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'jade');
app.set('views',(__dirname + '/views', {extension: 'pug'}))

// 初始化数据库模块
var database = require('./middleware/database')
database.initialize(app, function(err) {
    if (err) {
        console.error('连接数据库失败失败 %s', err)
    }
})
const cors = require('cors');
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// app.use('/', indexRouter);
//token
// app.use('/', (req, res, next) => {
//     if ((req.url.indexOf('login') > -1||((req.url.indexOf('teacher') > -1||req.url.indexOf('student'))&&req.url.indexOf('add'))) > -1) {
//         next()
//     } else {
//         tokenVerification(req.headers.token)
//             .then(result => {
//                 next();
//             })
//             .catch(err => {
//                 let obj = {
//                     code: 401,
//                     data: null,
//                     msg: 'token失效'
//                 };
//                 res.json(obj);
//             });
//     }
// });
app.use('/login', indexRouter.login);
app.use('/teacher', indexRouter.teacher);
app.use('/student', indexRouter.student);
app.use('/apply', indexRouter.apply);
app.use('/letter', indexRouter.letter);
app.use('/plane', indexRouter.plane);
app.use('/exam', indexRouter.exam);

mount(app, path.join(process.cwd(), '/routes'), true)
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

app.listen(8888)

module.exports = app;
