let apiData = [
	{
		id: 1,
		name: "Baby 2-Pack Cotton Pants",
		size: "P",
		style: "Short",
		brand: "Child Spot",
		length: "Long Leg",
		image:
			"https://cdn-fsly.yottaa.net/578855e32bb0ac10350004f8/www.carters.com/v~4b.2a7/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dwaaa032b5/productimages/1P250910.jpg?sw=354&sh=444&yocs=g_j_",
		price: "$16.50",
	},
	{
		id: 2,
		name: "2-Pack Tumbling Shorts",
		size: "NB",
		style: "2-Pack Bottoms",
		brand: "OshKosh B'gosh",
		length: "Short Leg",
		image:
			"https://cdn-fsly.yottaa.net/578855e32bb0ac10350004f8/www.carters.com/v~4b.2a7/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dwcdbbca51/productimages/1J403510.jpg?sw=354&sh=444&yocs=g_j_",
		price: "$12.00",
	},
	{
		id: 3,
		name: "Baby Hilary Duff Rays And Rainbows Crinkle Gauze Shorts",
		size: "3M",
		style: "Playground & Biker Short",
		brand: "Little Planet",
		length: "Long Leg",
		image:
			"https://cdn-fsly.yottaa.net/578855e32bb0ac10350004f8/www.carters.com/v~4b.2a7/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dwbb425159/productimages/1O915610.jpg?sw=354&sh=444&yocs=g_j_",
		price: "$13.00",
	},
	{
		id: 4,
		name: "Baby Pull-On Cotton Shorts",
		size: "6M",
		style: "Skirts & Skorts",
		brand: "Child Spot",
		length: "Short Leg",
		image:
			"https://cdn-fsly.yottaa.net/578855e32bb0ac10350004f8/www.carters.com/v~4b.2a7/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw4b381a2c/productimages/1O899110.jpg?sw=354&sh=444&yocs=g_j_",
		price: "$14.00",
	},
	{
		id: 5,
		name: "Baby Polka Dot Bike Shorts",
		size: "9M",
		style: "Short Sets",
		brand: "OshKosh B'gosh",
		length: "Long Leg",
		image:
			"https://cdn-fsly.yottaa.net/578855e32bb0ac10350004f8/www.carters.com/v~4b.2a7/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw3fc003d1/productimages/1L789212.jpg?sw=354&sh=444&yocs=g_j_",
		price: "$15.00",
	},
	{
		id: 6,
		name: "Baby Organic Cotton Gauze Shorts",
		size: "12M",
		style: "Short",
		brand: "Little Planet",
		length: "Short Leg",
		image:
			"https://cdn-fsly.yottaa.net/578855e32bb0ac10350004f8/www.carters.com/v~4b.2a7/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw11d052ba/productimages/1L789210.jpg?sw=354&sh=444&yocs=g_j_",
		price: "$16.00",
	},
	{
		id: 7,
		name: "Baby Polka Dot Bike Shorts",
		size: "18M",
		style: "2-Pack Bottoms",
		brand: "Child Spot",
		length: "Long Leg",
		image:
			"https://cdn-fsly.yottaa.net/578855e32bb0ac10350004f8/www.carters.com/v~4b.2a7/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw7cd12a9e/productimages/1L789215.jpg?sw=354&sh=444&yocs=g_j_",
		price: "$17.00",
	},
	{
		id: 8,
		name: "Baby Polka Dot Bike Shorts",
		size: "24M",
		style: "Playground & Biker Short",
		brand: "OshKosh B'gosh",
		length: "Short Leg",
		image:
			"https://cdn-fsly.yottaa.net/578855e32bb0ac10350004f8/www.carters.com/v~4b.2a7/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dwdc554423/productimages/1O898910.jpg?sw=354&sh=444&yocs=g_j_",
		price: "$18.00",
	},
	{
		id: 9,
		name: "Baby Pull-On Cotton Shorts",
		size: "P",
		style: "Skirts & Skorts",
		brand: "Little Planet",
		length: "Long Leg",
		image:
			"https://cdn-fsly.yottaa.net/578855e32bb0ac10350004f8/www.carters.com/v~4b.2a7/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dwa38ea02b/productimages/1P237510.jpg?sw=354&sh=444&yocs=g_j_",
		price: "$19.00",
	},
	{
		id: 10,
		name: "Baby Striped Bike Shorts",
		size: "NB",
		style: "Short Sets",
		brand: "Child Spot",
		length: "Short Leg",
		image:
			"https://cdn-fsly.yottaa.net/578855e32bb0ac10350004f8/www.carters.com/v~4b.2a7/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dwc302e8b5/productimages/1O932611.jpg?sw=354&sh=444&yocs=g_j_",
		price: "$11.00",
	},
	{
		id: 11,
		name: "Baby 2-Pack Organic Cotton Shorts",
		size: "3M",
		style: "Short",
		brand: "OshKosh B'gosh",
		length: "Long Leg",
		image:
			"https://cdn-fsly.yottaa.net/578855e32bb0ac10350004f8/www.carters.com/v~4b.2a7/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dwf336f237/productimages/1O932612.jpg?sw=354&sh=444&yocs=g_j_",
		price: "$12.00",
	},
	{
		id: 12,
		name: "Baby Floral Pull-On French Terry shorts",
		size: "6M",
		style: "2-Pack Bottoms",
		brand: "Little Planet",
		length: "Short Leg",
		image:
			"https://cdn-fsly.yottaa.net/578855e32bb0ac10350004f8/www.carters.com/v~4b.2a7/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dwe29635ec/productimages/1P086610.jpg?sw=354&sh=444&yocs=g_j_",
		price: "$13.00",
	},
	{
		id: 13,
		name: "Baby Striped Bike Shorts",
		size: "",
		style: "Playground & Biker Short",
		brand: "Child Spot",
		length: "Long Leg",
		image:
			"https://cdn-fsly.yottaa.net/578855e32bb0ac10350004f8/www.carters.com/v~4b.2a7/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dwe83831e6/productimages/1K596110.jpg?sw=354&sh=444&yocs=g_j_",
		price: "$14.00",
	},
	{
		id: 14,
		name: "Baby Pull-On French Terry Shorts",
		size: "12M",
		style: "Skirts & Skorts",
		brand: "OshKosh B'gosh",
		length: "Short Leg",
		image:
			"https://cdn-fsly.yottaa.net/578855e32bb0ac10350004f8/www.carters.com/v~4b.2a7/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw11d052ba/productimages/1L789210.jpg?sw=354&sh=444&yocs=g_j_",
		price: "$15.00",
	},
	{
		id: 15,
		name: "Baby Pull-On French Terry Shorts",
		size: "18M",
		style: "Short Sets",
		brand: "Little Planet",
		length: "Long Leg",
		image:
			"https://cdn-fsly.yottaa.net/578855e32bb0ac10350004f8/www.carters.com/v~4b.2a7/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw13f2e524/productimages/CARS21BG3PKSIMPBS1.jpg?sw=354&sh=444&yocs=g_j_",
		price: "$16.00",
	},
	{
		id: 16,
		name: "Baby Pull-On French Terry Shorts",
		size: "24M",
		style: "Short",
		brand: "Child Spot",
		length: "Short Leg",
		image:
			"https://cdn-fsly.yottaa.net/578855e32bb0ac10350004f8/www.carters.com/v~4b.2a7/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dwa4ab800c/productimages/1J403610.jpg?sw=354&sh=444&yocs=g_j_",
		price: "$17.00",
	},
	{
		id: 17,
		name: "Baby Pull-On French Terry Shorts",
		size: "P",
		style: "2-Pack Bottoms",
		brand: "OshKosh B'gosh",
		length: "Long Leg",
		image:
			"https://cdn-fsly.yottaa.net/578855e32bb0ac10350004f8/www.carters.com/v~4b.2a7/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw7cd12a9e/productimages/1L789215.jpg?sw=354&sh=444&yocs=g_j_",
		price: "$18.00",
	},
	{
		id: 18,
		name: "2-Pack Bike Shorts",
		size: "NB",
		style: "Playground & Biker Short",
		brand: "Little Planet",
		length: "Short Leg",
		image:
			"https://cdn-fsly.yottaa.net/578855e32bb0ac10350004f8/www.carters.com/v~4b.2a7/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dwdc554423/productimages/1O898910.jpg?sw=354&sh=444&yocs=g_j_",
		price: "$19.00",
	},
	{
		id: 19,
		name: "Baby Pull-On French Terry Shorts",
		size: "3M",
		style: "Skirts & Skorts",
		brand: "Child Spot",
		length: "Long Leg",
		image:
			"https://cdn-fsly.yottaa.net/578855e32bb0ac10350004f8/www.carters.com/v~4b.2a7/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dwa38ea02b/productimages/1P237510.jpg?sw=354&sh=444&yocs=g_j_",
		price: "$11.00",
	},
	{
		id: 20,
		name: "Baby Aztec Pull-On French Terry Shorts",
		size: "6M",
		style: "Short Sets",
		brand: "OshKosh B'gosh",
		length: "Short Leg",
		image:
			"https://cdn-fsly.yottaa.net/578855e32bb0ac10350004f8/www.carters.com/v~4b.2a7/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dwc302e8b5/productimages/1O932611.jpg?sw=354&sh=444&yocs=g_j_",
		price: "$12.00",
	},
	{
		id: 21,
		name: "Baby Organic Cotton Gauze Shorts",
		size: "9M",
		style: "Short",
		brand: "Little Planet",
		length: "Long Leg",
		image:
			"https://cdn-fsly.yottaa.net/578855e32bb0ac10350004f8/www.carters.com/v~4b.2a7/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dwf336f237/productimages/1O932612.jpg?sw=354&sh=444&yocs=g_j_",
		price: "$13.00",
	},
	{
		id: 22,
		name: "2-Pack Tumbling Shorts",
		size: "12M",
		style: "2-Pack Bottoms",
		brand: "Child Spot",
		length: "Short Leg",
		image:
			"https://cdn-fsly.yottaa.net/578855e32bb0ac10350004f8/www.carters.com/v~4b.2a7/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw11d052ba/productimages/1L789210.jpg?sw=354&sh=444&yocs=g_j_",
		price: "$14.00",
	},
	{
		id: 23,
		name: "3-Pack Bike Shorts",
		size: "9M",
		style: "Playground & Biker Short",
		brand: "OshKosh B'gosh",
		length: "Long Leg",
		image:
			"https://cdn-fsly.yottaa.net/578855e32bb0ac10350004f8/www.carters.com/v~4b.2a7/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dwe29635ec/productimages/1P086610.jpg?sw=354&sh=444&yocs=g_j_",
		price: "$15.00",
	},
	{
		id: 24,
		name: "Baby 3-Pack Ruffle Diaper Cover",
		size: "24M",
		style: "Skirts & Skorts",
		brand: "Little Planet",
		length: "Short Leg",
		image:
			"https://cdn-fsly.yottaa.net/578855e32bb0ac10350004f8/www.carters.com/v~4b.2a7/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dwe83831e6/productimages/1K596110.jpg?sw=354&sh=444&yocs=g_j_",
		price: "$16.00",
	},
	{
		id: 25,
		name: "",
		size: "P",
		style: "Short",
		brand: "Child Spot",
		length: "Long Leg",
		image:
			"https://cdn-fsly.yottaa.net/578855e32bb0ac10350004f8/www.carters.com/v~4b.2a7/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw13f2e524/productimages/CARS21BG3PKSIMPBS1.jpg?sw=354&sh=444&yocs=g_j_",
		price: "$17.00",
	},
	{
		id: 26,
		name: "Baby Bike Shorts",
		size: "NB",
		style: "Short Sets",
		brand: "OshKosh B'gosh",
		length: "Long Leg",
		image:
			"https://cdn-fsly.yottaa.net/578855e32bb0ac10350004f8/www.carters.com/v~4b.2a7/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dwa4ab800c/productimages/1J403610.jpg?sw=354&sh=444&yocs=g_j_",
		price: "$18.00",
	},
	{
		id: 27,
		name: "Baby Organic Cotton Drawstring Shorts",
		size: "3M",
		style: "2-Pack Bottoms",
		brand: "Little Planet",
		length: "Short Leg",
		image:
			"https://cdn-fsly.yottaa.net/578855e32bb0ac10350004f8/www.carters.com/v~4b.2a7/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw7cd12a9e/productimages/1L789215.jpg?sw=354&sh=444&yocs=g_j_",
		price: "$19.00",
	},
	{
		id: 28,
		name: "Baby 2-Pack Bubble Shorts",
		size: "6M",
		style: "Playground & Biker Short",
		brand: "Child Spot",
		length: "Long Leg",
		image:
			"https://cdn-fsly.yottaa.net/578855e32bb0ac10350004f8/www.carters.com/v~4b.2a7/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dwdc554423/productimages/1O898910.jpg?sw=354&sh=444&yocs=g_j_",
		price: "$11.00",
	},
	{
		id: 29,
		name: "Baby 2-Pack Tumbling Shorts",
		size: "",
		style: "Skirts & Skorts",
		brand: "OshKosh B'gosh",
		length: "Short Leg",
		image:
			"https://cdn-fsly.yottaa.net/578855e32bb0ac10350004f8/www.carters.com/v~4b.2a7/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dwa38ea02b/productimages/1P237510.jpg?sw=354&sh=444&yocs=g_j_",
		price: "$12.00",
	},
	{
		id: 30,
		name: "2-Pack Tumbling Shorts",
		size: "12M",
		style: "Short",
		brand: "Little Planet",
		length: "Long Leg",
		image:
			"https://cdn-fsly.yottaa.net/578855e32bb0ac10350004f8/www.carters.com/v~4b.2a7/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dwc302e8b5/productimages/1O932611.jpg?sw=354&sh=444&yocs=g_j_",
		price: "$13.00",
	},
	{
		id: 31,
		name: "Baby Pull-On Denim Shorts",
		size: "9M",
		style: "Short Sets",
		brand: "Child Spot",
		length: "Short Leg",
		image:
			"https://cdn-fsly.yottaa.net/578855e32bb0ac10350004f8/www.carters.com/v~4b.2a7/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dwf336f237/productimages/1O932612.jpg?sw=354&sh=444&yocs=g_j_",
		price: "$14.00",
	},
	{
		id: 32,
		name: "Baby Pull-On Chambray Shorts",
		size: "P",
		style: "2-Pack Bottoms",
		brand: "Little Planet",
		length: "Long Leg",
		image:
			"https://cdn-fsly.yottaa.net/578855e32bb0ac10350004f8/www.carters.com/v~4b.2a7/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw11d052ba/productimages/1L789210.jpg?sw=354&sh=444&yocs=g_j_",
		price: "$15.00",
	},
];

