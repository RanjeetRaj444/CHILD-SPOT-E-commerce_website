function submitForm() {
	document.getElementById("loader").style.display = "block";
	setTimeout(function () {
		alert("Payment Success😀");
		document.getElementById("loader").style.display = "none";
		// Here you can perform form submission or any other action
	}, 2000); // Simulating a 2-second delay
}

document
	.getElementById("Cancle_payment")
	.addEventListener("click", function () {
		window.location.href = "./SingleProduct.html";
	});
