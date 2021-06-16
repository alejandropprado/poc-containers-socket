# POC: Websocket Front - Containers

#### Introducción
En el sistema actual contamos con un proceso síncrono para la creación de contenedores, de manera que, al realizar la solicitud de creación hacia el servidor, este responde una vez creado el contenedor en el legacy.
El servidor de legacy al tener mas concurrencia se cae, por lo cual se solicito que en vez de realizar una solicitud síncrona esta sea de forma asíncrona, por ende, la respuesta del servicio es inmediata, pero no transparenta si lo hizo correctamente o no, para esto se debió utilizar un sistema de colas (RabbitMQ). Una vez la cola recibe el mensaje de respuesta, esta debe de ser enviada atreves de un socket hacia el cliente (front) y así completar con el flujo correspondiente.

#### Objetivo
-	Establecer conexión con servidor de socket, que esta publicado en el servicio de notificaciones (POC backend realizado anteriormente).
-	Recibir mensajes básicos atreves del socket.
-	Mostrar mensajes en pantalla.

#### Tecnologías utilizadas
-	ReactJS (cra) v17.0.2+
-	TypeScript v4.1.2+
-	Socket.io-client v2.3.0
-	Css modules
-	Hooks

#### Conclusión
Se creo una aplicación React para realizar las pruebas y objetivos mencionados. El cual tuvo como resultado una buena implementación y la comunicación por sockets exitosa a nivel Front.

#### URL del repositorio:
[Click aquí](https://github.com/alejandropprado/poc-containers-socket)