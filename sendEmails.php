<?php

$email = $_POST['email'];
$name = $_POST['name'];
$message = $_POST['message'];

$addressee = "sergiogavi60@gmail.com";
$subject= "Envio de correo"; 
$body = '
    <html> 
        <head> 
            <title>Prueba de envio de correo</title> 
        </head>

        <body> 
            <h1>Solicitud de contacto desde correo de prueba !  </h1>
            <p> 
                Contacto:  '.$name . ' - ' . $subject .'  <br>
                Mensaje: '.$message.' 
            </p> 
        </body>
    </html>
';
//para el envío en formato HTML 
$headers = "MIME-Version: 1.0\r\n"; 
$headers .= "Content-type: text/html; charset=UTF8\r\n"; 

//dirección del remitente

$headers .= "FROM: $name <$email>\r\n";
mail($addressee,$subject,$body,$headers);

echo "Correo enviado"; 
?> 

<a href="index.html">Volver a inicio</a>
