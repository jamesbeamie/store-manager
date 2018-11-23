function getUser(){
	let userTok = localStorage.getItem("token")
	fetch('https://jayme-store.herokuapp.com/api/v2/users', {
		method: "GET",
		headers: { "Content-Type":"application/json",
			       "Authorization": "Bearer "+userTok
			   }
	})
	.then((res) => res.json())
	.then(function (res) {
		let jina = localStorage.getItem("uname");
		console.log(jina)
		viewRecord(jina);
		
	})
};
function viewRecord(attendant){
	let token = localStorage.getItem("token")
	fetch('https://jayme-store.herokuapp.com/api/v2/sales/'+attendant,{
		method:"GET",
		headers:{"Content-Type":"application/json",
				 "Authorization":"Bearer "+token
				}
	})
	.then((res) => res.json())
	.then(function (res) {
		let sales = res.Record;
		console.log(sales)
		let reg = document.getElementById("mysales");
		sales.forEach(sale =>{
			reg.innerHTML += '<tr><td>'+sale.sales_id+'</td>'+
			'<td>'+sale.attendant+'</td>'+
			'<td>'+sale.price+'</td>'+
			'<td>'+sale.product_name+'</td>'+
			'<td>'+sale.quantity+'</td></tr>'})		
		})
}
getUser()
