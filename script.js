// Save cart in localStorage
function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(name + " added to cart!");
}

function loadCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let cartItems = document.getElementById("cartItems");
  let total = 0;
  cartItems.innerHTML = "";
  cart.forEach((item, index) => {
    cartItems.innerHTML += `<p>${item.name} - ₹${item.price}</p>`;
    total += item.price;
  });
  document.getElementById("total").innerText = "Total: ₹" + total;
}

// Load cart on cart.html
if (window.location.pathname.includes("cart.html")) {
  window.onload = loadCart;
}
 function goToLogin() {
      // redirect to login page
      window.location.href = "login.html"; 
    }
