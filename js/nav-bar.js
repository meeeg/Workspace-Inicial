
document.getElementById("nav-bar").innerHTML = `

<style>
#profile-image{
  width: 50px;
    height: 50px;
    -webkit-border-radius: 50px;
    -webkit-background-clip: padding-box;
    -moz-border-radius: 50px;
    -moz-background-clip: padding;
    border-radius: 50px;
    background-clip: padding-box;
    background-position: center center;
      }
}
</style>
<nav class="sticky-top">
  <div class="row">
  <div class="quarter">
  <a href="page.html">
    <img src="img/e-mercadopng.png" alt="E-Mercado Logo" style="height: 2.5em;">
  </a>
</div>

    <div class="rest">
     <i class="fa fa-bars"></i>

     <div class="text-menu">

       <div>
         <a href="categories.html"> Categorías</a>
       </div>

/

       <div>
         <a href="products.html">Productos</a>
       </div>

/

       <div><a href="sell.html">Vender</a></div>

/

       <div>
         <a href="cart.html">Mi carrito</a>
       </div>

/


        <div>
        <a href="my-profile.html"><img id="profile-image"></img></a>
        </div>

        <div>
        <a><span id="user" style=" background-color:#858384; 
        border: none;
        color: white;
        padding: 15px;
        text-align: center;
        text-decoration: none;
        "></span>
         <ul>
           <li><a href="my-profile.html">Perfil</a></li>
           <li><a href="cart.html">Carrito</a></li>
           <li> <a onclick="signOut(); swalLogOut();">Log out</a></li>
         </ul>
         </a>
       </div>

       <div>
       <a href="index.html" id="log-wo-user">Inicia sesión</p>
       </div>

       
     <div>
   </div>
      </div>
    </div>
  </div>
</nav>


    `
//alerta al cerrar sesión
function swalLogOut() {
  localStorage.clear();
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: "Cierre de sesión exitoso ¡hasta la próxima!", 
    showConfirmButton: false,
    timer: 0
  })
  setTimeout(function () {
    window.location.href = "index.html";
  }, 1500);;
}
//barra responsiva, icono de tres barras que se genera al reducir el tamaño de pantalla
$(document).ready(function () {

  $('.fa-bars').click(function () {
    $('.text-menu').toggleClass('menu-appear');
  });

  $('nav .text-menu a').click(function () {
    $('.text-menu').toggleClass('menu-appear');
  });
});

//obtiene el usuario y cambia el campo en la barra de navegación
var local = localStorage.getItem("usuario");
document.getElementById('user').innerHTML = local;

//obtiene la imagen y la cambia en el campo de la barra de navegación
var profileImg = document.getElementById('profile-image');
profileImg.src = localStorage.myImg;

// si no hay una imagen precargada, la misma no se muestra
if (localStorage.myImg == null && localStorage.gimg == null) {
  document.getElementById("profile-image").style.display = "none";
}
//si no hay un usuario iniciando sesión, el span de usuario no se muestra
if (localStorage.usuario == null && localStorage.gname == null) {
  document.getElementById("user").style.display = "none";
}
//si hay un usuario con sesión iniciada, no muestra el link para iniciar sesión
if (localStorage.usuario != null && localStorage.gname) {
  document.getElementById("log-wo-user").style.display = "none";
}

if (localStorage.gname != null){
  document.getElementById("user").innerHTML = localStorage.gname
  profileImg.src = localStorage.gimg
  document.getElementById("log-wo-user").style.display = "none";
}


