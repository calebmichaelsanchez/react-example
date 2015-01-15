<?php
/**
 * The template for displaying the footer
 *
 * Contains footer content and the closing of the #main and #page div elements.
 *
 * @package WordPress
 * @subpackage Twenty_Fourteen
 * @since Twenty Fourteen 1.0
 */
?>


</main>

    <footer id="footer">
    <div class="row">
        <div class="medium-3 columns">
            <span class="icon-underbelly"></span>
            <span class="copyright">&copy;</span>
        </div>
        <div class="medium-6 columns right">
            <div class="right">
                <a href="http://www.twitter.com/underbelly" class="social icon-twitter"></a>
                <a href="http://www.instagram.com/underbelly" class="social icon-instagram"></a>
                <a href="http://www.dribbble.com/underbelly" class="social icon-dribbble"></a>
                <a href="/all-ears/" class="button small radius">Contact</a>
            </div>
        </div>
        
    </div>
    
</footer>
    </div>
<?php wp_footer(); ?>

<script src="http://localhost:8888/assets/js/foundation.min.js"></script>
<script src="http://localhost:8888/assets/js/plugins.min.js"></script>
<script src="http://localhost:8888/assets/js/global.min.js"></script>

<script>
jQuery(document).ready(function() { 
    var $blogHero = $('#blog-hero'),
        $navbar = $('nav.top-bar');

    if($blogHero.hasClass('dark')) {
        $navbar.removeClass('light').addClass('dark');
    }
    else if($blogHero.hasClass('light')) {
        $navbar.removeClass('dark').addClass('light');
    }

    $(window).on('scroll', function(){

        if($blogHero){
            //bgParallax('#blog-hero', 0.5, 'up');
        }

    });
    
    $(document).foundation({
        topbar: {
            sticky_class: 'sticky',
            scrolltop: false
        }
    });
    
    if($('#infinite')) {
        jQuery('#infinite').infinitescroll({
            debug: false,
            nextSelector: "#infinite ul.pagination li a.next",
            navSelector: ".pagination",
            itemSelector: ".post"
        });
    }
});
</script>




	<?php wp_footer(); ?>
</body>
</html>