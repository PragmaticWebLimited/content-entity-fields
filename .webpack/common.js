function buildConfig(configDirs) {
	return {
		mode: 'development',
		entry: configDirs.APP_DIR + '/index.js',
		output: {
			path: configDirs.BUILD_DIR,
			filename: 'content-entity-fields.js',
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /node_modules/,
					loader: 'babel-loader',
					query: {
						presets: [
							[
								'@babel/preset-env',
								{
									corejs: 3,
									useBuiltIns: 'entry',
								},
							],
						],
					},
				},
			],
		},
		stats: {
			colors: true,
		},
	};
}

module.exports = buildConfig;
