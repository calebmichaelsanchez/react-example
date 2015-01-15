<?php

$EmailTo = "dax@underbelly.co";
$Subvert = $_POST['lastname'];
$Subject = "Contact from Underbelly.co";
$Name = Trim(stripslashes($_POST['name'])); 
$Email = Trim(stripslashes($_POST['email'])); 
$Selection = Trim(stripslashes($_POST['selection'])); 
$Budget = Trim(stripslashes($_POST['budget']));
$Details = Trim(stripslashes($_POST['details']));

// validation
$validationOK=true;
if (!$validationOK) {
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.htm\">";
  exit;
}

// prepare email body text
$Body = "";
$Body .= "My name is ";
$Body .= $Name;
$Body .= "\n";
$Body .= "My email address is";
$Body .= $Email;
$Body .= "\n";
$Body .= "I'd like to talk about ";
$Body .= $Selection;
$Body .= "\n";
$Body .= "My budget is ";
$Body .= $Budget;
$Body .= "\n";
$Body .= "Here are some details: ";
$Body .= $Details;
$Body .= "\n";

if(empty($Subvert)) {
    // send email 
    $success = mail($EmailTo, $Subject, $Body, "From: <$Email>");
    print "<meta http-equiv=\"refresh\" content=\"0;URL=../contact.html\">";
}
else {
    print "<meta http-equiv=\"refresh\" content=\"0;URL=../contact.html\">";
}

?>