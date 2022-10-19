const WebSocket=require("ws");
const serverAdress="ws://127.0.0.1:5000";

const ws=new WebSocket(serverAdress) //se crea un web socket que se conecta a la direccion

//accion si se tiene una conexion correcta
ws.on('open',function(){
    ws.send("Hola server");
}); 

ws.on('message', function(msg){
    console.log("Mensaje recibido del server"+msg);

})



