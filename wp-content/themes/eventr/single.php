<?php
/**
 * The template for displaying all single posts.
 *
 * @package eventr
 */

get_header("blog"); ?>

	<div class="container">
		<div class="row">
		<div class="col-lg-9">
			<div class="breadcrumbs" typeof="BreadcrumbList" vocab="https://schema.org/">
        <?php if(function_exists('bcn_display'))
        {
            bcn_display();
        }?>
	    </div>
			<?php while ( have_posts() ) : the_post(); ?>

			<?php get_template_part( 'template-parts/content', 'single' ); ?>

			<?php the_post_navigation(); ?>

			<?php
				// If comments are open or we have at least one comment, load up the comment template.
				if ( comments_open() || get_comments_number() ) :
					comments_template();
				endif;
			?>

		<?php endwhile; // End of the loop. ?>

		</div>
	 

<?php get_sidebar(); ?>
</div>
</div>
<?php get_footer(); ?>
