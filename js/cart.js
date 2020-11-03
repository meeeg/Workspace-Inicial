let SUCCESS_MSG = "¡Se ha realizado la compra con éxito! :)";
let ERROR_MSG = "Ha habido un error :(, verifica qué pasó.";


var cartArray = [];
showSpinner();

function showCartList(array) {

    let htmlContentToAppend = "";
    if (array.length > 0 ){
    for (let i = 0; i < array.length; i++) {
        let prodct = array[i];
        

        htmlContentToAppend += `
                        <tr>
                            <td><img height="50" src="` + prodct.src +`" /> </td>
                            <td>` + prodct.name + `</td>
                            <td id="productCostText">`+ prodct.unitCost + ' ' + prodct.currency +`</td>
                            <td><input id="pepe`+ i +`" type="number" onchange="subproductCosttoHTML()" min="0" value=`+ prodct.count +`></input></td>
                            <td class="text-right"><span class="subcostOfProduct"></span> ` + ' ' + prodct.currency + ` </td>
                            <td class="text-right"><button id="delete-button" class="btn btn-sm btn-danger" onclick="deleteProduct(`+ i +`);"><i class="fa fa-trash"></i> </button> </td>
                            </tr>
                            
    `
    }
     } else {
         htmlContentToAppend+= `<tr><td>El carrito está vacío</td></tr>`;
     }
    


        document.getElementById("cart-list-container").innerHTML = htmlContentToAppend;
        hideSpinner();
        subproductCosttoHTML();
        totalOfCosts();
    }



 function subproductCosttoHTML() {
    var unitCostProduct = 0;
    var numberOfSelectedProducts = 0; 
    
    for (let i = 0; i < cartArray.length; i++){
    unitCostProduct = parseInt(cartArray[i].unitCost);
    numberOfSelectedProducts = document.getElementById("pepe" + i).value;
    }

    subcost = unitCostProduct * numberOfSelectedProducts ;


document.querySelector(".subcostOfProduct").innerHTML = subcost; 


var e = document.getElementById("shipping");
var value = e.options[e.selectedIndex].value;

shippingprice = value * subcost ;
document.querySelector("#showShipping").innerHTML = shippingprice;
totalOfCosts();
} 

function totalOfCosts(){
    totalCost = shippingprice + subcost;
    document.querySelector("#totalCost").innerHTML = totalCost
}


function deleteProduct(index) {
    cartArray.splice(index, 1);
    showCartList(cartArray);
}



document.getElementById('validation').addEventListener("click",function(){

    //obtengo los campos
    var nameInput = document.getElementById("name");   
    var creditCard = document.getElementById("creditCard");     
    var cvcInput = document.getElementById("cvc");

//remuevo los inválidos
    nameInput.classList.remove('is-invalid');
    creditCard.classList.remove('is-invalid');
    cvcInput.classList.remove('is-invalid');

//remuevo los válidos
    nameInput.classList.remove('is-valid');
    creditCard.classList.remove('is-valid');
    cvcInput.classList.remove('is-valid');

   
//checkeo, si los campos estan vacios es  invalido, si los campos estan 
//rellenos es válido
    if (nameInput.value === ""){
        nameInput.classList.add('is-invalid');

    }else{
        nameInput.classList.add('is-valid');

    }

    if (creditCard.value === ""){
        creditCard.classList.add('is-invalid');
    }else{
        creditCard.classList.add('is-valid');
    }

    if (cvcInput.value === ""){
        cvcInput.classList.add('is-invalid');
    }else{
        cvcInput.classList.add('is-valid');
    }
});



//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e) {
    getJSONData(CART_INFO_URL).then(function(resultObj) {
        if (resultObj.status === "ok") {
            cartArray = resultObj.data.articles;
            //Muestro las categorías ordenadas
            showCartList(cartArray);
        }
    });
});

$("#prospects_form").submit(function(e) {
    e.preventDefault();
});