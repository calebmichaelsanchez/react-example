
<?php get_header(); ?>
<?php while (have_posts()) : the_post(); ?>

	<main class="post-single">
        <?php if( get_field('hero_image') ): ?>
        
            <style>
                #blog-hero {
                    background-image: url(<?php the_field('hero_image'); ?>);
                }
            </style>
        <?php endif; ?>
            <div id="blog-hero"  class="<?php the_field('theme'); ?>">
                <div class="row">
                    <div class="large-9 columns">
                        <h1 class="h2 entry-title"><?php the_title(); ?></h1>
                        <h6 class="entry-tagline"><?php the_excerpt(); ?></h6>

                        <?php echo get_avatar( get_the_author_email(), '40' ); ?>
                        <a class="author-name" href="<?php echo get_usermeta($post->post_author,'user_url'); ?>" target="_blank"><?php the_author(); ?></a>
                        <span class="post-date"><?php echo the_date(); ?></span>
                    </div>
                </div>
            </div>
        
		<div class="row">
	<div class="medium-8 medium-offset-2 columns">
	
		<article <?php post_class() ?> id="post-<?php the_ID(); ?>">

			<div class="entry-content">
				<?php the_content(); ?>
			</div>

		</article>
        <div class="navigation">
            <div class="left">
            <?php previous_post(' %',
             ' Previous ', 'no'); ?>
            </div>
            <div class="right">
            <?php next_post('% ',
             'Next ', 'no'); ?>
            </div>
        </div> <!-- end navigation -->


	</div>
<?php endwhile;?>
		
<?php get_footer(); ?>
