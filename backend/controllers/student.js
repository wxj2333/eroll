const student = require('../models/student');
const Op = require('sequelize').Op;
const jwt = require('jsonwebtoken');

module.exports = {
	addData: async (body, res) => {
		console.log(body)
		const result = await student.findAll({
			where: {s_telephone: body.s_telephone, s_password: body.s_password}
		})
		console.log(result)
		if( result.length!==0){
			res.json({
				code: 201,
				data: null,
				msg: 'failed'
			});
		}
		await student.create(body);
		res.json({
			code: 200,
			data: null,
			msg: 'success'
		});
	},
	// getPage: async (body, res) => {
	// 	let currentPage = parseInt(body.currentPage);
	// 	let pageSize = parseInt(body.pageSize);
	// 	let where = {};
    //     let arr = ['username', 'nickname', 'phone', 'sex' ];
	// 	for (let i in body) {
	// 		arr.forEach(item => {
	// 			if (body[i] !== '' && i === item) {
	// 				where[i] = body[i];
	// 			}
	// 		});
	// 	}
	// 	await student
	// 		.findAndCountAll({
	// 			where: where,
	// 			offset: (currentPage - 1) * pageSize,
	// 			limit: pageSize
	// 		})
	// 		.then(result => {
	// 			res.json({
	// 				code: 0,
	// 				data: {
	// 					currPage: parseInt(body.currentPage),
	// 					list: result.rows,
	// 					pageSize: parseInt(body.pageSize),
	// 					totalCount: result.count,
	// 					totalPage: Math.ceil(
	// 						result.count / parseInt(body.pageSize)
	// 					)
	// 				},
	// 				msg: 'success'
	// 			});
	// 		});
	// },
	//查看这里是否会出错！！！！！！！！
	getList: async (body, res) => {
		await student
			.findAll({
				where: { s_state: body.s_state },
				// raw: true
			})
			.then(result => {
				res.json({
					code: 200,
					data: result,
					msg: 'success'
				});
			})
			.catch(err => {
				res.json({
					code: 500,
					data: null,
					msg: err
				});
			});
	},
	getInfo: async (body, res) => {
		await student
			.findOne({
				where: { s_id: body.s_id },
				raw: true
			})
			.then(result => {
				res.json({
					code: 200,
					data: result,
					msg: 'success'
				});
			})
			.catch(err => {
				res.json({
					code: 500,
					data: null,
					msg: err
				});
			});
	},
	updateData: async (body, res) => {
        // body.updated_time = Date.parse(new Date()) / 1000;
        delete body.password
		await student
			.update(body, {
				where: { s_id: body.s_id }
			})
			.then(result => {
				res.json({
					code: 200,
					data: null,
					msg: 'success'
				});
			})
			.catch(err => {
				res.json({
					code: 500,
					data: null,
					msg: err
				});
			});
	},
	deleteData: async (body, res) => {
		await student
			.destroy({
				where: { s_id: body.s_id }
			})
			.then(result => {
				res.json({
					code: 200,
					data: null,
					msg: 'success'
				});
			})
			.catch(err => {
				res.json({
					code: 500,
					data: null,
					msg: err
				});
			});
	}
};
