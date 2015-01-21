<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="format-detection" content="telephone=no">
    <title>Honored to Work With You | Underbelly Creative Co.</title>

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
  $EmailTo = "riley@underbelly.is";
  $Subject = "Honored To Work With You";
  $timelyManner = Trim(stripslashes($_POST['timelyManner']));
  $timelyMannerMore = ($_POST['timelyMannerMore'] == '') ? "No reason given." : $_POST['timelyMannerMore'];
  $satisfaction = Trim(stripslashes($_POST['satisfaction']));
  $timeSatisfaction = Trim(stripslashes($_POST['timeSatisfaction']));
  $reasoning = Trim(stripslashes($_POST['reasoning']));
  $reasoningMore = (empty($_POST['reasoningMore'])) ? "No reason given." : $_POST['reasoningMore'];
  $objectives = Trim(stripslashes($_POST['objectives']));
  $objectivesMore = (empty($_POST['objectivesMore'])) ? "No reason given." : $_POST['objectivesMore'];
  $futureProjects = Trim(stripslashes($_POST['futureProjects']));
  $recommend = Trim(stripslashes($_POST['recommend']));
  $whatElse = Trim(stripslashes($_POST['whatElse']));

  // prepare email body text
  $Body = "";
  $Body .= "Did we respond to your feedback in a timely manner?";
  $Body .= "\n";

  if ($timelyManner == "No") {
    $Body .= $timelyManner;
    $Body .= ", ";
    $Body .= $timelyMannerMore;
  } else {
    $Body .= $timelyManner;
  }

  $Body .= "\n\n";
  $Body .= "How satisfied are you with the design of the finished product?";
  $Body .= "\n";
  $Body .= $satisfaction;
  $Body .= "\n\n";
  $Body .= "How satisfied are you with the time it took to complete the project?";
  $Body .= "\n";
  $Body .= $timesSatisfaction;
  $Body .= "\n\n";
  $Body .= "Did we provide clear enough reasoning for our design choices?";
  $Body .= "\n";

  if ($reasoning == "No") {
    $Body .= $reasoning;
    $Body .= ", ";
    $Body .= $reasoningMore;
  } else {
    $Body .= $reasoning;
  }

  $Body .= "\n\n";
  $Body .= "Does the finished product meet your objectives?";
  $Body .= "\n";

  if ($objectives == "No") {
    $Body .= $objectives;
    $Body .= ", ";
    $Body .= $objectivesMore;
  } else {
    $Body .= $objectives;
  }

  $Body .= "\n\n";
  $Body .= "How likely are you to choose Underbelly for a future project?";
  $Body .= "\n";
  $Body .= $futureProjects;
  $Body .= "\n\n";
  $Body .= "How likely are you to recommend Underbelly to someone else?";
  $Body .= "\n";
  $Body .= $recommend;
  $Body .= "\n\n";
  $Body .= "What could we have done, if anything, to leave you feeling more satisfied with the finished product?";
  $Body .= "\n";
  $Body .= $whatElse;
  $Body .= "\n\n";

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
    <h1 class="h2 text-center">Honored To Work With You</h1>
  </div>
  <div id="questionnaire-area" class="padding-xl">
    <form id="questionnaire-form" method="post" action="" data-abide>

      <div class="row">
        <div class="large-12 columns">
          <label class="mb">Did we respond to your feedback in a timely manner?</label>
          <input type="radio" name="timelyManner" class="timelyManner" value="Yes" id="timelyMannerYes"><label for="timelyMannerYes">Yes</label>
          <input type="radio" name="timelyManner" class="timelyManner" value="No" id="timelyMannerNo"><label for="timelyMannerNo">No</label>
        </div>
      </div>

      <div class="timelyManner-more">
        <div class="row">
          <div class="large-12 columns">
            <label class="mb" for="timelyMannerMore">What could we have done better?</label>
            <textarea rows="10" name="timelyMannerMore" id="timelyMannerMore" class="input-tall"> </textarea>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="large-12 columns">
          <label class="mt- mb">How satisfied are you with the design of the finished product?</label>
          <input type="radio" name="satisfaction" value="1" id="satisfactionOne"><label for="satisfactionOne">1</label>
          <input type="radio" name="satisfaction" value="2" id="satisfactionTwo"><label for="satisfactionTwo">2</label>
          <input type="radio" name="satisfaction" value="3" id="satisfactionThree"><label for="satisfactionThree">3</label>
          <input type="radio" name="satisfaction" value="4" id="satisfactionFour"><label for="satisfactionFour">4</label>
          <input type="radio" name="satisfaction" value="5" id="satisfactionFive"><label for="satisfactionFive">5</label>
        </div>
      </div>

      <div class="row">
        <div class="large-12 columns">
          <label class="mt- mb">How satisfied are you with the time it took to complete the project?</label>
          <input type="radio" name="timeSatisfaction" value="1" id="timeSatisfactionOne"><label for="timeSatisfactionOne">1</label>
          <input type="radio" name="timeSatisfaction" value="2" id="timeSatisfactionTwo"><label for="timeSatisfactionTwo">2</label>
          <input type="radio" name="timeSatisfaction" value="3" id="timeSatisfactionThree"><label for="timeSatisfactionThree">3</label>
          <input type="radio" name="timeSatisfaction" value="4" id="timeSatisfactionFour"><label for="timeSatisfactionFour">4</label>
          <input type="radio" name="timeSatisfaction" value="5" id="timeSatisfactionFive"><label for="timeSatisfactionFive">5</label>
        </div>
      </div>

      <div class="row">
        <div class="large-12 columns">
          <label class="mt- mb">Did we provide clear enough reasoning for our design choices?</label>
          <input type="radio" name="reasoning" class="reasoning" value="Yes" id="reasoningYes"><label for="reasoningYes">Yes</label>
          <input type="radio" name="reasoning" class="reasoning" value="No" id="reasoningNo"><label for="reasoningNo">No</label>
        </div>
      </div>

      <div class="reasoning-more">
        <div class="row">
          <div class="large-12 columns">
            <label class="mb" for="reasoningMore">What could we have done better?</label>
            <textarea rows="10" name="reasoningMore" id="reasoningMore" class="input-tall"> </textarea>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="large-12 columns">
          <label class="mt- mb">Does the finished product meet your objectives?</label>
          <input type="radio" name="objectives" class="objectives" value="Yes" id="objectivesYes"><label for="objectivesYes">Yes</label>
          <input type="radio" name="objectives" class="objectives" value="No" id="objectivesNo"><label for="objectivesNo">No</label>
        </div>
      </div>

      <div class="objectives-more">
        <div class="row">
          <div class="large-12 columns">
            <label class="mb" for="objectivesMore">What could we have done better?</label>
            <textarea rows="10" name="objectivesMore" id="objectivesMore" class="input-tall"> </textarea>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="large-12 columns">
          <label class="mt- mb">How likely are you to choose Underbelly for a future project?</label>
          <input type="radio" name="futureProjects" value="1" id="futureProjectsOne"><label for="futureProjectsOne">1</label>
          <input type="radio" name="futureProjects" value="2" id="futureProjectsTwo"><label for="futureProjectsTwo">2</label>
          <input type="radio" name="futureProjects" value="3" id="futureProjectsThree"><label for="futureProjectsThree">3</label>
          <input type="radio" name="futureProjects" value="4" id="futureProjectsFour"><label for="futureProjectsFour">4</label>
          <input type="radio" name="futureProjects" value="5" id="futureProjectsFive"><label for="futureProjectsFive">5</label>
        </div>
      </div>

      <div class="row">
        <div class="large-12 columns">
          <label class="mt- mb">How likely are you to recommend Underbelly to someone else?</label>
          <input type="radio" name="recommend" value="1" id="recommendOne"><label for="recommendOne">1</label>
          <input type="radio" name="recommend" value="2" id="recommendTwo"><label for="recommendTwo">2</label>
          <input type="radio" name="recommend" value="3" id="recommendThree"><label for="recommendThree">3</label>
          <input type="radio" name="recommend" value="4" id="recommendFour"><label for="recommendFour">4</label>
          <input type="radio" name="recommend" value="5" id="recommendFive"><label for="recommendFive">5</label>
        </div>
      </div>

      <div class="row">
        <div class="medium-12 columns">
          <label for="whatElse" class="mt- mb">What could we have done, if anything, to leave you feeling more satisfied with the finished product?</label>
          <textarea rows="10" name="whatElse" id="whatElse" class="input-tall"> </textarea>
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

function radioToggle(title) {
  if ($("input[name=" + title + "]:checked").val() == "No") {
    $("." + title + "-more").slideDown("slow");
  } else {
    $("." + title + "-more").slideUp("slow");
  }
}

$(".objectives-more, .timelyManner-more, .reasoning-more").css("display","none");
$(".objectives").click(function() { radioToggle('objectives');});
$(".reasoning").click(function() { radioToggle('reasoning');});
$(".timelyManner").click(function() { radioToggle('timelyManner');});

function submitQuestionnaire() {
  $("#questionnaire-form").validate({
    errorElement: 'em',
    submitHandler: function() {
      //submit the form
      $("#questionnaire-form").fadeOut(300).reset;
      document.body.scrollTop = document.documentElement.scrollTop = 0;
      $(this).blur();

      $.post("<?php echo $_SERVER[PHP_SELF]; ?>",
        $("#contact-us").serialize(),
        function(data){
          var dataStr = data.replace(/(^\s+|\s+$)/g,'');
        if (dataStr === 'Sent') {
          $('#sending').fadeOut(300);
          alert('Great work! Thanks');
        }
        else {
          setTimeout(function(){
            $("#failed").fadeIn(600);
          }, 1600);
        }
      });
      return false;
    }
  });
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
