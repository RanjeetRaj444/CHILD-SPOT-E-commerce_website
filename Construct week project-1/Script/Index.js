const token = localStorage.getItem("authenticate");
if (token == null) {
	document.addEventListener("DOMContentLoaded", function () {
		window.location.href = "../Pages/LoginSignup.html";
	});
} else {
	document.addEventListener("DOMContentLoaded", function () {
		window.location.href = "../Pages/Home.html";
	});
}
