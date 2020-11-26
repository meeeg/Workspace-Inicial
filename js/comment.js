/*me falta bastante que arreglar acá para que el comentario quede bien, lo sé

var titles = []; // array de comentarios
var titleInput = document.getElementById("title"); //obtiene el mensaje
var messageBox = document.getElementById("display"); // donde va a ubicar el comentario
var userCommentingParse = localStorage.getItem("usuario")
var userCommenting = JSON.parse(userCommentingParse);

checkText()
      { 
      var letters = /^[A-Za-z]+$/
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
      }

function insert () { //almacena el comentario y llama a la función que lo muestra
titles.push(titleInput.value);
clearAndShow();
checkText();
}

function clearAndShow () //muestra el comentario
{
titleInput.value = "";
messageBox.innerHTML = "";
messageBox.innerHTML += "<hr><strong>"+ userCommenting + "</strong><br>" + titles[i] + "<hr><br>" ; //muestra el comentario y le agrega los espaciados y lineas
}*/



var commentObject = {
      "user": ["placeholder"],
      "comment": ["placeholder"],
      "score": "placeholder"
}
var titleInput = document.getElementById("title"); //obtiene el mensaje
var messageBox = document.getElementById("display"); // donde va a ubicar el comentario
commentObject.user = localStorage.getItem("usuario");


function storeComment(){
      comment = titleInput.value;
      commentObject.comment = comment;
      titleInput.value = "";
      messageBox.innerHTML= "";
      messageBox.innerHTML += `<strong>` + commentObject.user + `</strong> <br> <small>` + commentObject.comment + ` <small><hr><br> `
}

