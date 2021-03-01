var express = require('express');
var router = express.Router();
const { login } = require('../controllers/login');
// 登录
router.post('/', function (req, res, next) {
    login(req.body, res);
});

module.exports = router;
