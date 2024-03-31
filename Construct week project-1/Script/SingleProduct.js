let buy = JSON.parse(localStorage.getItem("buy")) || [];
let order = JSON.parse(localStorage.getItem("order")) || [];
let data = JSON.parse(localStorage.getItem("detail")) || [];
let data2 = JSON.parse(localStorage.getItem("fav")) || [];

let imag = document.getElementById("imag");
let details = document.getElementById("details");

let right_container = document.querySelector(".right_container");
let left_container = document.querySelector(".left_container");

let left_Element = `
<div class="Image_container">
<img src=${buy[0].image} alt="product image"/>
</div>
<div class="btn_container">
<button id="buy_btn">BUY</button>
<button id="cart_btn">ADD TO CART</button>
<button id="fav_btn">ADD TO FAVOURITE</button>
</div>
`;

let right_element = `
<div class="product_name"><h2>${buy[0].name}</h2></div>
<div class="product_price">
<div><p style="color:green">Special price</p></div>
<div>
<h2>${buy[0].price}</h2>
<p style="color:gray;text-decoration:line-through;">$ 80</p>
<p style="color:green">86% off</p>
</div>
</div>
<div class="product_rating">
<p style="color:gray" class="rating">5,534 ratings and 200 reviews</p>
</div>
<div class="product_offer">
<h3>Available offers</h3>
<ul>
<li><span style="color:black">Bank Offer</span> Get ₹25* instant discount for the 1st Flipkart Order using Flipkart UPI <span style="color:rgb(88, 88, 254)">T&C</span></li>
<li><span style="color:black">Bank Offer</span> 10% off on Citi-branded Credit Card EMI Transactions, up to ₹2,000 on orders of ₹5,000 and above <span style="color:rgb(88, 88, 254)">T&C</span></li>
<li><span style="color:black">Bank Offer</span> 10% off on HSBC Bank Credit Card and EMI Transactions, up to ₹500 on orders of ₹5,000 and above <span style="color:rgb(88, 88, 254)">T&C</span></li>
<li><span style="color:black">Special Price</span> Get extra 10% off (price inclusive of cashback/coupon) <span style="color:rgb(88, 88, 254)">T&C</span></li>
</ul>
</div>
<div class="product_warranty">
<div><h4 style="color:gray">Warranty</h4></div>
<div><p>1 Year ANALOGUE INDIA Warranty</p></div>
</div>
<div  class="product_seler">
<div>
<h3 style="color:gray">Seller</h3>
</div>
<div>
<h3>ANALOGUE INDIA</h3>
<ul>
<li>10 days return policy</li>
</ul>

<h3>See other sellers</h3>
</div>
</div>
`;
right_container.innerHTML = right_element;
left_container.innerHTML = left_Element;

document.getElementById("cart_btn").addEventListener("click", function () {
	let obj = {
		name: buy[0].name,
		price: buy[0].price,
		image: buy[0].image,
	};
	data.push(obj);
	localStorage.setItem("detail", JSON.stringify(data));
	alert("Product added to the cart!");
});

document.getElementById("buy_btn").addEventListener("click", function () {
	let obj = {
		name: buy[0].name,
		price: buy[0].price,
		image: buy[0].image,
		orderAt: Date(Date.now()).toString(),
	};
	order.push(obj);
	localStorage.setItem("order", JSON.stringify(order));
	window.location.href = "./Payment.html";
});
document.getElementById("fav_btn").addEventListener("click", function () {
	let obj = {
		name: buy[0].name,
		price: buy[0].price,
		image: buy[0].image,
	};
	data2.push(obj);
	localStorage.setItem("fav", JSON.stringify(data2));
	alert("Product added to Favorites");
});
