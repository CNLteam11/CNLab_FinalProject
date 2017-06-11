/**
 * WebController
 *
 * @description :: Server-side logic for managing webs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    _config: {
        actions: true,
        shortcuts: false,
        rest: false
    },
    registerIO: function(req, res) {
        return res.view('blank', {
            layout: '/register'
        })
    },
    loginIO: function(req, res) {
        return res.view('blank', {
            layout: '/login'
        })
    },
    homeIO: function(req, res) {
        return res.view('blank', {
            layout: '/home'
        })
    },
    chatIO: function(req, res) {
        return res.view('blank', {
            layout: '/chat'
        })
    },
};