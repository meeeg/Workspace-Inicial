function importFileandPreview() {
  var preview = document.getElementById('myImg');
  var file = document.querySelector('input[type=file]').files[0];
  var reader = new FileReader();

  reader.addEventListener("load", function () {
    preview.src = reader.result;
    localStorage.setItem("myImg", (reader.result));
  });

  if (file) {
    reader.readAsDataURL(file);
  }
}
