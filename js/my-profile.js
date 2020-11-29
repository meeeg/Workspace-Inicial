//función que obtiene y almacena los datos de los campos y la imagen subida en un objeto
function register(nombre, direccion, email, telefono) { //función que guarda los datos puestos en usuario y contraseña
    if (nombre.trim() === "" || direccion.trim() === "" || email.trim() === "" || telefono.trim() === "") { //checkea que no haya campos en blanco
        Swal.fire({
            icon: 'error',
            title: 'Debes rellenar tus datos',
            text: 'rellena tus datos para el correcto funcionamiento de e-mercado',
          }) //sino envía una alerta
    } else {
        /*let savedUser = {}; */
        /*savedUser.nombre = nombre.trim;
        savedUser.direccion = direccion.trim;
        savedUser.email = email.trim;
        savedUser.telefono = telefono.trim;
        savedUser.img = myImg.trim;*/
        localStorage.setItem("nombre", nombre.trim()); //guarda los datos de en localStorage
        localStorage.setItem("direccion", direccion.trim());
        localStorage.setItem("email", email.trim());
        localStorage.setItem("telefono", telefono.trim());
        localStorage.setItem("myImg", myImg.src.trim());
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Tus datos han sido guardados',
            showConfirmButton: false,
            timer: 1500,
            onClose: () => {location.reload()}
          })
        /*localStorage.setItem("actualUser", JSON.stringify(savedUser));*/
    }
}



//funcion que modifica los valores de los input y la imagen para que aparezcan los datos guardados
if (localStorage.nombre != null ) {
    var name = localStorage.getItem("nombre");
    document.getElementById("nombre").innerHTML = name;
    nombre.value = name;
    var adress = localStorage.getItem("direccion");
    document.getElementById("direccion").innerHTML = adress;
    direccion.value = adress;
    var mail = localStorage.getItem("email");
    document.getElementById("email").innerHTML = mail;
    email.value = mail;
    var phone = localStorage.getItem("telefono");
    document.getElementById("telefono").innerHTML = phone;
    telefono.value = phone;
    var imgSrc = localStorage.getItem("myImg");
    document.getElementById("myImg").innerHTML = "imgSrc";
    myImg.src = imgSrc;
}

if (localStorage.gname != null){
    var gname = localStorage.getItem("gname");
    document.getElementById("nombre").innerHTML = gname;
    nombre.value = gname;
    var gemail = localStorage.getItem("gemail");
    document.getElementById("email").innerHTML = gemail;
    email.value = gemail;
    var adress = localStorage.getItem("direccion");
    document.getElementById("direccion").innerHTML = adress;
    direccion.value = adress;
    var phone = localStorage.getItem("telefono");
    document.getElementById("telefono").innerHTML = phone;
    telefono.value = phone;
    var gimg = localStorage.getItem("gimg");
    document.getElementById("myImg").innerHTML = gimg;
    myImg.src = gimg;
}


