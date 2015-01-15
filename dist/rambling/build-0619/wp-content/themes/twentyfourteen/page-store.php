<?php
/*
    Template Name: Store Page
*/
?>
<?php get_header(); ?>
<main id="store-page">
    <div id="store-header">
        <h1 class="h2 text-center">Our Store</h1>
    </div>
    <?php while (have_posts()) : the_post(); ?>
    <div class="row">
        <?php the_content(); ?>
    </div>
    <?php endwhile;?>
</main>
<?php get_footer(); ?>

<script>
    $(document).on('ready', function(){
        $('.top-bar').addClass('light');
        var $price = $('.store-price .price'); 

        $price.each(function(i){
            var $priceString = $.trim($(this).html());
            if ($priceString === '$0.00') {
                $(this).html('Free');
            }
        });

        function storeScroll() {
            if(window.isDesktop === true) {
                if($('header').hasClass('semi')) {
                    $('#store-header').addClass('fade');
                }
                else if (!$('header').hasClass('semi')) {
                    $('#store-header').removeClass('fade');
                }
            }
        }

        $(window).on('scroll', function() {
          storeScroll();
        });

    });
</script>