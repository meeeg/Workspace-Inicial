function login(user, pass){  //función que guarda los datos puestos en usuario y contraseña
    if (user.trim()=== "" || pass.trim()=== ""){ //checkea que no haya campos en blanco
        alert("Debe rellenar los datos"); //sino envía una alerta
    } else {
        localStorage.setItem("usuario", user.trim());  //guarda los datos de en localStorage
        localStorage.setItem("contraseña", pass.trim());
        location.href="page.html"; //redirecciona a la página principal si todo lo anterior se cumple
    }
} 


//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
});