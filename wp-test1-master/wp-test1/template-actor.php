<?php
/**
 * The template for displaying all pages.
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 * 
 * Template Name: Actor
 *
 * @link    https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Shapely
 */



;





wp_enqueue_script( 'index.js', get_stylesheet_directory_uri() . '/index.js', array( 'jquery' ) );

get_header(); ?>
<?php $layout_class = shapely_get_layout_class(); ?>
	<div class="row">
		<div class="col-sm-12">
			<div id="here">
				<ul id="place"></ul>

			</div>
		</div>
	</div>
<?php
get_footer();
