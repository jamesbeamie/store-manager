document.getElementById("regadmin").addEventListener("submit",regAdmin);
function regAdmin(e){
	e.preventDefault();
	let username = document.getElementById("username").value;
	let password = document.getElementById("password").value;
	let confirmpass = document.getElementById("confirmpass").value;
	let address = document.getElementById("address").value;
	let role = document.getElementById("role").value;

	fetch('https://jayme-store.herokuapp.com/api/v2/admin/signup', {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
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
		let response = `<p>${res.message}</p>`;
		let tagger = document.getElementById("mesg");
		tagger.innerHTML = response;
<<<<<<< HEAD
	setTimeout(function (){ location.replace('https://jamesbeamie.github.io/store-manager/template/admin/admin/admindex.html')},1000)
	})
}



