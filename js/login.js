function login(user, pass) { //función que guarda los datos puestos en usuario y contraseña
    if (user.trim() === "" || pass.trim() === "") { //checkea que no haya campos en blanco
        Swal.fire({ //sino envía una alerta
            position: 'center',
            icon: 'error',
            title: "Para ingresar rellena tus datos", 
            showConfirmButton: false,
            timer: 0}); 
        } else {
            localStorage.setItem("usuario", user.trim()); //guarda los datos de en localStorage
            localStorage.setItem("contraseña", pass.trim());
            Swal.fire({
                position: 'center',
                imageUrl: 'img/spinner.gif',
                imageHeight: 50,
                title: "Iniciando sesion", 
                showConfirmButton: false,
                timer: 0})
                setTimeout(function () {
                    window.location.href = "page.html";
                 }, 2000);; //redirecciona a la página principal si todo lo anterior se cumple
        }
    }





//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {});