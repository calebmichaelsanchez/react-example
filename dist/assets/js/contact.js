$(document).ready(function() {
    function successAnimations() {
        setTimeout(function(){
            $("#message").removeClass('initial').fadeIn(); //show confirmation message
        }, 1200);
        setTimeout(function(){
            $('#contactWrap').addClass('shrink');
        },400);
        setTimeout(function(){
            $('#contactWrap').hide();
        }, 700);
        setTimeout(function(){
            $('#message').addClass('loaded')
        }, 2000);
    }

    function googleContactEvent() {
        ga('send', {
          'hitType': 'event',
          'eventCategory': 'form_submit',
          'eventAction': 'form_success',
          'eventLabel': 'contact_us',
          'eventValue': 4
        });
    }

    function submitContactForm() {
        $("#contact-us").validate({
            errorElement: 'em',
            submitHandler: function() {
                //submit the form
                $("#contact-us").fadeOut(300).reset; //reset fields
                document.body.scrollTop = document.documentElement.scrollTop = 0;
                $(this).blur();
                setTimeout(function(){
                    $('#sending').fadeIn(300);
                },300);
                
                if($('#lastname').val()) {
                    //Bot fake out
                    $("#contact-us").fadeOut(600).reset; //reset fields
                    setTimeout(function(){
                        $("#message").fadeIn(600); //show confirmation message
                    }, 600);
                    return false;
                }
                else {
                    $.post("<?php echo $_SERVER[PHP_SELF]; ?>", //post
                        $("#contact-us").serialize(), 
                        function(data){
                            var dataStr = data.replace(/(^\s+|\s+$)/g,'');
                          //if message is sent
                        if (dataStr == 'Sent') {

                            $('#sending').fadeOut(300);
                            
                            successAnimations();
                            googleContactEvent();

                        }
                        else {
                            setTimeout(function(){
                                $("#failed").fadeIn(600); //show confirmation message
                            }, 1600);
                        }
                    });
                    return false; //don't let the page refresh on submit.
                }
            }
        }); //validate the form
    }    
    $('#submit').on('click', function(e){
        submitContactForm();
        
        $(this).blur();
    });
    
});
$(window).on('load', function(){
    setTimeout(function(){
        $('#contactWrap').removeClass('shrink');
        $('#contact-card').removeClass('initial');
    }, 700);
    

});