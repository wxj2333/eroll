const exam = require('../models/exam');

module.exports = {
    addData: async (body, res) => {
        body.e_data = Date.parse(new Date()) / 1000;
        await exam.create(body);
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
    await exam
        .findAll({
            where: { e_s_id: body.id },
            raw: true
        })
        .then(result => {
            console.log(result)
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
        await exam
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
        await exam
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
        await exam
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
