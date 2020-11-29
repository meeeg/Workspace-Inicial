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
<li> <a onclick="signOut(); localStorage.clear(); alert('Usuario desconectado'); location.href='index.html';">Log Out</a></li>
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
