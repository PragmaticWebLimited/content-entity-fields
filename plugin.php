<?php
/**
 * Plugin Name: Content Entity Fields
 * Plugin URI: https://github.com/PragmaticWebLimited/content-entity-fields/
 * Description: TODO.
 * Author: Pragmatic Web Limited
 * Author URI: https://pragmatic.agency
 * Version: 0.1.0-dev
 * License: GPL-3.0-only
 * License URI: http://www.gnu.org/licenses/gpl-3.0.html
 * Text Domain: content-entity-fields
 */

declare( strict_types = 1 );

namespace Pragmatic\Content_Entity_Fields;

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

require_once __DIR__ . '/includes/functions.php';

add_action( 'plugins_loaded', __NAMESPACE__ . '\set_up' );
