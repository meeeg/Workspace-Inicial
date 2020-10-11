var cartArray = [];
showSpinner();

function showCartList(array) {

    let htmlContentToAppend = "";
    for (let i = 0; i < array.length; i++) {
        let prodct = array[i];

        htmlContentToAppend += `
                        <tr>
                            <td><img height="50" src="` + prodct.src +`" /> </td>
                            <td>` + prodct.name + `</td>
                            <td id="productCostText">`+ prodct.unitCost + ' ' + prodct.currency +`</td>
                            <td><input id="pepe`+ i +`" type="number" onchange="productCosttoHTML()" value=`+ prodct.count +`></input></td>
                            <td class="text-right"><span class="totalCostOfProduct"></span> ` + ' ' + prodct.currency + ` </td>
                            <td class="text-right"><button class="btn btn-sm btn-danger"><i class="fa fa-trash"></i> </button> </td>
                            </tr>
                            
    `

        document.getElementById("cart-list-container").innerHTML = htmlContentToAppend;
        hideSpinner();
        productCosttoHTML();
    }
}


 function productCosttoHTML() {
    var unitCostProduct = 0;
    var numberOfSelectedProducts = 0; 
    
    for (let i = 0; i < cartArray.length; i++){
    unitCostProduct = parseInt(cartArray[i].unitCost);
    numberOfSelectedProducts = document.getElementById("pepe" + i).value;
    }

    totalCost = unitCostProduct * numberOfSelectedProducts ;


document.querySelector(".totalCostOfProduct").innerHTML = totalCost; 
document.querySelector(".totalTotalCostOfProduct").innerHTML = totalCost;
document.querySelector(.)
} 


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

