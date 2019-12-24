const externals = require('./externals');

/**
 * Return object for Webpack configuration.
 *
 * @param {Object} settings The build config settings.
 *
 * @return {Object} The Webpack config.
 */
function buildConfig(settings) {
	return {
		entry: settings.APP_DIR + '/index.js',
		externals: externals,
		mode: 'development',
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					include: [settings.APP_DIR],
					loader: 'babel-loader',
				},
			],
		},
		output: {
			path: settings.BUILD_DIR,
			filename: 'content-entity-fields.js',
		},
		stats: {
			colors: true,
		},
	};
}

module.exports = buildConfig;
