const teacher = require('../models/teacher');

module.exports = {
    addData: async (body, res) => {
        console.log(body)
        await teacher.create(body);
        res.json({
            code: 200,
            data: null,
            msg: 'success'
        });
    },
    getInfo: async (body, res) => {
        await teacher
            .findOne({
                where: { t_id: body.t_id },
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
        delete body.password
        await teacher
            .update(body, {
                where: { t_id: body.t_id }
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
        await teacher
            .destroy({
                where: { t_id: body.t_id }
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
