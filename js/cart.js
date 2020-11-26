let SUCCESS_MSG = "¡Se ha realizado la compra con éxito! :)";
let ERROR_MSG = "Ha habido un error :(, verifica qué pasó.";


var cartArray = [];
showSpinner();

function showCartList(array) {

    let htmlContentToAppend = "";
    if (array.length > 0) {
        for (let i = 0; i < array.length; i++) {
            let prodct = array[i];


            htmlContentToAppend += `
                        <tr>
                            <td><img height="50" src="` + prodct.src + `" /> </td>
                            <td>` + prodct.name + `</td>
                            <td id="productCostText">` + prodct.unitCost + ' ' + prodct.currency + `</td>
                            <td><input id="pepe` + i + `" type="number" onchange="subproductCosttoHTML(); getData();"  min="0" value=` + prodct.count + `></input></td>
                            <td class="text-right"><span class="subcostOfProduct"></span> ` + ' ' + prodct.currency + ` </td>
                            <td class="text-right"><button id="delete-button" class="btn btn-sm btn-danger" onclick="deleteProduct(` + i + `);"><i class="fa fa-trash"></i> </button> </td>
                            </tr>
                            
    `
        }
    } else {
        htmlContentToAppend += `<td class="text-center" colspan="5"><h5><strong>El carrito está vacío<strong><h5><td>`;
    }



    document.getElementById("cart-list-container").innerHTML = htmlContentToAppend;
    hideSpinner();
    subproductCosttoHTML();
    totalOfCosts();
}



function subproductCosttoHTML() {
    var unitCostProduct = 0;
    var numberOfSelectedProducts = 0;
    if (cartArray.length > 0) {

        for (let i = 0; i < cartArray.length; i++) {
            unitCostProduct = parseInt(cartArray[i].unitCost);
            numberOfSelectedProducts = document.getElementById("pepe" + i).value;
            localStorage.setItem("cantidad", numberOfSelectedProducts)
        }

        subcost = unitCostProduct * numberOfSelectedProducts;


        document.querySelector(".subcostOfProduct").innerHTML = subcost;


        var e = document.getElementById("shipping");
        var value = e.options[e.selectedIndex].value;

        shippingprice = value * subcost;
        document.querySelector("#showShipping").innerHTML = shippingprice;
        totalOfCosts();
        var typeOfShipping = e.options[e.selectedIndex].text;
        localStorage.setItem("envio", typeOfShipping);
    }
}

function totalOfCosts() {
    if (cartArray.length > 0) {
        totalCost = shippingprice + subcost;
        document.querySelector("#totalCost").innerHTML = totalCost
    }
}

function deleteProduct(index) {
    cartArray.splice(index, 1);
    showCartList(cartArray);
    var shipRow = document.getElementById("ship-row");
    shipRow.remove();
    var ctRow = document.getElementById("ct-row");
    ctRow.remove();
}



document.getElementById('validation').addEventListener("click", function () {

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
    if (nameInput.value === "") {
        nameInput.classList.add('is-invalid');

    } else {
        nameInput.classList.add('is-valid');

    }

    if (creditCard.value === "") {
        creditCard.classList.add('is-invalid');
    } else {
        creditCard.classList.add('is-valid');
    }

    if (cvcInput.value === "") {
        cvcInput.classList.add('is-invalid');
    } else {
        cvcInput.classList.add('is-valid');
    }
});



//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(CART_INFO_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            cartArray = resultObj.data.articles;
            //Muestro las categorías ordenadas
            showCartList(cartArray);
        }
    });
});

//esta función es para que no se envíe el form
$("#prospects_form").submit(function (e) {
    e.preventDefault();
});

function getData() {

    //obtengo los datos de pago
    var nameInput = document.getElementById("name");
    var creditCard = document.getElementById("creditCard");
    var cvcInput = document.getElementById("cvc");
    localStorage.setItem("nombreEnvio", nameInput.value);
    localStorage.setItem("cc", creditCard.value);
    localStorage.setItem("cvc", cvcInput.value)

    var e = document.getElementById("shipping");
    var typeOfShipping = e.options[e.selectedIndex].text;
    localStorage.setItem("envio", typeOfShipping);

    //obtengo los costos
    localStorage.setItem("costoTotal", totalCost);
    localStorage.setItem("costoEnvio", shippingprice);

    //obtengo los items del carrito
    localStorage.setItem("itemComprado", (cartArray[0].name));
}

