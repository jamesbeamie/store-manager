function getuser(){
	let userTok = localStorage.getItem("token")
	fetch('https://jayme-store.herokuapp.com/api/v2/users', {
		method: "GET",
		headers: { "Content-Type":"application/json",
			       "Authorization": "Bearer "+userTok
			   }
	})
	.then((res) => res.json())
	.then(function (res) {
		let id = res.Users[1]['username'];
		console.log(id);
		viewrecord(id);
		
	})
};
function viewrecord(attendant){
	let token = localStorage.getItem("token")
	fetch('https://jayme-store.herokuapp.com/api/v2/sales/'+attendant,{
		method:"GET",
		headers:{"Content-Type":"application/json",
				 "Authorization":"Bearer "+token
				}
	})
	.then((res) => res.json())
	.then(function (res) {
		let sale = res.Record[0];
		let reg = document.getElementById("mysales");
			reg.innerHTML += '<tr><td>'+sale.sales_id+'</td>'+
			'<td>'+sale.attendant+'</td>'+
			'<td>'+sale.price+'</td>'+
			'<td>'+sale.product_name+'</td>'+
			'<td>'+sale.quantity+'</td></tr>'		
		})
}
getuser()