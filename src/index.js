const { registerBlockType } = wp.blocks;

// Internal dependencies.
import * as textBlock from './text-block';

// Register CEF blocks.
[textBlock].forEach(({ name, settings }) => {
	registerBlockType(name, settings);
});
