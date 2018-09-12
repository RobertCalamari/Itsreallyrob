Hello
<?php
$to      = 'rjcalamar@gmail.com';
$subject = 'the subject';
$message = 'hello';
$headers = 'From: webmaster@example.com' . "\r\n" .
    'Reply-To: webmaster@example.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);
	$message = "wrong answer";
	echo "<script type='text/javascript'>alert('$message');</script>";
   header("../index.html");
   exit;
?> 