let data = JSON.parse(localStorage.getItem("detail")) || [];
let data2 = JSON.parse(localStorage.getItem("fav")) || [];
let buy = JSON.parse(localStorage.getItem("buy")) || [];

let displayData = document.getElementById("displayData");
let size = document.getElementById("size");
let brand = document.getElementById("brand");
let style = document.getElementById("style");
let length = document.getElementById("length");
let price = document.getElementById("price");

size.addEventListener("change", () => {
	if (size.value == "") {
		displayDatas(apiData);
	} else {
		let bag = apiData.filter((element) => {
			return element.size == size.value;
		});
		displayDatas(bag);
	}
});
brand.addEventListener("change", () => {
	if (brand.value == "") {
		displayDatas(apiData);
	} else {
		let bag = apiData.filter((element) => {
			return element.brand == brand.value;
		});
		displayDatas(bag);
	}
});
style.addEventListener("change", () => {
	if (style.value == "") {
		displayDatas(apiData);
	} else {
		let bag = apiData.filter((element) => {
			return element.style == style.value;
		});
		displayDatas(bag);
	}
});
length.addEventListener("change", () => {
	if (length.value == "") {
		displayDatas(apiData);
	} else {
		let bag = apiData.filter((element) => {
			return element.length == length.value;
		});
		displayDatas(bag);
	}
});
price.addEventListener("change", () => {
	if (price.value == "") {
		displayDatas(apiData);
	} else {
		let bag = apiData.filter((element) => {
			return element.price == price.value;
		});
		displayDatas(bag);
	}
});

function displayDatas(apiData) {
	displayData.innerHTML = "";
	apiData.forEach((element) => {
		let div = document.createElement("div");
		let image = document.createElement("img");
		let price = document.createElement("h3");
		let name = document.createElement("h4");
		let brand = document.createElement("p");
		let button = document.createElement("button");
		image.src = element.image;
		price.innerText = element.price;
		name.innerText = element.name;
		brand.innerText = "Child Spot | Baby";
		button.innerText = "View";

		div.addEventListener("click", () => {
			buy = [];
			let obj = {
				name: element.name,
				price: element.price,
				image: element.image,
			};
			buy.push(obj);
			localStorage.setItem("buy", JSON.stringify(buy));
			window.location.href = "./SingleProduct.html";
		});
		button.addEventListener("click", () => {
			buy = [];
			let obj = {
				name: element.name,
				price: element.price,
				image: element.image,
			};
			buy.push(obj);
			localStorage.setItem("buy", JSON.stringify(buy));
			window.location.href = "./SingleProduct.html";
		});
		div.append(image, price, name, brand, button);

		displayData.append(div);
	});
}
displayDatas(apiData);
