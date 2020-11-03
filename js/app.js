function register(nombre, direccion, email, telefono){  //función que guarda los datos puestos en usuario y contraseña
    if (nombre.trim()=== "" || direccion.trim()=== ""  || email.trim()=== ""  || telefono.trim()=== ""){ //checkea que no haya campos en blanco
        alert("Debe rellenar los datos"); //sino envía una alerta
    } else {
        localStorage.setItem("nombre", nombre.trim());  //guarda los datos de en localStorage
        localStorage.setItem("direccion", direccion.trim());
        localStorage.setItem("email", email.trim());
        localStorage.setItem("telefono", telefono.trim());
        alert("Datos guardados con éxito");
    }
    location.onload = displaySavedUserData();
} 

function displaySavedUserData(){
    var name = localStorage.getItem("nombre");
    document.getElementById('nombre').innerHTML=name;
    nombre.value = name;
    var adress = localStorage.getItem("direccion");
    document.getElementById('direccion').innerHTML =adress;
    direccion.value = adress;
    var mail = localStorage.getItem("email");
    document.getElementById('email').innerHTML =mail;
    email.value = mail;
    var phone = localStorage.getItem("telefono");
    document.getElementById('telefono').innerHTML =phone;
    telefono.value = phone;
}

