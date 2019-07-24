<?php
if (isset($_POST['submit'])) {
  $email = $_POST['email'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];
  $to = 'peendog_1986@hotmail.co.uk';

  $body = '<html>
            <body>
              <h2>Feedback - Example.com</h2>
              <hr>
              <p>Email:<br>'.$email.'</p>
              <p>Subject:<br>'.$subject.'</p>
              <p>Message:<br>'.$message.'</p>
            </body>
          </html>';
  // headers
  $headers = "From: ".$email." <".$email.">\r\n";
  $headers .= "Reply-To: ".$email."\r\n";
  $headers .= "NIME-Version: 1.0\r\n";
  $headers .= "Content-type: text/html; charset-utf-8";
  // send
  $send = mail($to, $subject, $body, $headers);
  if ($send) {
    echo '<br>';
    echo 'Thanks for contacting me. I will be in touch shortly.';
  } else {
    echo 'error';
  }
}
?>