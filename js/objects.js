//aquí se almacenan todos los datos del usuario en un objeto para su posterior procesamiento
//creación de una constante objeto para los datos del usuario, inicializada con "placeholders" 
//que serán modificados a medida que el usuario suba sus datos
var sessionUser = {
    "nombre": "placeholder",
    "direccion": "placeholder",
    "email": "placeholder",
    "telefono": "placeholder",
    "itemcomprado": "placeholder",
    "cantidad": "placeholder",
    "tipoenvio": "placeholder",
    "costoenvio": "placeholder",
    "costototal": "placeholder",
    "tarjetadecredito": "placeholder",
    "cvc": "placeholder"
};

//obtiene los datos guardados en localstorage de cada uno de los formularios 
//ingresados por el usuario y los modifica dentro del objeto
sessionUser.nombre = localStorage.nombre
sessionUser.fotoperfil = localStorage.myImg
sessionUser.direccion = localStorage.direccion
sessionUser.email = localStorage.email
sessionUser.telefono = localStorage.telefono
sessionUser.fotoperfil = localStorage.myImg
sessionUser.tipoenvio = localStorage.envio
sessionUser.cvc = localStorage.cvc
sessionUser.tarjetadecredito = localStorage.cc
sessionUser.costoenvio = localStorage.costoEnvio
sessionUser.costototal = localStorage.costoTotal
sessionUser.itemcomprado = localStorage.itemComprado
sessionUser.cantidad = localStorage.cantidad
