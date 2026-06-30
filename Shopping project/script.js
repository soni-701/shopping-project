const productContainer = document.getElementById("products");

fetch("https://dummyjson.com/products?limit=194")
  .then((response) => response.json())
  .then((data) => {
    displayProducts(data.products);
  });

function displayProducts(products) {

  products.forEach((product) => {

    productContainer.innerHTML += `
      <div class="card">

        <img src="${product.thumbnail}" alt="${product.title}">

        <h3>${product.title}</h3>

        <p>₹${product.price}</p>

        <button onClick="viewDetails(${product.id})">View Details</button>

      </div>
    `;

  });

}
function viewDetails(id){
    window.location.href=`product.html?id=${id}`;
}