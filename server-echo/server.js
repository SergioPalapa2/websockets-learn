const WebSocket=require("ws"); //se crea una constante que requiere la libreria ws
const PORT=5000;
const wsServer=new WebSocket.Server({
    port: PORT
});
//Mediante javascripts podemos implementar eventos
//se define el comportamiento cuando se levanta una conexion
wsServer.on('connection',function(socket){
    console.log("Cliente conectado");

    //Podemos definir algun comportamiento al conectarse el socket
    socket.on('message',function(msg){
        
        socket.send("Tu mensaje fue: "+msg); //envia el mensaje al cliente conectado

        // //Broadcast del mensaje enviado
        // wsServer.clients.forEach(function(client){
        //     client.send("Alguien envio esto:" + msg);
        // });


    });
});

console.log((new Date())+" Server escuchando en puerto "+PORT);




