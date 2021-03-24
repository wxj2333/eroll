const student = require('../models/student');
const teacher = require('../models/teacher');
const jwt = require('jsonwebtoken');

module.exports = {
    login: async (body, res) => {
        if (body.post==='1'){
            console.log(1)
            const result = await teacher.findAll({
                where: {t_telephone: body.username, t_password: body.password}
            })
                    if( result.length===0){
                        res.json({
                            code: 404,
                            data: null,
                            msg: 'failed'
                        });
                    }
        else{
                    res.json({
                        code: 200,
                        data: result,
                        msg: 'success'
                    });
                    }
        }
        else{
            console.log(2)
            const result = await student.findAll({
                where: {s_telephone: body.username, s_password: body.password}
            })
            if( result.length===0){
                res.json({
                    code: 404,
                    data: null,
                    msg: 'failed'
                });
            }
            else{
                res.json({
                    code: 200,
                    data: result,
                    msg: 'success'
                });
            }
        }


    }

};
