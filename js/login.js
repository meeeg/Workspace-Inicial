function login(user, pass){  //función que guarda los datos puestos en usuario y contraseña
    if (user.trim()=== "" || pass.trim()=== ""){ //checkea que no haya campos en blanco
        alert("Debe rellenar los datos"); //sino envía una alerta
    } else {
        localStorage.setItem("usuario", user.trim());  //guarda los datos de en localStorage
        localStorage.setItem("contraseña", pass.trim());
        location.href="page.html"; //redirecciona a la página principal si todo lo anterior se cumple
    }
} 

function googleOauth(googleUser){
    var profile = googleUser.getBasicProfile()
    var userData =  document.querySelector('#content')
    userData.innerText = googleUser.getBasicProfile().getName();
    window.location.replace ="page.html" 
}

function signOut (){
    gapi.auth2.getAuthInstance().signOut().then(function (){
        alert('user signed out')
    });
}




//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
});