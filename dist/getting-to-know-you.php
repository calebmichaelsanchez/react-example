<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="format-detection" content="telephone=no">
    <title>Identity Questionnaire | Underbelly Creative Co.</title>

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
    $Subvert = $_POST['lastname'];
    $Subject = "Questionnaire from Underbelly.is";
    $firstName = Trim(stripslashes($_POST['firstName']));
    $lastName = Trim(stripslashes($_POST['lastName']));
    $email = Trim(stripslashes($_POST['email']));
    $company = Trim(stripslashes($_POST['company']));
    $website = Trim(stripslashes($_POST['website']));
    $age = Trim(stripslashes($_POST['age']));
    $services = Trim(stripslashes($_POST['services']));
    $customer = Trim(stripslashes($_POST['customer']));
    $competitors = Trim(stripslashes($_POST['competitors']));
    $competition = Trim(stripslashes($_POST['competition']));
    $timeframe = Trim(stripslashes($_POST['timeframe']));
    $logo1 = Trim(stripslashes($_POST['logo-1']));
    $logo2 = Trim(stripslashes($_POST['logo-2']));
    $logo3 = Trim(stripslashes($_POST['logo-3']));
    $logo4 = Trim(stripslashes($_POST['logo-4']));
    $stationery = Trim(stripslashes($_POST['stationery']));
    $budget = Trim(stripslashes($_POST['budget']));
    $anythingElse = Trim(stripslashes($_POST['anythingElse']));


    // prepare email body text
    $Body = "";
    $Body .= "Name: ";
    $Body .= "\n";
    $Body .= $firstName;
    $Body .= " ";
    $Body .= $lastName;
    $Body .= "\n\n";
    $Body .= "Email: ";
    $Body .= "\n";
    $Body .= $email;
    $Body .= "\n\n";
    $Body .= "Company: ";
    $Body .= "\n";
    $Body .= $company;
    $Body .= "\n\n";
    $Body .= "Website: ";
    $Body .= "\n";
    $Body .= $website;
    $Body .= "\n\n";
    $Body .= "Age of company: ";
    $Body .= "\n";
    $Body .= $age + "year(s) old";
    $Body .= "\n\n";
    $Body .= "Our services: ";
    $Body .= "\n";
    $Body .= $services;
    $Body .= "\n\n";
    $Body .= "Our ideal customer is: ";
    $Body .= "\n";
    $Body .= $customer;
    $Body .= "\n\n";
    $Body .= "Our main competitors are: ";
    $Body .= "\n";
    $Body .= $competitors;
    $Body .= "\n\n";
    $Body .= "How we differ from the competition: ";
    $Body .= "\n";
    $Body .= $competition;
    $Body .= "\n\n";
    $Body .= "Our timeframe is: ";
    $Body .= "\n";
    $Body .= $timeframe;
    $Body .= "\n\n";
    $Body .= "What I want our logo to say about us: ";
    $Body .= "\n";
    $Body .= $logo1;
    $Body .= "\n\n";
    $Body .= "Imagery we'd like in the logo: ";
    $Body .= "\n";
    $Body .= $logo2;
    $Body .= "\n\n";
    $Body .= "Logos we like are: ";
    $Body .= "\n";
    $Body .= $logo3;
    $Body .= "\n\n";
    $Body .= "The colors we want to use are: ";
    $Body .= "\n";
    $Body .= $logo4;
    $Body .= "\n\n";
    $Body .= "Stationery? ";
    $Body .= $stationery;
    $Body .= "\n\n";
    $Body .= "Our budget is: ";
    $Body .= "\n";
    $Body .= "As much as $";
    $Body .= $budget;
    $Body .= "\n\n";
    $Body .= "Additional Info: ";
    $Body .= "\n";
    $Body .= $anythingElse;
    $Body .= "\n\n";

    // send email
    // send email
    $success = mail($EmailTo, $Subject, $Body, "From: <$EmailFrom>");

    // redirect to success page
    if ($success){
      print "<meta http-equiv=\"refresh\" content=\"0;URL=/questionnaire-thanks.php?identity\">";
    }
    else{
      print "<meta http-equiv=\"refresh\" content=\"0;URL=/questionnaire-error.php\">";
    }
}

?>

