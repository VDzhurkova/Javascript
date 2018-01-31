var company= [

	{
		name: "Fireclad Ltd",
		address: {
					street: "120 Old Broad Street",
					city: "London",
					postcode: "EC2N 1AR"
		}
	},

	{
		name: "Jarvis Ltd",
		address: {
					street: "10 Artiellery Passage",
					city: "London",
					postcode: "E1 7LU"
		}
	},

	{
		name: "MG Drywall",
		address: {
					street: "14 Finchley Park",
					city: "London",
					postcode: "N12 9JN"
		}
	}

]

document.getElementById("selectName").addEventListener("load", fillDrowDown());

function fillDrowDown(){

		for (var i=0; i<company.length; i++){
				var companyName = company[i].name;
				var select =  document.getElementById("selectName");
				options = document.createElement("option");
				options.textContent = companyName;
				options.value = companyName;
				select.appendChild(options);
				console.log(options.value);

		}
}

//document.getElementById("selectName").addEventListener("change", showAddress());

function showAddress() {

		var select = document.getElementById("selectName");
		var option = select.options[select.selectedIndex];
		console.log(option.value);
		for (var i=0; i<company.length; i++){

			 if (option.value == company[i].name)
				{
					document.getElementById("street-input").value = company[i].address.street;
					document.getElementById("town-input").value = company[i].address.city;
					document.getElementById("postcode-input").value = company[i].address.postcode;
				}

	}
		}

	function calculateInvoice(input) {

		var total = parseInt(input, 10);
		var vat = 0;
		var subTotal, totaldue;
		var less20 = total * 0.2;;
		if(document.getElementById("selectRate").value == "1"){
			subTotal = total;
		}
		else{
		 vat = total * 0.2;
		 subTotal = total + vat;
		}

		totaldue = subTotal - less20;
		document.getElementById("totalDue").innerHTML = totaldue;
		document.getElementById("vat").innerHTML = vat;
		document.getElementById("subtotal").innerHTML = subTotal;
		document.getElementById("laborTotal").innerHTML = total;
		document.getElementById("less").innerHTML = less20;

		console.log(total);

}





