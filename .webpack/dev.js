/**
 * Webpack development build configuration.
 */
const {
	externals,
	helpers,
	loaders,
	presets,
} = require('@humanmade/webpack-helpers');
const { choosePort, cleanOnExit, filePath } = helpers;

// Clean up manifests on exit.
cleanOnExit([
	filePath('mu-plugins/myproject-blocks/build/asset-manifest.json'),
	filePath('themes/myproject/build/asset-manifest.json'),
]);

// Mutate the loader defaults.
loaders.css.defaults.exclude = /(bower_components|node_modules|vendor)/;
loaders.eslint.defaults.exclude = /(bower_components|node_modules|vendor)/;
loaders.js.defaults.exclude = /(bower_components|node_modules|vendor)/;
loaders.js.defaults.query = {
	presets: [
		[
			'@babel/preset-env',
			{
				corejs: 3,
				useBuiltIns: 'entry',
			},
		],
	],
};

module.exports = choosePort(8080).then((port) => [
	presets.development({
		name: 'blocks',
		devServer: {
			port,
		},
		externals,
		entry: {
			editor: filePath('mu-plugins/myproject-blocks/src/editor.js'),
			frontend: filePath('mu-plugins/myproject-blocks/src/frontend.js'),
		},
		output: {
			path: filePath('mu-plugins/myproject-blocks/build'),
			publicPath: `http://localhost:${port}/myproject-blocks/`,
		},
	}),
	presets.development({
		name: 'theme',
		devServer: {
			port,
		},
		entry: {
			frontend: filePath('themes/myproject/src/frontend.js'),
		},
		output: {
			path: filePath('themes/myproject/build'),
			publicPath: `http://localhost:${port}/myproject-blocks/`,
		},
	}),
]);
