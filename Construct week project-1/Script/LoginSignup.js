const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");
const register = document.getElementById("register_user");
const login_user = document.getElementById("login_user");
const register_password = document.getElementById("register-password");
const login_email = document.getElementById("login_email");
const login_password = document.getElementById("login_password");
const register_username = document.getElementById("register-username");
const login_signup_card = document.getElementById("login_signup_card");

registerBtn.addEventListener("click", () => {
	container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
	container.classList.remove("active");
});

register.addEventListener("submit", (e) => {
	e.preventDefault(); // to prevent page refresh which happens by default with form submit event

	let username = register_username.value;
	let password = register_password.value;

	Register({
		password: password,
		username,
	});
});

login_user.addEventListener("submit", (e) => {
	e.preventDefault(); // to prevent page refresh which happens by default with form submit event

	let username = login_email.value;
	let password = login_password.value;

	Login({
		username,
		password,
	});
});

function Login(formData) {
	container.innerHTML = `
	<div class ="loading">
	<h1>Please wait</h1>
	<h1 class="loading_text">Loading...</h1>
	</div>
	`;
	setTimeout(() => {
		container.innerHTML = `
	<div class ="loading">
	<h1>Please wait</h1>
	<h1 class="loading_text">Work in Progress</h1>
	</div>
	`;
	}, 2000);
	fetch("https://greenmentors-assignment.onrender.com/api/auth/login", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(formData), //
	})
		.then((response) => response.json())
		.then((data) => {
			if (data.token == undefined) {
				container.append(login_signup_card);
			} else {
				localStorage.setItem("authenticate", data.token);
				localStorage.setItem("user", JSON.stringify(data.user));
				window.location.href = "../Pages/Home.html";
			}

			console.log(data.user);
			alert(`${data.message}.`);
		})
		.catch((err) => {
			alert(err.message);
			container.append(login_signup_card);
		});
}

const Register = (formData) => {
	container.innerHTML = `
	<div class ="loading">
	<h1>Please wait</h1>
	<h1 class="loading_text">Loading...</h1>
	</div>
	`;
	setTimeout(() => {
		container.innerHTML = `
	<div class ="loading">
	<h1>Please wait</h1>
	<h1 class="loading_text">Work in Progress</h1>
	</div>
	`;
	}, 2000);
	fetch("https://greenmentors-assignment.onrender.com/api/auth/register", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(formData), //
	})
		.then((response) => response.json())
		.then((data) => {
			container.append(login_signup_card);
			container.classList.remove("active");
			alert(`${data.message}😌.`);
		})
		.catch((err) => {
			alert(err.message);
			container.append(login_signup_card);
		});
};
