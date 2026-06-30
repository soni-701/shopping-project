// Get product ID from URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// Select container
const productDetails = document.getElementById("product-details");

// Fetch single product
fetch(`https://dummyjson.com/products/${id}`)
  .then((response) => response.json())
  .then((product) => {
    displayProduct(product);
  });

// Display product
function displayProduct(product) {
  productDetails.innerHTML = `
    <div class="card">
      <img src="${product.thumbnail}" alt="${product.title}">
      <div class="info">
      <h2>${product.title}</h2>
      <p>${product.description}</p>
      <h3>₹${product.price}</h3>
      <p>⭐ ${product.rating}</p>

      <button onclick="addToCart(${product.id})">
        Add to Cart
      </button>
      <br><br>
      <button onClick="window.location.href='cart.html'">Go to cart</button>
    </div>
    </div>
  `;
}

// Add to Cart
function addToCart(id) {
  let cart=JSON.parse(localStorage.getItem("cart"))||[];
  cart.push(id);
  localStorage.setItem("cart",JSON.stringify(cart));
  alert("Product added to cart!");
}