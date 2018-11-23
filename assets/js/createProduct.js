document.getElementById("newproduct").addEventListener("submit",newProduct);
function newProduct(e){
	//avoid default form behavior
	e.preventDefault();
	let product = document.getElementById("product").value;
	let price = document.getElementById("price").value;
	let quantity = document.getElementById("quantity").value;

	let userTok = localStorage.getItem("token")
	fetch('https://jayme-store.herokuapp.com/api/v2/products', {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"Authorization": "Bearer "+userTok
		},
		body: JSON.stringify({
			product_name:product,
			price:price,
			quantity:quantity
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


