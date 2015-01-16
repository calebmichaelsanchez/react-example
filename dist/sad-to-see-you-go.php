<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="format-detection" content="telephone=no">
    <title>Sad To See You Go | Underbelly Creative Co.</title>

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
  </head>
  <body id="questionnaire">
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

      
<?php

//validate
if ($_POST) {
  echo 'Sent';
//send confirmation email (or insert into database, etc...)
  $EmailTo = "hello@underbelly.is";
  $Subject = "Sad To See You Go";
  $timelyManner = Trim(stripslashes($_POST['timelyManner']));
  $needsAndObjectives = Trim(stripslashes($_POST['needsAndObjectives']));
  $budget = Trim(stripslashes($_POST['budget']));
  $competition = Trim(stripslashes($_POST['competition']));
  $timelines = Trim(stripslashes($_POST['timelines']));
  $firstContact = Trim(stripslashes($_POST['firstContact']));
  $primaryReason = Trim(stripslashes($_POST['primaryReason']));

  // prepare email body text
  $Body = "Sad to See You Go Email!";

  // send email
  // send email
  $success = mail($EmailTo, $Subject, $Body, "From: <$EmailFrom>");

  // redirect to success page
  if ($success){
    print "<meta http-equiv=\"refresh\" content=\"0;URL=/questionnaire-thanks.php\">";
  }
  else{
    print "<meta http-equiv=\"refresh\" content=\"0;URL=/questionnaire-error.php\">";
  }
}

?>

<main role="main" id="questionnaire-main">
  <div id="work-header">
    <h1 class="h2 text-center">Sad To See You Go</h1>
  </div>
  <div id="questionnaire-area" class="padding-xl">
    <form id="questionnaire-form" method="post" action="" data-abide>

      <div class="row">
        <div class="medium-12 columns">
          <label for="timelyManner">Did we respond in a timely manner?</label>
          <textarea rows="10" name="timelyManner" id="timelyManner" class="input-tall"> </textarea>
        </div>
      </div>

      <div class="row">
        <div class="medium-12 columns">
          <label for="needsAndObjectives">Did our proposal reflect a correct understanding of your needs and objectives?</label>
          <textarea rows="10" name="needsAndObjectives" id="needsAndObjectives" class="input-tall"> </textarea>
        </div>
      </div>

      <div class="row">
        <div class="medium-12 columns">
          <label for="budget">Did our bid fall within your budget?</label>
          <textarea rows="10" name="budget" id="budget" class="input-tall"> </textarea>
        </div>
      </div>

      <div class="row">
        <div class="medium-12 columns">
          <label for="competition">If you contacted multiple design firms for this project, was our quote competitive?</label>
          <textarea rows="10" name="competition" id="competition" class="input-tall"> </textarea>
        </div>
      </div>

      <div class="row">
        <div class="medium-12 columns">
          <label for="timelines">Did our proposed timelines for this project meet your needs?</label>
          <textarea rows="10" name="timelines" id="timelines" class="input-tall"> </textarea>
        </div>
      </div>

      <div class="row">
        <div class="medium-12 columns">
          <label for="firstContact">How did you first come to contact Underbelly for this project?</label>
          <textarea rows="10" name="firstContact" id="firstContact" class="input-tall"> </textarea>
        </div>
      </div>

      <div class="row">
        <div class="medium-12 columns">
          <label for="primaryReason">If you had to name just one, what is the primary reason you decided not to partner with Underbelly for this project?</label>
          <textarea rows="10" name="primaryReason" id="primaryReason" class="input-tall"> </textarea>
        </div>
      </div>

      <div class="row">
          <div class="medium-12 columns">
              <button type="submit" name="submit" value="Submit" class="submit-button button radius" />Submit</button>
          </div>
      </div>

    </form>
    <div style="clear: both;"></div>
    </div>
</main>

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
<script>

//keep the enter key from submitting form
function stopRKey(evt) {
  var evt = (evt) ? evt : ((event) ? event : null);
  var node = (evt.target) ? evt.target : ((evt.srcElement) ? evt.srcElement : null);
  if ((evt.keyCode == 13) && (node.type=="text"))  {return false;}
}

document.onkeypress = stopRKey;

function submitQuestionnaire() {
  $("#questionnaire-form").validate({
    errorElement: 'em',
    submitHandler: function() {
      //submit the form
      $("#questionnaire-form").fadeOut(300).reset; //reset fields
      document.body.scrollTop = document.documentElement.scrollTop = 0;
      $(this).blur();

      $.post("<?php echo $_SERVER[PHP_SELF]; ?>", //post
        $("#contact-us").serialize(),
        function(data){
          var dataStr = data.replace(/(^\s+|\s+$)/g,'');
          //if message is sent
        if (dataStr === 'Sent') {

          $('#sending').fadeOut(300);

          alert('Great work! Thanks');

        }
        else {
          setTimeout(function(){
            $("#failed").fadeIn(600); //show confirmation message
          }, 1600);
        }
      });
      return false; //don't let the page refresh on submit.
    }
  }); //validate the form
}
$('#submit').on('click', function(e){
  submitQuestionnaire();

  $(this).blur();
});
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
    </div>
  </body>
</html>
