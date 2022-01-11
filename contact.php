<?php 

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $mailto = "touficnabi@gmail.com";
    $headers = "From: " . $email;
    $text = "You have received an email from ". $email;

    mail($mailto, $subject, $text, $headers);
}


?>