var path = require('path');

var BUILD_DIR = path.resolve(__dirname, './dist');
var APP_DIR = path.resolve(__dirname, './src');

const configDirs = {
	BUILD_DIR: BUILD_DIR,
	APP_DIR: APP_DIR,
};

function buildConfig(env) {
	let envConfig = 'dev';

	if ('NODE_ENV' in process.env && process.env.NODE_ENV === 'production') {
		envConfig = 'prod';
	}

	return require('./.webpack/' + envConfig + '.js')(configDirs);
}
module.exports = buildConfig;
