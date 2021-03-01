var express = require('express');
var router = express.Router();

const {
    addData,
    getInfo,
    getSInfo,
    updateData,
    deleteData
} = require('../controllers/exam');

// 增加
router.post('/add', function (req, res, next) {
    addData(req.body, res);
});
// 详情
router.get('/info/:id', function (req, res, next) {
    getInfo(req.params, res);
});
router.get('/sinfo/:id', function (req, res, next) {
    getSInfo(req.params, res);
});
// 修改
router.post('/update', function (req, res, next) {
    updateData(req.body, res);
});
// 删除
router.post('/delete', function (req, res, next) {
    deleteData(req.body, res);
});

module.exports = router;
