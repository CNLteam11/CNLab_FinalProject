/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    username:{
        type: 'string',
        default: ''
    },

    password:{
        type: 'string',
	default: ''
    },

    gender: {
      	type: 'string',
      	default: ''
    },

    age:{
        type: 'string',
	default: ''
    }

    city:{
	type: 'string',
	default: ''
    }
    
    email:{
	type: 'string',
	default: ''
    }
    
    feature:{
	type: 'string',
	default: ''
    }
     
    self_introduction:{
	type: 'string',
	default: ''
    }

    hobbits:{
	type: 'array',
	default: []
    }

    career:{
	type: 'string',
	default: ''
    }

  }
};

