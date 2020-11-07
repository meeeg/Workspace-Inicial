/*me falta bastante que arreglar acá para que el comentario quede bien, lo sé*/

var titles = []; // array de comentarios
var titleInput = document.getElementById("title"); //guarda el mensaje
var messageBox = document.getElementById("display"); // donde va a ubicar el comentario
var userCommentingParse = localStorage.getItem("usuario")
var userCommenting = JSON.parse(userCommentingParse);

/*Tengo que arreglar esta función para que checkee si lo puesto en el comentario es texto y no deje comentarios vacios
function checkText()
      { 
      var letters = /^[A-Za-z]+$/;
      if(titleInput.value.match(letters))
      {
      alert('Your name have accepted : you can try another');
      return true;
      }
      else
      {
      alert('Please input alphabet characters only');
      return false;
      }
      }*/
function insert () { //almacena el comentario y llama a la función que lo muestra
titles.push(titleInput.value);
clearAndShow();
}
function clearAndShow () //muestra el comentario
{
titleInput.value = "";
messageBox.innerHTML = "";
messageBox.innerHTML += "<hr><strong>"+ userCommenting + "</strong><br>" + titles + "<hr><br>" ; //muestra el comentario y le agrega los espaciados y lineas
}
