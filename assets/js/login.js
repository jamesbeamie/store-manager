document.getElementById("usrlogin").addEventListener("submit",usrlogin);
function usrlogin(e){
	e.preventDefault();
	let username = document.getElementById("username").value;
	let password = document.getElementById("password").value;

	fetch('https://jayme-store.herokuapp.com/api/v2/login', {
		method: "POST",
		headers: { "Content-Type":"application/json" },
		body: JSON.stringify({
			username:username,
			password:password
		}),
	})
	.then((res) => res.json())
	.then(function (res) {
		localStorage.setItem("token",res.Usertoken);
		let response = `<p>${res.message}</p>`;
		let tagger = document.getElementById("msg");
		tagger.innerHTML = response;
	})
}

