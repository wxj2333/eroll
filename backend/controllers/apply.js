const apply = require('../models/apply');

module.exports = {
    addData: async (body, res) => {
        body.date = Date.parse(new Date()) / 1000;
        await apply.create(body);
        res.json({
            code: 200,
            data: null,
            msg: 'success'
        });
    },
    getList: async (body, res) => {
        await apply
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
                where: { a_s_id: body.id },
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
                where: { a_id: body.a_id },
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
        body.updated_time = Date.parse(new Date()) / 1000;
        await apply
            .update(body, {
                where: { a_id: body.a_id }
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
                where: { a_id: body.a_id }
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
