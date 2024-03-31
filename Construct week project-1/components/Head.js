let navbar = document.getElementById("navbar");

let navbarContent = `
  <div class="logo">
    <a href="./Home.html"><img src="/assets/Child_spot2.png" alt=""/></a>
  </div>
  <nav class="nav-links">
    <ul>
      <li><a href="./Home.html">Home</a></li>
      <li><a href="./Product.html">Products</a></li>
      <li class="about"><a href="#" >About </a></li>
      <li class="about"><a href="#" >Contact </a></li>
    </ul>
  </nav>
  <div class="logo_profile_container">
  <div class="search-box">
    <input type="text" placeholder="Search">
    <button type="submit">Search</button>
  </div>
  <div class="profile" id="profile">
  <div id="right">
  <a href="./Profile.html"
    ><img
      src="https://w7.pngwing.com/pngs/505/761/png-transparent-login-computer-icons-avatar-icon-monochrome-black-silhouette.png"
      alt="error"
    />
    <p id="Login_Profile"></p>
  </a>
  <a href="./Favourite.html"
    ><img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Heart-SG2001-transparent.png/640px-Heart-SG2001-transparent.png"
      alt=""
    />
    <p class="Heart_text">Hearts</p>
  </a>
  <a href="./Order.html"
    ><img
      src="https://w7.pngwing.com/pngs/366/18/png-transparent-amazon-com-order-fulfillment-sales-service-others-miscellaneous-angle-rectangle.png"
      alt=""
    />
    <p class="Order_text">Orders</p>
  </a>
  <a class="Cart_logo" href="./cart.html"
    ><img
      src="https://e7.pngegg.com/pngimages/833/426/png-clipart-shopping-cart-icon-shopping-cart-black-design.png"
      alt=""
    />
  </a>
</div>
  </div>
  </div>
`;

navbar.innerHTML = navbarContent;

const token = localStorage.getItem("authenticate");
if (token) {
	document.getElementById("Login_Profile").innerText = "Profile";
} else {
	document.getElementById("Login_Profile").innerText = "Login";
}
