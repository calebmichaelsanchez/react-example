(function($) {
   
    $(document).ready(function(){

        function scrollHeroContent($el, $old, $new){
            var current = $el.find('.hero-content'),
                prev = $('#heroSlide' + ($old+1)).find('.hero-content');

            $el.find('.hero-content').addClass('scroll-in');
            if(prev.hasClass('scroll-in')) {
                prev.removeClass('scroll-in').addClass('scroll-out');
                setTimeout(function(){
                    prev.removeClass('scroll-out');
                }, 800);
            }
        }

        function loadedPage() {
            $('#loading').fadeOut();
            $('.pace').fadeOut();
            $('body').addClass('pace-done');
        }
        //in case pace fails
        setTimeout(function(){
            loadedPage();
        }, 4000);
    });

    function homepageScroll() {
        if(window.isDesktop === true) {
            parallax('#landingHero .hero-background', '0.5', 'down');
            parallax('#hero-icons', '0.2', 'down');
            parallax('#team-photos', '0.1', 'up', 'margin');
        }
    }

    $(window).on('scroll', function() {
       window.requestAnimationFrame(homepageScroll);
    });



    function showTeam() {
        $('#teamPhotoImg').html('<img src="/assets/img/team-photos.png" alt="">');
    }

    $(document).on('ready', function(){
        showTeam();
    });

    $('#egg').on('click', function(e){
        e.preventDefault();
        
        var $img = $('#team-photos img');

        if(!$img.hasClass('ugly')) {
            $img.addClass('ugly').attr('src', '/assets/img/team-photos_x.png');
        }
        else if($img.hasClass('ugly')) {
            $img.removeClass('ugly').attr('src', '/assets/img/team-photos.png');
        }
    });


    $('#homepage-logos').bxSlider({
        slideSelector: '.logo-slide',
        pager: false,
        controls: true,
        slideWidth: 150,
        slideMargin: 10,
        minSlides: 1,
        maxSlides: 7
    });

    
    
}(jQuery));

