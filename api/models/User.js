/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
    attributes: {
        username: {
            type: 'string',
            defaultsTo: '',
        },

        password: {
            type: 'string',
            defaultsTo: '',
        },

        gender: {
            type: 'string',
            defaultsTo: '',
        },

        age: {
            type: 'string',
            defaultsTo: '',
        },

        city: {
            type: 'string',
            defaultsTo: '',
        },

        email: {
            type: 'string',
            defaultsTo: '',
        },

        feature: {
            type: 'string',
            defaultsTo: '',
        },

        self_introduction: {
            type: 'string',
            defaultsTo: '',
        },

        hobbits: {
            type: 'array',
            defaultsTo: [],
        },

        career: {
            type: 'string',
            defaultsTo: '',
        },

    }
};
