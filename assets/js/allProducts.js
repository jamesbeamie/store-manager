
function allProducts(){
	let userTok = localStorage.getItem("token")
	fetch('https://jayme-store.herokuapp.com/api/v2/products', {
		method: "GET",
		headers: { "Content-Type":"application/json",
			       "Authorization": "Bearer "+userTok
			   }
	})
	.then((res) => res.json())
	.then(function (res) {
		let catlog = document.getElementById("catalog");
		console.log(res);
		let products = res.Products;
		products.forEach(product => {
			catlog.innerHTML += '<tr><td>'+product.product_id+'</td>'+
			'<td>'+product.product_name+'</td><td>'+product.price+'</td>'+
			'<td>'+product.quantity+'</td></tr>';
		})
	})
}
allProducts()

