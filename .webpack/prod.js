module.exports = function(settings) {
	let prodConfig = Object.assign({}, require('./common')(settings));

	prodConfig.mode = 'production';

	return prodConfig;
};
