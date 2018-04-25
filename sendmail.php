<?php
/*apenas dispara o envio da mensagem caso houver/existir $_POST['enviar']*/
/*abaixo as veriaveis principais, que devem conter em seu formulario*/



$nomeRemetente = ($_POST["user_name"]);
$email = ($_POST["user_email"]);
$assunto = ($_POST["subject"]);
$tel = ($_POST["tel"]);
$msg = ($_POST["msg"]);

/*********************************** A PARTIR DAQUI NAO ALTERAR ************************************/
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer-master/src/PHPMailer.php';
require 'PHPMailer-master/src/SMTP.php';
require 'PHPMailer-master/src/Exception.php';
// require 'PHPMailer-master/src/PHPMailerAutoload.php';
$mail = new PHPMailer();
$mail->setLanguage('pt');
// $to = 'contato@dayartdesign.com.br';
$host = 'smtp.dayartdesign.com.br';
$username = 'contatosite@dayartdesign.com.br';
$password = '22031986';
$port = 587;
$secure = false;

$mail->SMTPDebug = 0; 
$mail->isSMTP();
$mail->Host = $host;
$mail->SMTPAuth = true;
$mail->Username = $username;
$mail->Password = $password;
$mail->Port = $port;
$mail->SMTPSecure = $secure;

$from = $username;
$fromName = 'Contatosite';


$mail->setFrom($from,$fromName);
$mail->addReplyTo($email, $nomeRemetente);
$mail->addAddress($from);     // Add a recipient


$mail->isHTML(true);
$mail->CharSet = 'utf-8';
$mail->WordWrap = 70;
$mail->Subject = 'Contato via site';

$message = "Nome: ".$nomeRemetente."<br/>E-mail: ".$email." <br/>Assunto: ".$assunto."<br/>Tel: ".$tel."<br/>Mensagem: ".$msg."";
$mail->Body = $message;

$enviado = $mail->Send();

if($enviado) {
  echo '1';
} else {
  echo '0';
}
?>