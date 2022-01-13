<?php 
    header("Access-Control-Allow-Origin: *");
    
    if ($_POST) {
        
        $name = $_POST['name'];
        $email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
        $phone = $_POST['phone'];
        $subject = filter_var($_POST['subject'], FILTER_SANITIZE_STRING);
        $message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);
    
        $mailto = "touficnabi@gmail.com";
        $destinationEmail = $emailAddress = filter_var($mailto, FILTER_VALIDATE_EMAIL);
        
        $headers .= "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
        $headers .= 'From: contactform@sayyesquickly.net' . "\r\n";//$email . '<' . $email . '>' . "\r\n";
        $headers .= 'Reply-To: ' . $email ."\r\n";
        $headers .= "X-Mailer:  PHP/" . phpversion() . "\r\n";
        
        $text = 
        "<div>
            <h2 style='font-size:18px; font-weight:bold; background:#485543; color: #ffffeb; width:100%; padding:12px 20px'>New Mail from SayYesQuickly<h2>
            <table style='font-size:13px; font-weight: normal; padding:12px 20px;'>
                <tr>
                    <td><strong>Name: </strong></td><td>" . $name . "</td>
                </tr>
                <tr>
                    <td><strong>Email: </strong></td><td>" . $email . "</td>
                </tr>
                <tr>
                    <td><strong>Phone: </strong></td><td>" . $phone . "</td>
                </tr>
                <tr style='vertical-align: top;'>
                    <td><strong>Message: </strong></td><td>" . $message . "</td>
                </tr>
            </table>
        </div>";
    
        mail($destinationEmail, $subject, $text, $headers);
    }
?>