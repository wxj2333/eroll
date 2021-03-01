const exam = require('../models/exam');

module.exports = {
    addData: async (body, res) => {
        body.e_data = Date.parse(new Date()) / 1000;
        await apply.create(body);
        res.json({
            code: 200,
            data: null,
            msg: 'success'
        });
    },
    getList: async (body, res) => {
        await exam
            .findAll()
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
    getSInfo: async (body, res) => {
    await apply
        .findOne({
            where: { e_s_id: body.id },
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
    getInfo: async (body, res) => {
        await apply
            .findOne({
                where: { e_id: body.e_id },
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
        body.e_data = Date.parse(new Date()) / 1000;
        await apply
            .update(body, {
                where: { e_id: body.e_id }
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
        await apply
            .destroy({
                where: { e_id: body.e_id }
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
