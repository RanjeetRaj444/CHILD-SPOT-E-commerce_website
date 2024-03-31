let data = JSON.parse(localStorage.getItem("detail")) || [];
let data2 = JSON.parse(localStorage.getItem("fav")) || [];
let order = JSON.parse(localStorage.getItem("order")) || [];
let displayData = document.getElementById("displayData");
let size = document.getElementById("size");
let brand = document.getElementById("brand");
let style = document.getElementById("style");
let length = document.getElementById("length");
let price = document.getElementById("price");

size.addEventListener("change", () => {
	if (size.value == "") {
		displayDatas(data);
	} else {
		let bag = data.filter((element) => {
			return element.size == size.value;
		});
		displayDatas(bag);
	}
});
brand.addEventListener("change", () => {
	if (brand.value == "") {
		displayDatas(data);
	} else {
		let bag = data.filter((element) => {
			return element.brand == brand.value;
		});
		displayDatas(bag);
	}
});
style.addEventListener("change", () => {
	if (style.value == "") {
		displayDatas(data);
	} else {
		let bag = data.filter((element) => {
			return element.style == style.value;
		});
		displayDatas(bag);
	}
});
length.addEventListener("change", () => {
	if (length.value == "") {
		displayDatas(data);
	} else {
		let bag = data.filter((element) => {
			return element.length == length.value;
		});
		displayDatas(bag);
	}
});
price.addEventListener("change", () => {
	if (price.value == "") {
		displayDatas(data);
	} else {
		let bag = data.filter((element) => {
			return element.price == price.value;
		});
		displayDatas(bag);
	}
});

function displayDatas(data) {
	displayData.innerHTML = "";
	data.forEach((element, index) => {
		let div = document.createElement("div");
		let image = document.createElement("img");
		let price = document.createElement("h3");
		let name = document.createElement("h4");
		let brand = document.createElement("p");
		let button = document.createElement("button");
		let remove = document.createElement("button");
		let fav = document.createElement("button");
		let img = document.createElement("img");
		img.src =
			"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Heart-SG2001-transparent.png/640px-Heart-SG2001-transparent.png";
		image.src = element.image;
		price.innerText = element.price;
		name.innerText = element.name;
		brand.innerText = "Child Spot | Baby";
		button.innerText = "Buy";
		remove.innerText = "Remove";
		fav.append(img);

		button.addEventListener("click", () => {
			let obj = {
				name: element.name,
				image: element.image,
				price: element.price,
				orderAt:Date(Date.now()).toString()
			};
			order.push(obj);
			localStorage.setItem("order", JSON.stringify(order));
			window.location.href = "./Payment.html";
		});

		fav.addEventListener("click", () => {
			//   data2=[];
			let obj = {
				name: element.name,
				price: element.price,
				image: element.image,
			};
			data2.push(obj);
			localStorage.setItem("fav", JSON.stringify(data2));
			//  window.location.href="./baby_main_page.html"
		});

		remove.addEventListener("click", () => {
			data = data.filter((ele, ind) => {
				return ind != index;
			});
			displayDatas(data);
			localStorage.setItem("detail", JSON.stringify(data));
		});

		div.append(image, price, name, brand, button, fav, remove);

		displayData.append(div);
	});
}
displayDatas(data);