<main role="main" id="questionnaire-main">
    <div id="work-header">
        <h1 class="h2 text-center">Identity Questionnaire</h1>
    </div>
    <div id="questionnaire-area" class="padding-xl">
        <form id="questionnaire-form" method="post" action="" data-abide>
            <div class="row">
                <div class="medium-6 columns">
                    <label for="firstName">First Name*</label>
                    <input type="text" name="firstName" id="firstName" required />
                </div>
                <div class="medium-6 columns">
                    <label for="lastName">Last Name*</label>
                    <input type="text" name="lastName" id="lastName" required />
                </div>
            </div>
            <div class="row">
                <div class="medium-12 columns">
                    <label for="email">Email*</label>
                    <input type="text" name="email" id="email" required />
                </div>
            </div>
            <div class="row">
                <div class="medium-12 columns">
                    <label for="company">Company*</label>
                    <input type="text" name="company" id="company" required />
                </div>
            </div>
            <div class="row">
                <div class="medium-12 columns">
                    <label for="website">Website</label>
                    <input type="text" name="website" id="website" />
                </div>
            </div>
            <div class="row">
                <div class="medium-12 columns">
                    <label for="slogan">Do you have a tagline or slogan?</label>
                    <input type="text" name="slogan" id="slogan" placeholder="The happiest place on earth" />
                </div>
            </div>

            <div class="row">
                <div class="medium-12 columns">
                    <label for="age">Age of Company</label>
                    <select name="age" id="companyAge">
                        <option value="0-1">Less than a year</option>
                        <option value="2-5">1-5 years</option>
                        <option value="5-10">5-10 years</option>
                        <option value="10-20">10-20 years</option>
                        <option value="20+">More than 20</option>
                    </select>
                </div>
            </div>

            <div class="row">
                <div class="medium-12 columns">
                    <label for="services">Describe your products and services:</label>
                    <textarea rows="10" name="services" id="services" class="input-tall"> </textarea>
                </div>
            </div>
            <div class="row">
                <div class="medium-12 columns">
                    <label for="customer">Describe your ideal customer:</label>
                    <textarea rows="10" name="customer" id="customer" class="input-tall"> </textarea>
                </div>
            </div>

            <div class="row">
                <div class="medium-12 columns">
                    <label for="competitors">Who are your main competitors?</label>
                    <textarea rows="10" name="competitors" id="competitors" class="input-tall"> </textarea>
                </div>
            </div>

            <div class="row">
                <div class="medium-12 columns">
                    <label for="competition">How do you differ from the competition?</label>
                    <textarea rows="10" name="competition" id="competition" class="input-tall"> </textarea>
                </div>
            </div>

            <div class="row">
                <div class="medium-12 columns">
                    <label for="timeframe">What is your timeframe?</label>
                    <textarea rows="10" name="timeframe" id="timeframe" class="input-tall"> </textarea>
                </div>
            </div>

            <div class="row">
                <div class="medium-12 columns">
                    <label for="logo-1">What do you want your logo to say about the company?</label>
                    <textarea rows="10" name="logo-1" id="logo-1" class="input-tall"> </textarea>
                </div>
            </div>

            <div class="row">
                <div class="medium-12 columns">
                    <label for="logo-2">Are there any specific icons or imagery that you would like to have in your logo?</label>
                    <textarea rows="10" name="logo-2" id="logo-2" class="input-tall"> </textarea>
                </div>
            </div>

            <div class="row">
                <div class="medium-12 columns">
                    <label for="logo-3">Generally, what logos appeal to you and why?</label>
                    <textarea rows="10" name="logo-3" id="logo-3" class="input-tall"> </textarea>
                </div>
            </div>

            <div class="row">
                <div class="medium-12 columns">
                    <label for="logo-4">What colors would you like to have used in your logo?</label>
                    <textarea rows="10" name="logo-4" id="logo-4" class="input-tall"> </textarea>
                </div>
            </div>

            <div class="row">
                <div class="medium-12 columns">
                    <label for="stationery">Will you be requiring stationery design?</label>
                    <textarea rows="10" name="stationery" id="stationery" class="input-tall"> </textarea>
                </div>
            </div>

            <div class="row">
                <div class="medium-12 columns">
                    <label for="budget">Approximate budget?</label>
                    <p class="muted small">
                        Creating a great brand takes time. We can create a good looking mark pretty quickly, but creating a strong, well informed brand that will stand out and grow with you takes time. We'll use this to help us gauge how much time we should plan to spend on it & define the scope.
                    </p>
                    <select name="budget" id="budget">
                        <option value="1000">$1,000 or less</option>
                        <option value="5000">$1,000 to $5,000</option>
                        <option value="10000">$5,000 to $10,000</option>
                        <option value="10000+">$10,000 or more</option>
                    </select>
                </div>
            </div>

            <div class="row">
                <div class="medium-12 columns">
                    <label for="anythingElse">Anything else you would like to add?</label>
                    <textarea rows="10" name="anythingElse" id="anythingElse" class="input-tall"> </textarea>
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
