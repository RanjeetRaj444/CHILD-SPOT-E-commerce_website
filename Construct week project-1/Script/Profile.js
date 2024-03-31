const storedUser = JSON.parse(localStorage.getItem("user"));
document.querySelector(".profile-name").innerText = `${storedUser.username}`;
document.querySelector(
	".profile-info",
).innerText = `Email: ${storedUser.username}@gmail.com`;
