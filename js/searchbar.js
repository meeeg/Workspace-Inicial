const productList = document.getElementById('cat-list-container');
const searchBar = document.getElementById('searchBar');
let productsArray = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredProducts = productsArray.filter((product) => {
        return (
            product.name.toLowerCase().includes(searchString)
        );
    });
    displayProducts(filteredProducts);
});

const loadProducts = async () => {
    try {
        const res = await fetch('https://japdevdep.github.io/ecommerce-api/product/all.json');
        productsArray = await res.json();
        displayProducts(productsArray);
    } catch (err) {
        console.error(err);
    }
};

const displayProducts = (products) => {
    const htmlString = products
        .map((aproduct) => {
            return `
             <div class="card slide-in-blurred-bottom" style="width: 15rem;">
                <img class="card-img-top" src="` + aproduct.imgSrc + `" alt="` + aproduct.description + `">
                <div class="card-body">
                  <h5 class="card-title">` + aproduct.name + `</h5>
                  <p class="card-text"> ` + aproduct.currency + ' ' + aproduct.cost + `</p>
                  <p class="card-text"><small class="text-muted">Cantidad de vendidos: ` + aproduct.soldCount + `</small></p>
                </div>
              </div>
        `;
        })
        .join('');
    productList.innerHTML = htmlString;
};

loadProducts();