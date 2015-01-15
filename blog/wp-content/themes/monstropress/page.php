<?php get_header(); ?>
<main class="blog-page">
	<div class="row">
		<div class="medium-8 medium-offset-2 columns">
		<?php while (have_posts()) : the_post(); ?>
			<article <?php post_class() ?> id="post-<?php the_ID(); ?>">
				<div class="header">
					<h1 class="h2 entry-title"><?php the_title(); ?></h1>
				</div>
				<div class="entry-content">
					<?php the_content(); ?>
				</div>
			</article>
		<?php endwhile;?>
		
		</div>
	</div>
</main>
		
<?php get_footer(); ?>