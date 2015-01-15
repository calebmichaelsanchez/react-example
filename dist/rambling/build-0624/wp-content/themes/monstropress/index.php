<?php get_header(); ?>
	<div id="blog-hero" style="background-image: url('<?php the_field('hero_image'); ?>')" class="<?php the_field('theme'); ?>">
		<div class="row">
			<div class="large-9 columns">
				<h1 class="h2 entry-title">News</h1>
				<h6 class="entry-tagline">Musings, Tall-tales and Yarns</h6>
			</div>
		</div>
	</div>
<main id="blog" role="main">
  <div class="row">
	<div id="infinite" class="medium-8 medium-offset-2 columns">
	<?php if ( have_posts() ) : ?>
	
		<?php while ( have_posts() ) : the_post(); ?>
			<?php get_template_part( 'content', get_post_format() ); ?>
		<?php endwhile; ?>
		
		<?php else : ?>
			<?php get_template_part( 'content', 'none' ); ?>
		
	<?php endif;?>
	
	<?php if ( function_exists('FoundationPress_pagination') ) { FoundationPress_pagination(); } else if ( is_paged() ) { ?>
		<nav id="post-nav">
			<div class="post-previous"><?php next_posts_link( __( '&larr; Older posts', 'FoundationPress' ) ); ?></div>
			<div class="post-next"><?php previous_posts_link( __( 'Newer posts &rarr;', 'FoundationPress' ) ); ?></div>
		</nav>
	<?php } ?>

	</div>

<?php get_footer(); ?>
