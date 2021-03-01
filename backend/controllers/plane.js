const plane = require('../models/plane');
const Op = require('sequelize').Op;
const jwt = require('jsonwebtoken');

module.exports = {
    addData: async (body, res) => {
        await plane.create(body);
        res.json({
            code: 200,
            data: null,
            msg: 'success'
        });
    },
    // getPage: async (body, res) => {
    //     let currentPage = parseInt(body.currentPage);
    //     let pageSize = parseInt(body.pageSize);
    //     let where = {};
    //     let arr = ['name'];
    //     for (let i in body) {
    //         arr.forEach(item => {
    //             if (body[i] !== '' && i === item) {
    //                 where[i] = body[i];
    //             }
    //         });
    //     }
    //     await plane
    //         .findAndCountAll({
    //             where: where,
    //             offset: (currentPage - 1) * pageSize,
    //             limit: pageSize
    //         })
    //         .then(result => {
    //             res.json({
    //                 code: 0,
    //                 data: {
    //                     currPage: parseInt(body.currentPage),
    //                     list: result.rows,
    //                     pageSize: parseInt(body.pageSize),
    //                     totalCount: result.count,
    //                     totalPage: Math.ceil(
    //                         result.count / parseInt(body.pageSize)
    //                     )
    //                 },
    //                 msg: 'success'
    //             });
    //         });
    // },
    getList: async (body, res) => {
        console.log(body)
        await plane
            .findAll()
            .then(result => {
                console.log(res)
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
        await plane
            .findOne({
                where: { p_id: body.id },
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
        // delete body.password
        await plane
            .update(body, {
                where: { p_id: body.p_id }
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
        await plane
            .destroy({
                where: { p_id: body.p_id }
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
