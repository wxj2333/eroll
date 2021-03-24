const letter = require('../models/letter');

module.exports = {
    addData: async (body, res) => {
        await letter.create(body);
        res.json({
            code: 200,
            data: null,
            msg: 'success'
        });
    },
    getList: async (body, res) => {
        await letter
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
        await letter
            .findOne({
                where: { l_s_id: body.id },
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
        await letter
            .findOne({
                where: { l_id: body.l_id },
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
        await letter
            .update(body, {
                where: { l_id: body.l_id }
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
        await letter
            .destroy({
                where: { l_id: body.l_id }
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
