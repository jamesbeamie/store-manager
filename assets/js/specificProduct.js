
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
			'<td>'+product.product_name+'</td>'+
			'<td>'+product.price+'</td>'+
			'<td>'+product.quantity+'</td>'+
			'<td id="'+product.product_id+'" onclick="viewProduct(this.id)" class="accept">View</td></tr>';
		})
	})
};

function viewProduct(product_id){
	let token = localStorage.getItem("token")
	fetch('https://jayme-store.herokuapp.com/api/v2/products/'+product_id,{
		method:"GET",
		headers:{"Content-Type":"application/json",
				 "Authorization":"Bearer "+token
				}
	})
	.then((res) => res.json())
	.then(function (res) {
		let product = res.Products[0];
		console.log(product)
		let catlog = document.getElementById("catalog");
			catlog.innerHTML = '<tr><td>'+product.product_id+'</td>'+
			'<td>'+product.product_name+'</td>'+
			'<td>'+product.price+'</td>'+
			'<td>'+product.quantity+'</td></tr>'		
		})
}

allProduct()

