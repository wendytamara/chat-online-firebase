
// creando variables reutilizables

var txtNombre = $('#nombre');
var txtMensaje = $('#mensaje');
var btnEnviar = $('#btnEnviar');
var chatUl = $('#chatUl');

var refConvalidaciones = firebase.database().ref().child('chat');

// funcion al boton enviar

btnEnviar.on('click', function(){

  var nombre = txtNombre.val();
  var mensaje = txtMensaje.val();
  // var html = "<li><b> " + nombre + " : </b> "+mensaje + "</li> ";
  //
  // chatUl.innerHTML += html;

// ingresando a database .ref (rama a la que quiero ir) --- push es para ingresar datos a mi arbol
  firebase.database().ref('chat').push({
    name: nombre,
    message:mensaje
  });
});

// snapshot objeto que contiene informacion de todo el nodo

firebase.database().ref('chat')
.on('value', function(snapshot) {
  var html = '';
  snapshot.forEach(function(e) {
    var element = e.val();
    var nombre = element.name;
    var mensaje = element.message;
    html += ' <li><b> ' + nombre + ' : </b> ' + mensaje + '</li> ';


  });

  chatUl.html(html);

});
