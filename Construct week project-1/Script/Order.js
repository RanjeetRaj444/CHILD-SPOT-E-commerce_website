let order = JSON.parse(localStorage.getItem("order")) || [];

let middle = document.getElementById("displayData");
function displayData(order) {
	middle.innerHTML = "";
	if (order.length == 0) {
		middle.innerHTML = `
        <div style="display:flex; justify-content:center; align-items:center; height:15vh;">
        <p>You haven't order items yet.</p>
        </div>
        `;
	} else {
		order.forEach((element, index) => {
			let imageDiv = document.createElement("div");
			let product = document.createElement("div");
			let image = document.createElement("img");
			let detaiDiv = document.createElement("div");
			let name = document.createElement("h1");
			let price = document.createElement("h2");
			let result = document.createElement("h3");
			let recived = document.createElement("p");
			let oderAt = document.createElement("P");
			let remove = document.createElement("button");
			remove.innerText = "Remove";
			detaiDiv.classList.add("detail-info");
			imageDiv.classList.add("image-container");
			remove.addEventListener("click", () => {
				order = order.filter((ele, ind) => {
					return ind != index;
				});
				displayData(order);
				localStorage.setItem("order", JSON.stringify(order));
			});
			oderAt.innerText = `Order at :- ${element.orderAt}`;
			image.src = element.image;
			name.innerText = element.name;
			price.innerText = element.price;
			result.innerText = "Order SuccessFull";
			recived.innerText = "You will receved Product within 7 days.";
			imageDiv.append(image);
			detaiDiv.append(name, price, result, oderAt, recived, remove);
			product.append(imageDiv, detaiDiv);
			middle.append(product);
		});
	}
}
displayData(order);
