<?php get_header(); ?>

<main id="four-oh-four">
    <div id="video-bg">
        <video autoplay loop poster="/assets/video/404.jpg" id="bgvid">
            <source src="/assets/video/404.webm" type="video/webm">
            <source src="/assets/video/404.mp4" type="video/mp4">
            <source src="/assets/video/404.ogv" type="video/ogv">
        </video>
    </div>
    <div class="content-wrap">
        <div id="compass-404"></div>
        <div class="message text-center">
            <span class="h4 text-white">
                404! You've gone adrift!
            </span>
            <div>
                <a href="/" class="pill-btn dark hollow">Go Home</a>
            </div>
        </div>
    </div>
</main>

<script>
jQuery(document).on('ready', function(){
    jQuery('.top-bar').addClass('light');
});
</script>
		
<?php get_footer(); ?>