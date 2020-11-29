 function onSignIn(googleUser) {
                    var profile = googleUser.getBasicProfile();//Obtiene perfil de usuario básico.
                    var perfil=`<h2> Perfil del usuario </h2> `;
                    perfil+=`<img src=` + profile.getImageUrl() + `>`
                    `ID:`+ profile.getId() + `Nombre: ` + profile.getName() +
                    `Email:` + profile.getEmail() + ``
    
                    document.getElementById('datos').innerHTML=perfil;  
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