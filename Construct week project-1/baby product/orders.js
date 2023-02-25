let order = JSON.parse(localStorage.getItem("order")) || [];

let middle = document.getElementById("middle");

function displayData(order) {
    middle.innerHTML=""
  order.forEach((element, index) => {
    let imageDiv = document.createElement("div");
    let product = document.createElement("div");
    let image = document.createElement("img");
    let detaiDiv = document.createElement("div");
    let name = document.createElement("h1");
    let price = document.createElement("h2");
    let result = document.createElement("h3");
    let recived = document.createElement("p");
    let remove = document.createElement("button");
    remove.innerText = "Remove";

    remove.addEventListener("click", () => {
      order = order.filter((ele, ind) => {
        return ind != index;
      });
      displayData(order);
      localStorage.setItem("order", JSON.stringify(order));
    });

    image.src = element.image;
    name.innerText = element.name;
    price.innerText = element.price;
    result.innerText = "Order SuccessFull";
    recived.innerText = "You will receved Product within 7 days.";
    imageDiv.append(image);
    detaiDiv.append(name, price, result, recived, remove);
    product.append(imageDiv, detaiDiv);
    middle.append(product);
  });
}
displayData(order);
