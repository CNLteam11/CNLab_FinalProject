module.exports = {
connection: 'someMysqlServer',
  attributes: {
  	attribute: {
		model: 'Attribute',
		required: false
	},
	personal_info: {
		model: 'Info',
		required: false
	}
  }
};
