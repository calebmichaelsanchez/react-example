// Plugins


//
// Functions

function popDribbble() {
    var $dribbble = $('#dribbble');
    var getDribbbles = {
        users: {
            underbelly: 'underbelly',
            anthony: 'alagoon',
            scrib: 'scribner',
            dax: 'daxhansen'
        },
        init: function(){
            getDribbbles.getData();
        },
        // getStats: function(){
        //     var players = ['alagoon', 'scribner', 'daxhansen', 'matt_royce', 'BrittanyJoBrown', 'aligdanger'];
        //     var likesCount = 0;

        //     for (var i = 0; i < players.length; i++) {
        //         $.ajax({
        //             url: 'http://api.dribbble.com/players/' + players[i],
        //             dataType: 'jsonp',
        //             success: function(data){
        //                 likesCount += data.likes_received_count;
        //                 console.log(likesCount);
        //                 $('#likesCount span').html(likesCount);
        //             }
        //         });
        //     }
        // },
        // buildStats: function(count) {
        //     console.log(count);
        // },
        getData: function(){
            var resultsAmt = 4;

            $.ajax({
                url: 'http://api.dribbble.com/players/underbelly/shots?per_page='+resultsAmt,
                dataType: 'jsonp',
                async: true,
                success: function(data){
                    var temp = '';
                    var shuffleArray = [];
                    for (var i = 0; i < resultsAmt; i++) {
                        shuffleArray.push(i);
                    }
                    function shuffle(o) {
                    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
                        return o;
                    };

                    shuffle(shuffleArray);

                    for (var i = 0; i < shuffleArray.length; i++) {

                        var random = shuffleArray[i];
                        var date = data.shots[i].created_at,
                            month = date.split('/')[1],
                            monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                            monString = monthArr[parseInt(month)-1],
                            day = date.split('/')[2].split(' ')[0],
                            title = data.shots[i].title;
                        temp += '<div class="shot">'+
                                    '<a href="'+data.shots[i].short_url+'" target="_blank">'+
                                        '<div class="date-stamp">'+
                                            '<div><strong class="title">'+title+'</strong> '+
                                            '<span class="month">'+monString+'</span> '+
                                            '<span class="day">'+day+'</span></div>'+
                                        '</div>'+
                                        '<img src="'+data.shots[i].image_url+'"/>'+
                                    '</a>'+
                                '</div>';
                    }

                    $dribbble.append(temp);

                    //getDribbbles.getStats();

                }
              });
        }
    }
    if($dribbble) {
        $(document).ready(function(){
            getDribbbles.init();
        });
        
    }
}

function setSlideWidth(){
    var windowWidth = window.innerWidth;
    if(window.isDesktop) {
        return (windowWidth/4);
    }
    else {
        return windowWidth;
    }
}

jQuery(document).ready(function(){
        if(window.isDesktop && window.isDesktop === true) {
             $(window).on('scroll', function(){
                //parallax('#fluid-hero .content-block', 0.6, 'up');
                //bgParallax('#fluid-hero', 0.4, 'down');
                //bgParallax('#fluid-app-icon', 0.4, 'down');
                scrollDarken('#featured .color-overlay');
            });
        }
        $('.top-bar').addClass('light');
        
        
        popDribbble();

        jQuery('.caseStudyLink').on('click', function(){
            var $this = $(this);
            var link = $this.data('href');
            console.log($this.data('href'));
            window.location = link;
            return false;
        });

        function homepageScroll() {
            if(window.isDesktop === true) {
                if($('header').hasClass('semi')) {
                    $('#work-header').addClass('fade');
                }
                else if (!$('header').hasClass('semi')) {
                    $('#work-header').removeClass('fade');
                }
            }
        }

        $(window).on('scroll', function() {
           window.requestAnimationFrame(homepageScroll);
        });
    });
