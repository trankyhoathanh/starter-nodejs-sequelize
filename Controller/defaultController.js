var express = require('express');
var router = express.Router();
const { User } = require('../connection/sequelize')

var routes = function () {

    router.route('/users')
    .get(async (req, res) => {

        var user = null

        // Check search by Id
        if (req.query.id)
        {
            user = await User.findAll(
                {
                    where: {
                        id: req.query.id
                    }
                }
            )
        } else {
            user = await User.findAll()
        }

        return res.status(200).json({
            data: user,
            statusCode: 200,
            message: 'Get Succeed'
        });
    });

    router.route('/user')
    .post(async (req, res) => {
        var user = await User.create(req.body)

        return res.status(200).json({
            data: user,
            statusCode: 200,
            message: 'Create succeed'
        });
    });

    return router;
};
module.exports = routes;