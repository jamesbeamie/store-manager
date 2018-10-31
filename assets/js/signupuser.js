document.getElementById("regattendant").addEventListener("submit",regattendant);
function regattendant(e){
	e.preventDefault();
	let username = document.getElementById("username").value;
	let password = document.getElementById("password").value;
	let confirmpass = document.getElementById("confirmpass").value;
	let address = document.getElementById("address").value;
	let role = document.getElementById("role").value;

	let userTok = localStorage.getItem("token")
	fetch('https://jayme-store.herokuapp.com/api/v2/attendant/signup', {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"Authorization": "Bearer "+userTok
		},
		body: JSON.stringify({
			username:username,
			password:password,
			confirmpass:confirmpass,
			addres:address,
			role:role
		}),
	})
	.then((res) => res.json())
	.then(function (res) {
		localStorage.getItem("token");
		let response = `<p>${res.message}</p>`;
		let tagger = document.getElementById("msg");
		tagger.innerHTML = response;
	})
}


