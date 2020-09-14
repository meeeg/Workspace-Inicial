//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
var category = {};


        function showImagesGallery(array){

            let htmlContentToAppend = "";
        
            for(let i = 0; i < array.length; i++){
                let imageSrc = array[i];
        
                htmlContentToAppend += `
                <div class="col-lg-3 col-md-4 col-6">
                    <div class="d-block mb-4 h-100">
                        <img class="img-fluid img-thumbnail" src="` + imageSrc + `" alt="">
                    </div>
                </div>
                `
        
                document.getElementById("productImagesGallery").innerHTML = htmlContentToAppend;
            }
        }



document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj) {
        if (resultObj.status === "ok") {
            category = resultObj.data;
            
            let categoryNameHTML  = document.getElementById("categoryName");
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
        }
    });
});


//función que carga los comentarios
document.addEventListener("DOMContentLoaded", function(e){
        getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj) {
            if (resultObj.status === "ok") {
                comments = resultObj.data;
                    var userComments = "";


                    for (i=0; i<comments.length; i++) {
                        var score = "";
                        for (x=1; x<=5; x++) { //función que realiza las estrellas en la valoración
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
                         
                         <small><p>`+ comments[i].description + `</p></small>
                         </div>`
                        

                        document.getElementById('comments').innerHTML = userComments;
                }

        }
    
        
    });
});

// productos relacionados
/* document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCTS_URL).then(function(resultObj) {
        if (resultObj.status === "ok") {
            product = resultObj.data;
               let html='';


               for(i=0; 0<product.length; i++){
               for(x=0; 0<product.relatedProducts; x++){
                   showRelatedProducts (product[relatedProducts[i]]);

               }
              
               }

               function showRelatedProducts(){
                    html += `
                    <div class="card" style="width: 18rem;">
                    <img src= `+ product.imgSrc +` class="card-img-top">
                    <div class="card-body">
                         <h5 class="card-title">` + product.name + `</h5>
                         <p class="card-text">` +product.description + `</p>
                         <a href="" class="btn btn-link"> ver </a>
                         </div>
                    </div>
                    `
               
               }
               document.getElementById("rel-items-cont").innerHTML = html;
               }          

        });
    }); */




