//convierte la imagen a blob y la sube.
window.addEventListener('load', function() {
    document.querySelector('input[type="file"]').addEventListener('change', function() {
        if (this.files && this.files[0]) {
            var img = document.querySelector('img');  // $('img')[0]
            img.src = URL.createObjectURL(this.files[0]); // set src to blob url
            img.onload = imageIsLoaded;
        }
    });
  });
  
//guarda la imagen???
  function imageIsLoaded() { 
    localStorage.setItem("myImg", (this.src));
    var imgSrc = localStorage.getItem("myImg");
    document.getElementById("myImg").innerHTML = "imgSrc";
    myImg.src = imgSrc;  
  }