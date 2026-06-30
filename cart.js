const cartItems = document.getElementById("cart-items");

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let totalPrice=0;
cart.forEach((id) => {
  fetch(`https://dummyjson.com/products/${id}`)
    .then((response) => response.json())
    .then((product) => {
      cartItems.innerHTML += `
        <div class="card">
          <img src="${product.thumbnail}" width="150">
          <h2>${product.title}</h2>
          <h3>₹${product.price}</h3>
          <button onClick="removeFromCart(${id})">Remove</button>
        </div>
      `;
      totalPrice+=product.price;
      document.getElementById("totalItems").innerText=cart.length;
      document.getElementById("totalPrice").innerText=totalPrice.toFixed(2);
        });
});


function removeFromCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const index = cart.indexOf(id);

  if (index !== -1) {
    cart.splice(index, 1);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}