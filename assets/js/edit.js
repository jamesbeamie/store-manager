let idee = localStorage.getItem('identity');
function allproduct(idee){
	let userTok = localStorage.getItem('token')
	fetch('https://jayme-store.herokuapp.com/api/v2/products/'+idee, {
		method: "GET",
		headers: { "Content-Type":"application/json",
			       "Authorization": "Bearer "+userTok
			   }
	})
	.then((res) => res.json())
	.then(function (res) {
		let products = res.Products;
		console.log(products)
		document.getElementById('product').value = products[0]['product_name'];
		document.getElementById('price').value = products[0]['price'];
		document.getElementById('quantity').value = products[0]['quantity']; 
	})
};
function editproduct(idee){
	let product = document.getElementById("product").value;
	let price = document.getElementById("price").value;
	let quantity = document.getElementById("quantity").value;

	let userTok = localStorage.getItem("token")
	let id = localStorage.getItem('identity')
	fetch('https://jayme-store.herokuapp.com/api/v2/products/'+id, {
		method: "PUT",
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
allproduct(idee)