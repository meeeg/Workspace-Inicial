var category = {};

//Función del carrousell
function showImagesGallery(array) {

    let htmlContentToAppend = "";

    for (let i = 0; i < array.length; i++) {
        let imageSrc = array[i];
        if (i == 0) {
            htmlContentToAppend += `
    <div class="carousel-item active">
      <img src="` + imageSrc + `"class="d-block w-100" alt="...">
    </div>
`
        } else {
            htmlContentToAppend += `
                    <div class="carousel-item ">
                      <img src="` + imageSrc + `"class="d-block w-100" alt="...">
                    </div>
                `
        }

        document.getElementById("carrousel-car").innerHTML = htmlContentToAppend;
    }
}


//función que recoge todos los datos del JSON y las coloca en los distintos sitios de la página
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCT_INFO_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            category = resultObj.data;

            let categoryNameHTML = document.getElementById("categoryName");
            let categoryDescriptionHTML = document.getElementById("categoryDescription");
            let productCountHTML = document.getElementById("productCount");
            let productCriteriaHTML = document.getElementById("productCriteria");
            let productPriceHTML = document.getElementById("productCurrency");

            categoryNameHTML.innerHTML = category.name;
            categoryDescriptionHTML.innerHTML = category.description;
            productCountHTML.innerHTML = category.soldCount;
            productCriteriaHTML.innerHTML = category.cost;
            productPriceHTML.innerHTML = category.currency;

            //Muestro las imagenes en forma de galería
            showImagesGallery(category.images);
            //función para mostrar los productos relacionados
            getJSONData(PRODUCTS_URL).then(function (resultObj) {
                if (resultObj.status === "ok") {
                    product = resultObj.data;
                    let html = '';


                    for (i = 0; i < category.relatedProducts.length; i++) {
                        showRelatedProducts(product[category.relatedProducts[i]]);
                    }



                    function showRelatedProducts(productInfo) {
                        html += `
                            <div class="card slide-in-blurred-bottom" style="width: 15rem;">
                            <img class="card-img-top" src="` + productInfo.imgSrc + `" alt="">
                            <div class="card-body">
                              <h5 class="card-title">` + productInfo.name + `</h5>
                              <p class="card-text"> ` + productInfo.description + `</p>
                            </div>
                          </div>
                            `

                    }
                    document.getElementById("rel-items-cont").innerHTML = html;
                }

            });
        }
    });
});


//función que carga los comentarios
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            comments = resultObj.data;
            var userComments = "";


            for (i = 0; i < comments.length; i++) {
                var score = "";
                for (x = 1; x <= 5; x++) { //función que realiza las estrellas en la valoración
                    if (x <= comments[i].score) {
                        score += "<i class='fas fa-star checked'></i>";
                    } else {
                        score += "<i class='far fa-star'></i>";
                    }
                }

                //template comentarios
                userComments += `<div> 
                         <hr>
                         <p> <strong>` + comments[i].user + `  </strong> <small>  ` + score + `</p> </small>
                         
                         <small><p>` + comments[i].description + `</p></small>
                         </div>`


                document.getElementById('comments').innerHTML = userComments;
            }

        }


    });
});



//función que redirecciona cuando toco cualquier producto de la lista a product-info
var button = document.getElementById("rel-items-cont");
button.addEventListener("click", function () {
    document.location.href = 'product-info.html';
});