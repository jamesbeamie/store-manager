
function allusers(){
	let userTok = localStorage.getItem("token")
	fetch('https://jayme-store.herokuapp.com/api/v2/users', {
		method: "GET",
		headers: { "Content-Type":"application/json",
			       "Authorization": "Bearer "+userTok
			   }
	})
	.then((res) => res.json())
	.then(function (res) {
		let reg = document.getElementById("register");
		let users = res.Users;
		users.forEach(user => {
			reg.innerHTML += '<tr><td>'+user.user_id+'</td>'+
			'<td>'+user.username+'</td>'+
			'<td>'+user.role+'</td>'+
			'<td id="'+user.username+'" onclick="viewsales(this.id)" class="accept">View </td></tr>';
		})
	})
};

function viewsales(attendant){
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
		let reg = document.getElementById("filter");
		sales.forEach(sale =>{
			reg.innerHTML += '<tr><td>'+sale.sales_id+'</td>'+
			'<td>'+sale.attendant+'</td>'+
			'<td>'+sale.price+'</td>'+
			'<td>'+sale.product_name+'</td>'+
			'<td>'+sale.quantity+'</td></tr>'
		})
					
		})
}

allusers()

