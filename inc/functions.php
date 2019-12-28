<?php
/**
 * Content Entity Fields loader.
 */

declare( strict_types = 1 );

namespace Pragmatic\Content_Entity_Fields;

use Pragmatic\Content_Entity_Fields\Asset_Loader;

/**
 * Set up plugin.
 *
 * Register actions and filters.
 */
function init_plugin() : void {
	\add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\enqueue_block_editor_assets' );
	\add_action( 'init', __NAMESPACE__ . '\helloworld' );
}

/**
 * Enqueue the JS and CSS for blocks in the editor.
 */
function enqueue_block_editor_assets() : void {
  Asset_Loader\autoregister(
    dirname( __DIR__ ) . '/dist/asset-manifest.json',
    'meow.js',
    [
			'scripts' => [ 'wp-blocks', 'wp-i18n', 'wp-element' ],
			'styles'  => [ 'wp-edit-blocks' ],
      'handle'  => 'cef-meow',
    ]
  );
}

function helloworld() : void {
	\wp_set_script_translations( 'cef-meow', 'content-entity-fields' );

	\register_block_type( 'cgb/block-my-block', array(
		'editor_script' => 'cef-meow',
		'editor_style'  => 'cef-meow',
	) );
}
