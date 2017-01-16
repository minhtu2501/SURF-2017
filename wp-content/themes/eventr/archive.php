<?php
/**
 * The template for displaying archive pages.
 *
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * @package eventr
 */

get_header("blog"); ?>


	<div class="container">
		<div class="row">
		

		<?php if ( have_posts() ) : ?>

			<!-- <div class="col-lg-12">
            	<div class="page-header">
					<?php
                        // the_archive_title( '<h2 class="page-title">', '</h2>' );
                        // the_archive_description( '<div class="taxonomy-description">', '</div>' );
                    ?>
                </div>
			</div> -->

			<div class="col-lg-9">
				<div class="breadcrumbs" typeof="BreadcrumbList" vocab="https://schema.org/">
	        <?php if(function_exists('bcn_display'))
	        {
	            bcn_display();
	        }?>
		    </div>
				<?php /* Start the Loop */ ?>
				<?php while ( have_posts() ) : the_post(); ?>
				
				<?php

					/*
					 * Include the Post-Format-specific template for the content.
					 * If you want to override this in a child theme, then include a file
					 * called content-___.php (where ___ is the Post Format name) and that will be used instead.
					 */
					get_template_part( 'template-parts/content', get_post_format() );
				?>

			<?php endwhile; ?>

			<?php the_posts_navigation(); ?>

		<?php else : ?>

			<?php get_template_part( 'template-parts/content', 'none' ); ?>

		<?php endif; ?>

		</div>
	

<?php get_sidebar(); ?>
</div>
</div>
<?php get_footer(); ?>
