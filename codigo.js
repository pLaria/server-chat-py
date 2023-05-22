const socket = io();
socket.on('historial', function(data){
    idtextarear.innerHTML = data;
})
function mostrar(a,b){
    let usuario=document.getElementById(a).value  
    if ((document.getElementById(a).value != "") && (document.getElementById(b).value != "")){
        let mensaje =document.getElementById(a).value;
        document.getElementById(a).value=""
        document.getElementById(a).focus();    
        socket.emit('mensaje',mensaje)
        console.log(mensaje)
    }
}
//ingresar a la paginacliente por "localhost:3000" o "(IP del servidor):3000" Ej: "10.0.9.15:3000"