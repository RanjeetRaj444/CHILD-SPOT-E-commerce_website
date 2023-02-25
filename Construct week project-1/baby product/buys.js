let buy=JSON.parse(localStorage.getItem("buy"))||[];

let imag=document.getElementById("imag")
let details=document.getElementById("details")


buy.forEach((element) => {
    let image=document.createElement("img")
    image.src=element.image;
    imag.append(image)

    let price=document.createElement("h1");
    let name=document.createElement("h2");
    let size=document.createElement("div");
    let one=document.createElement("p");
    let two=document.createElement("p");
    let three=document.createElement("p");
    let four=document.createElement("p");
    let five=document.createElement("p");
    let six=document.createElement("p");
    let seven=document.createElement("p");
    let buy=document.createElement("button");
    buy.innerText="Buy"
    let cart=document.createElement("button");
    cart.innerText="Add to Cart"
    price.innerText=element.price;
    name.innerText=element.name;
    one.innerText="NB"
    two.innerText="3M"
    three.innerText="6M"
    four.innerText="9M"
    five.innerText="12M"
    six.innerText="18M"
    seven.innerText="24M"
    size.append(one,two,three,four,five,six,seven)
    details.append(price,name,size,buy,cart)
});


