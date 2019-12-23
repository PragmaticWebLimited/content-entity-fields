module.exports = function(configDirs) {
	let prodConfig = Object.assign({}, require('./common')(configDirs));

	prodConfig.mode = 'production';

	return prodConfig;
};
