module.exports = {
connection: 'someMysqlServer',
  attributes: {
  	self_introduction: {
		type : 'string',
	},
	hobbit: {
		type : 'string'
	},
	career: {
		type : 'string'
	},
	data: {
		model: 'Data',
		required: false
	}
  }
};
