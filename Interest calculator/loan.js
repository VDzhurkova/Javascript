

function calculateInterest(amount, rate, time){

	 var monthlyRate = (rate/100)/12;
	 var monthlyPayments = Math.round(monthlyRate * amount);
	 var totalInterest = (time*12)*monthlyPayments;


	 document.getElementById("monthlypaymentresult").innerHTML = "The monthly payments: " + monthlyPayments;
	 document.getElementById("totalinterestpaymentresult").innerHTML = "The total interest: " + totalInterest;
}



