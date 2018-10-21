var socket = io();

//escuchar información
socket.on('connect', function() {
    console.log('conectado al servidor');
});

//escuchar información
socket.on('disconnect', function() {
    console.log('perdimos coneccion con el servidor');
});

//enviar información
socket.emit('enviarMensaje', {
    usuario: 'Daniel',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('respuesta server: ', resp);
});

//escuchar información
socket.on('enviarMensaje', function(mensaje) {
    console.log('servidor: ', mensaje);
});