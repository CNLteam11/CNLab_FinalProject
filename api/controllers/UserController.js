/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    _config: {
        actions: true,
        shortcuts: false,
        rest: false
    },
    register: function(req, res) {
        let email = req.param('email');
        let password = req.param('password');
        let username = req.param('username');
        let gender = req.param('gender');
        let hobbits = req.param('hobbits');
        let age = req.param('age');
        let city = req.param('city');
        let self_introduction = req.param('self_introduction') || '';
        let career = req.param('career');
        User.create({
                email: email,
                password: password,
                username: username,
                gender: gender,
                hobbits: hobbits,
                age: age,
                city: city,
                career: career,
                self_introduction: self_introduction
            })
            .exec(function(err, user) {
                return res.json({ result: user })
            })
    },
    login: function(req, res) {
        let username = req.param('username');
        let password = req.param('password');
        User.find({
                username: username,
                password: password,
            })
            .exec(function(err, user) {
                if (user.length > 0) {
                    return res.json({ result: true })
                } else {
                    return res.json({ result: false })
                }
            })
    },
};