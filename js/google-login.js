 
 function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  var gname = profile.getName();
  var gimg = profile.getImageUrl();
  var gemail = profile.getEmail();


  localStorage.setItem("gname", gname);
  localStorage.setItem("gimg", gimg);
  localStorage.setItem("gemail", gemail);
  console.log(gname)
  console.log(gimg)
  console.log(gemail)

  if (gname != null){
  Swal.fire({
    position: 'center',
    imageUrl: 'img/spinner.gif',
    imageHeight: 50,
    title: "Iniciando sesion con google", 
    showConfirmButton: false,
    timer: 0})
    setTimeout(function () {
        window.location.href = "page.html";
     }, 2500);; //redirecciona a la página principal si todo lo anterior se cumple
    }

}




  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
  });

}

function onLoad() {
  gapi.load('auth2', function() {
    gapi.auth2.init();
  });
}

