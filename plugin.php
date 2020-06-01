<?php
/**
 * Plugin Name: Good Blocks
 * Description: Gutenberg Blocks for any Bootstrap based Theme.
 * Author: Hartsoft
 * Text Domain: good-blocks
 */

if ( ! defined( 'ABSPATH')) {
    exit;
}



function gb_blocks_register_block_type($block, $options = array()) {


    register_block_type(
        'gb/' . $block,
        array_merge(
            array(
                'editor_script' => 'gb-blocks-editor-script',
                'script' => 'gb-blocks-script',
                'editor_style' => 'gb-blocks-editor-style',
                'style' => 'gb-blocks-style'
            ),
            $options
        )
    );

}

function gb_blocks_register() {
    
    wp_register_script(
        'gb-blocks-editor-script',
        plugins_url('dist/editor.js', __FILE__),
        array('wp-blocks', 'wp-element', 'wp-editor', 'wp-components')
    );

    wp_register_script(
        'gb-blocks-script',
        plugins_url('dist/script.js', __FILE__),
        array('wp-blocks', 'wp-element', 'wp-editor', 'wp-components')
    );

    wp_register_style(
        'gb-blocks-editor-style',
        plugins_url('dist/editor.css', __FILE__),
        array()
    );

    wp_register_style(
        'gb-blocks-style',
        plugins_url('dist/style.css', __FILE__),
        array()
    );

    gb_blocks_register_block_type('hero-full-width');
    gb_blocks_register_block_type('image-and-copy');

}

add_action('init', 'gb_blocks_register');

function gb_blocks_category( $categories, $post ) {
	return array_merge(
		$categories,
		array(
			array(
				'slug' => 'good-blocks',
				'title' => __( 'Good Blocks', 'good-blocks' ),
			),
		)
	);
}
add_filter( 'block_categories', 'gb_blocks_category', 10, 2);
