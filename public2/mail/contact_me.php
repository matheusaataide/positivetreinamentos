<?php

if($_POST) {
   $to = "matheusantonio96@gmail.com"; 
   $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
   $nome = filter_var($_POST["nome"], FILTER_SANITIZE_STRING);
   $assunto = filter_var($_POST["assunto"], FILTER_SANITIZE_STRING);
   $msg = filter_var($_POST["msg"], FILTER_SANITIZE_STRING);
   
   $body = "Você recebeu uma nova mensagem no site.\nEnviado por $nome <$email>.\nAssunto: \"$assunto\".\nMensagem: \"$msg\"\n\nLembre de responder assim que possível!";
   
   // Email que envia
   $headers = "From: positivetreinamentos@gmail.com\n";   
   $headers .= "Return-Path: positivetreinamentos@gmail.com\n";
   
   // Este sempre deverá existir para garantir a exibição correta dos caracteres
   $headers .= "MIME-Version: 1.1\n";
 
   // Para enviar o e-mail em formato texto com codificação de caracteres Europeu Ocidental (usado no Brasil)
   $headers .= "Content-type: text/plain; charset=iso-8859-1\n";
 
   // E-mail que receberá a resposta quando se clicar no 'Responder' de seu leitor de e-mails
   $headers .= "Reply-To:" . $email . "\n"
 
   // para enviar a mensagem em prioridade normal (valor padrão caso não seja especificada)
   $headers .= "X-Priority: 3\n";



   if(mail($to, "Nova mensagem no site!", $body, $headers)) {
      echo json_encode(array('success' => true));
   } else {
      echo json_encode(array('success' => false));
   }
}
           
?>