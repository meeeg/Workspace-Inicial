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
        <a><span id="user"></span>
         <ul>
           <li><a href="my-profile.html">Perfil</a></li>
           <li><a href="cart.html">Carrito</a></li>
<li> <a onclick="signOut(); swalLogOut();">Log Out</a></li>
         </ul>
         </a>
       </div>

       
     <div>
   </div>
      </div>
    </div>
  </div>
</nav>


    `

    function swalLogOut(){
    localStorage.clear();
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: "Cierre de sesión exitoso ¡hasta la próxima!", //utilizo la variable de mensaje generada al inicio del js
      showConfirmButton: false,
      timer: 0})
      setTimeout(function () {
          window.location.href = "index.html";
       }, 1500);;
      }

$(document).ready(function () {

  $('.fa-bars').click(function () {
    $('.text-menu').toggleClass('menu-appear');
  });

  $('nav .text-menu a').click(function () {
    $('.text-menu').toggleClass('menu-appear');
  });
});


var local = localStorage.getItem("usuario");
document.getElementById('user').innerHTML = local;


var profileImg = document.getElementById('profile-image');
profileImg.src = localStorage.myImg;


$('img:not([src]), img[src=""]')

if (localStorage.myImg == null) {
  document.getElementById("profile-image").style.display = "none";
} 
