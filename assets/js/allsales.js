function allsales(){
	let userTok = localStorage.getItem("token")
	fetch('https://jayme-store.herokuapp.com/api/v2/sales', {
		method: "GET",
		headers: { "Content-Type":"application/json",
			       "Authorization": "Bearer "+userTok
			   }
	})
	.then((res) => res.json())
	.then(function (res) {
		let sales = document.getElementById("sales");
		console.log(res);
		let records = res.Records;
		records.forEach(record => {
			sales.innerHTML += '<tr><td>'+record.sales_id+'</td>'+
			'<td>'+record.attendant+'</td>'+
			'<td>'+record.product_name+'</td>'+
			'<td>'+record.price+'</td>'+
			'<td>'+record.quantity+'</td></tr>';
		})
	})
};
allsales()