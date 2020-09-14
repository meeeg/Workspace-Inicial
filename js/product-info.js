//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
var category = {};


        function showImagesGallery(array){

            let htmlContentToAppend = "";
        
            for(let i = 0; i < array.length; i++){
                let imageSrc = array[i];
                if(i==0){
                    htmlContentToAppend +=`
    <div class="carousel-item active">
      <img src="` + imageSrc +`"class="d-block w-100" alt="...">
    </div>
`
                }else{
                    htmlContentToAppend +=`
                    <div class="carousel-item ">
                      <img src="` + imageSrc +`"class="d-block w-100" alt="...">
                    </div>
                `
                }

            
                 /*`
                <div class="col-lg-3 col-md-4 col-6">
                    <div class="d-block mb-4 h-100">
                        <img class="img-fluid img-thumbnail" src="` + imageSrc + `" alt="">
                    </div>
                </div>
                `*/
        
                document.getElementById("carrousel-car").innerHTML = htmlContentToAppend;
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

            getJSONData(PRODUCTS_URL).then(function(resultObj) {
                if (resultObj.status === "ok") {
                    product = resultObj.data;
                       let html='';
        
        
                       for(i=0; i<category.relatedProducts.length; i++){
                           showRelatedProducts(product[category.relatedProducts[i]]);
                       }
                      
                       
        
                       function showRelatedProducts(productInfo){
                            html += `
                            <div class="row">
  <div class="column">
                            <div class="card" style="width: 18rem;" >
                            <img src= `+ productInfo.imgSrc +` class="card-img-top">
                            <div class="card-body">
                                 <h5 class="card-title">` + productInfo.name + `</h5>
                                 <p class="card-text">` +productInfo.description + `</p>
                                 <a href="" class="btn btn-link"> ver </a>
                                 </div>
                            </div>
                            </div>
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

