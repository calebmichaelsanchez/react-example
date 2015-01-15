
<?php  

//validate 
if ($_POST) { 
    echo 'Sent';
//send confirmation email (or insert into database, etc...) 
    $EmailTo = "hello@underbelly.is";
    $Subvert = $_POST['lastname'];
    $Subject = "Contact from Underbelly.is";
    $Name = Trim(stripslashes($_POST['name'])); 
    $Email = Trim(stripslashes($_POST['email'])); 
    $Selection = Trim(stripslashes($_POST['selection'])); 
    $Budget = Trim(stripslashes($_POST['budget']));
    $Details = Trim(stripslashes($_POST['details']));


    // prepare email body text
    $Body = "";
    $Body .= "My name is ";
    $Body .= $Name;
    $Body .= "\n";
    $Body .= " My email address is";
    $Body .= $Email;
    $Body .= "\n";
    $Body .= " I'd like to talk about ";
    $Body .= $Selection;
    $Body .= "\n";
    $Body .= " My budget is ";
    $Body .= $Budget;
    $Body .= "\n";
    $Body .= " Here are some details: ";
    $Body .= $Details;
    $Body .= "\n";
    
    if(empty($Subvert)) {
        // send email 
        mail($EmailTo, $Subject, $Body, "From: <$Email>");
        die;  
    }
    else {
        print "<meta http-equiv=\"refresh\" content=\"0;URL=../contact.html\">";
    }
} 

?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="format-detection" content="telephone=no">
    <title>Contact us | Underbelly Creative Co.</title>

    <link href="/assets/css/styles.css" rel="stylesheet">
    <link rel="icon" href="/favicon.ico" type="image/x-icon">
    
    <script type="text/javascript">
      (function(d) {
        var config = {
          kitId: 'fsw1llh',
          scriptTimeout: 3000
        },
        h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='//use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
      })(document);
    </script>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
    <script type='text/javascript'>
// (function (d, t) {
//  var bh = d.createElement(t), s = d.getElementsByTagName(t)[0];
//  bh.type = 'text/javascript';
//  bh.src = '//www.bugherd.com/sidebarv2.js?apikey=ystydn4o0hzjffqlj63mzw';
//  s.parentNode.insertBefore(bh, s);
//  })(document, 'script');
</script>

  </head>
  <body id="contact">
    <div id="pollMQ"></div>
    <div class="l-wrapper">
    
<header class="sticky" >
    <nav class="top-bar light" data-topbar data-options="sticky_on: large">
     <ul class="title-area">
       <li class="name">
         <a href="/" id="brand"></a>
       </li>
       <li class="toggle-topbar menu-icon"><a href="#"></a></li>
        <a class="contact-icon icon-airplane" href="/all-ears/"></a>
     </ul>
     <section class="top-bar-section">
       <ul class="right">
          <li class="hidden"><a href="/here/" class="col-1-5"><span>Home</span></a></li>
          <li><a href="/making-it-awesome/" class="col-1-5 link"><span>Work</span></a></li>
          <!-- <li><a href="#about" class="col-1-5 link scrollto"><span>About</span></a></li> -->
          <li><a href="/rambling/" class="col-1-5 link"><span>Journal</span></a></li>
          <li><a href="/peddling/" class="col-1-5 link"><span>Shop</span></a></li>
          <li><a href="/all-ears/" class="col-1-5" id="contactLink"><span>Contact</span></a></li>
       </ul>
     </section>
    </nav>
</header>



      
<div id="fb-root"></div>
<script>
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
</script>

