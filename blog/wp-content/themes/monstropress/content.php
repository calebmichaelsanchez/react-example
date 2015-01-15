<?php
/**
 * The default template for displaying content. Used for both single and index/archive/search.
 *
 * @subpackage FoundationPress
 * @since FoundationPress 1.0
 */
?>
<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<div class="post-title">
		<h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
		<span class="post-date"><?php echo the_date(); ?></span>
	</div>
	<div class="entry-content">
		<?php the_excerpt(); ?> 
        <?php echo get_avatar( get_the_author_email(), '40' ); ?>
        <span class="author-name"><?php the_author(); ?></span>
	</div>
	<hr />
    <span class="hidden"><?php the_field('hero_image'); ?></span>
</article>
