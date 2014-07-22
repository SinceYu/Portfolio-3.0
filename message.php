<?php

$contact_name = $_POST['name'];

$contact_email = $_POST['email'];

$contact_subject = $_POST['subject'];

$contact_message = $_POST['message'];

if(!empty($contact_name))

{

	$sender = $contact_email;

	$receiver = "shaoqing.yu@gmail.com";

	$client_ip = $_SERVER['REMOTE_ADDR'];

	$email_body = "Name: $contact_name \nEmail: $sender \n\nSubject: $contact_subject \n\nMessage: \n\n$contact_message \n\nIP: $client_ip \n\n";		

	$extra = "From: $sender\r\n" . "Reply-To: $sender \r\n" . "X-Mailer: PHP/" . phpversion();

	echo json_encode(array("message"=>"Message come from".$contact_email."has been sent"));
}

?>
