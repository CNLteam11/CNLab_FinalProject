module.exports = {
connection: 'someMysqlServer',
  attributes: {
  	username: {
		type : 'string',
	},
	password: {
		type : 'string'
	},
	gender: {
		type : 'string'
	},
	age: {
		type : 'integer'
	},
	city: {
		type : 'string'
	},
	email: {
		type : 'string'
	},
	feature: {
		type : 'string'
	},
	data: {
		model: 'Data',
		required: false
	}
  }
};