<main role="main">
    <div id="contactForm" class="container">
        <div class="row content-wrap">
            <div id="contactWrap" class="medium-8 medium-offset-2 center-block shrink">
                <div>
                    
                    <form id="contact-us" method="post" action="" data-abide>
                        <legend class="h3">Contact Us</legend>
                        <br/>
                        <fieldset>
                            <div class="row">
                                <label for="name" class="inline">Hi! My name is </label>
                                <span class="input">
                                    <input type="text" id="name" name="name" placeholder="your name" required>
                                </span>
                                <div id="subversion">
                                    <label for="lastname">Leave this blank</label>
                                    <span class="input">
                                        <input type="text" id="lastname">
                                    </span>
                                </div>
                            </div>
                            <div class="row">
                                <label for="email" class="inline">My email address is </label>
                                <span class="input">
                                    <input type="email" id="email" name="email" placeholder="your email" required>
                                </span>
                            </div>
                            <div class="row">
                                <label for="project" class="inline">I'd like to talk about </label>
                                <span class="select">
                                    <select name="selection">
                                        <option value="General Project">a general project.</option>
                                        <option value="Branding">building a brand.</option>
                                        <option value="UX-UI">UX/UI design.</option>
                                        <option value="Therapy">my feelings.</option>
                                    </select>
                                </span>
                                <span class="underline"></span>
                            </div>
                            <div class="row">
                                <label for="budget" class="inline">My budget is </label>
                                <span class="select">
                                    <select name="budget">
                                        <option value="Not Specified">still being worked out.</option>
                                        <option value="$2,000 - $5,000">$2,000 - $5,000</option>
                                        <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                                        <option value="$10,000 - $20,000">$10,000 - $20,000</option>
                                        <option value="$20,000+">$20,000+</option>
                                    </select>
                                </span>
                                <span class="underline"></span>
                            </div>
                            <div class="row">
                                <label for="details" class="block">Here's a bit about my project</label>
                                <textarea id="details" name="details" rows="5"></textarea>
                            </div>
                        </fieldset>
                        <div class="text-center">
                            <button id="submit" href="#!" class="button button-large radius" type="submit">Let's do this</button>
                        </div>
                    </form>

                    <div id="sending">
                        <img id="sending-png" src="/assets/img/sending-01.png" alt="">
                    </div>
                    <div id="failed">
                        Something's wrong, try <a href="mailto:hello@underbelly.co">emailing us</a> instead.
                    </div>
                </div>

            </div><!-- /contactWrap -->
            <div id="message" class="initial">
                <div class="center-block">
                    <div id="sent-check" class="center-block">
                        <span class="icon-check"></span>
                    </div>
                    <span id="sent-message" class="h3">Sent!</span>
                </div>
                <a id="facebook-wrap" class="left">
                    <span class="social-circle">
                        <i class="icon-facebook"></i>
                        <span id="facebookLike">
                            <div class="fb-like" data-href="https://www.facebook.com/UnderbellyCreative" data-layout="button" data-action="like" data-show-faces="false" data-share="false"></div>
                        </span>
                    </span>
                </a>
                <div id="twitter-wrap" class="right">
                    <span class="social-circle">
                        <i class="icon-twitter"></i>
                        <span id="twitterFollow">
                            <a href="https://twitter.com/underbelly" class="twitter-follow-button" data-show-count="false" data-lang="en" data-width="100px">Follow @underbelly</a>
                        <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
                        </span>

                    </span>

                </div>
            </div>
        </div>
        <div class="row">
            <div id="contact-card" class="initial">
                <div class="row">
                    <div class="medium-5 columns"><i class="icon-telephone"></i>801-770-0830</div>
                    <div class="medium-7 columns"><i class="icon-mail"></i>hello@underbelly.is</div>
                </div>
                <div class="row">
                    <div class="large-12 columns">
                        <i class="icon-home"></i>378 W Broadway #3, Salt Lake City, UT 84101
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
<script>
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

</script>
<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="/assets/js/foundation.min.js"></script>
    <script src="/assets/js/plugins.min.js"></script>

    <script src="/assets/js/global.min.js"></script>
    <script>
      $(document).foundation({
        topbar: {
            sticky_class: 'sticky',
            scrolltop: false
        },
        abide: {
            live_validate : true,
            focus_on_invalid : true,
            error_labels: true
        }
      });
    </script>
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-43535207-1', 'auto');
  ga('send', 'pageview');

</script>

    

<footer id="footer">
    <div class="row">
        <div class="medium-3 columns">
            <span class="icon-underbelly"></span>
            <span class="copyright">&copy;</span>
        </div>
        <div class="medium-6 columns right">
            <div class="right">
                <a href="http://www.twitter.com/underbelly" class="social icon-twitter" target="_blank"></a>
                <a href="http://www.instagram.com/underbelly" class="social icon-instagram" target="_blank"></a>
                <a href="http://www.dribbble.com/underbelly" class="social icon-dribbble" target="_blank"></a>
                <a href="/all-ears/" class="button small radius">Contact</a>
            </div>
        </div>
        
    </div>
    
</footer>
    </div><!-- /.l-wrapper -->
    

    
    </body>
</html>
