const student = require('../models/student');
const teacher = require('../models/teacher');
const jwt = require('jsonwebtoken');

module.exports = {
    login: async (body, res) => {
        console.log(body)
        if (body.post){
            debugger
            await teacher.findOne({
                where: {t_telephone: body.username, t_password: body.password}
            })
                .then(result => {
                    // let content = {telephone: body.username};
                    // let token = jwt.sign(content, 'jares', {
                    //     expiresIn: 60 * 60 * 1
                    // });
                    res.json({
                        code: 200,
                        data: result,
                        msg: 'success'
                    });
                })
                .catch(err=>
                {
                    res.json({
                        code: 404,
                        data: null,
                        msg: err
                    });
                });
        }
        else{
            await student.findOne({
                where: {s_telephone: body.username, s_password: body.password}
            })
                .then(result => {
                    // let content = {telephone: body.username};
                    // let token = jwt.sign(content, 'jares', {
                    //     expiresIn: 60 * 60 * 1
                    // });
                    res.json({
                        code: 200,
                        data: result,
                        msg: 'success'
                    });
                })
                .catch(err=>
                {
                    res.json({
                        code: 404,
                        data: null,
                        msg: err
                    });
                });
        }


    }

};
