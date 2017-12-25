<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Document</title>
</head>
<body>


<?php
if(!empty($_POST['telephone'] ))
{
$to = "anastasiyatsyplya@gmail.com";
$from = 'email';
$subject = "New message";
$message = 'Name: '.$_POST['firstname'].'; email: '.$_POST['email'].'; textarea:' .$_POST['textarea'].';';
$headers = "Content-type: text/html; charset=UTF-8 \r\n";
$headers .= "From: <email>\r\n";
$result = mail($to, $subject, $message, $headers);

    if ($result){ 
        echo "<p>Message sent successfully</p>";
    }
    else{
        echo "<p>Sorry your message not sent, Try again Later.</p>";
    }
}

?>

</body>
</html>


