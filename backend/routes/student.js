var express = require('express');
var router = express.Router();

const {
	addData,
	getInfo,
	// getId,
	updateData,
	deleteData,
} = require('../controllers/student');

// 增加
router.post('/add', function(req, res, next) {
	addData(req.body, res);
});
// // 分页
// router.get('/page', function(req, res, next) {
// 	getPage(req.query, res);
// });
// 列表
// router.get('/list', function(req, res, next) {
// 	getList(req.query, res);
// });
// 详情
router.get('/info/:id', function(req, res, next) {
	getInfo(req.params, res);
});
// router.get('/getid/:telephone', function(req, res, next) {
// 	getId(req.params, res);
// });
// 修改
router.post('/update', function(req, res, next) {
	updateData(req.body, res);
});
// 删除
router.post('/delete', function(req, res, next) {
	deleteData(req.body, res);
});

module.exports = router;
