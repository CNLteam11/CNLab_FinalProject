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
        console.log(email);
        console.log(password);
        console.log(username);
        console.log(gender);
        console.log(age);
        console.log(city);
        console.log(career);
        console.log(self_introduction)
        console.log(hobbits)
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
                console.log('1');
		sails.log.error(err)
                console.log(err);
                console.log('2');
                console.log(user);

                return res.json({ result: encodeURI(JSON.stringify(user)) })
            })
    }
};
