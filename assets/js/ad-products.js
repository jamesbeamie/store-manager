
function admproducts(){
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
			'<td id="'+product.product_id+'" onclick="edit(this.id)" class="accept">edit</td>'+
			'<td id="'+product.product_id+'" onclick="delet(this.id)" class="decline">delete</td></tr>';
		})
	})
};

function delet(product_id){
	let userTok = localStorage.getItem("token")
	fetch('https://jayme-store.herokuapp.com/api/v2/products/'+product_id, {
		method: "DELETE",
		headers: { "Content-Type":"application/json",
			       "Authorization": "Bearer "+userTok
			   }
	}).then((res) => res.json())
	.then(function (res) {
		let response = `<p>${res.message}</p>`;
		let tagger = document.getElementById("msg");
		tagger.innerHTML = response;
		setTimeout(function (){ location.replace('/ui/admin/adm-Products.html')},1000)
		})
}


admproducts()

