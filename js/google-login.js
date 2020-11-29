function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile(); //Obtiene perfil de usuario básico.

  var googleImage = profile.getImageUrl();
  var googleId = profile.getId();
  var googleNombre = profile.getName();
  var googleEmail = profile.getEmail();
  //probar que se procesen los datos
  localStorage.setItem("gimg", googleImage);
  localStorage.setItem("gId", googleId);
  localStorage.setItem("gNombre", googleNombre);
  localStorage.setItem("gEmail", googleEmail)
    location.href = "page.html"
}

function logged(){
  location.href = "page.html"
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