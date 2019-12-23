/**
 * Convert string to camel case.
 *
 * `_.camelCase` also upper-case letters following numbers, which isn't needed..
 *
 * @param {string} string Input dash-delimited string.
 *
 * @return {string} Camel cased string.
 */
const convertToCamelcase = (string) =>
	string.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());

/**
 * Define externals to load components through the wp global.
 */
let wordpress = [
	'api-fetch',
	'block-editor',
	'blocks',
	'components',
	'data',
	'date',
	'edit-post',
	'editor',
	'element',
	'hooks',
	'i18n',
	'plugins',
	'utils',
];

wordpress.reduce(
	(externals, name) => ({
		...externals,
		[`@wordpress/${name}`]: `wp.${convertStringToCamelcase(name)}`,
	}),
	{
		jquery: 'jQuery',
		lodash: 'lodash',
		react: 'React',
		'react-dom': 'ReactDOM',
		wp: 'wp',
	}
);

module.exports = externals;
