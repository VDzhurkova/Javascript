var num;
var count = 0;

function main(){

	num = generateNumber();
	console.log(num);
}

function generateNumber(){

			var i = Math.floor((Math.random()*100));
			return i;

		}


function compareNumbers(input){

	if (input < num){
		document.getElementById("resultguess").innerHTML = "Your Number to small";
		count++;
	}
	else if (input > num){
	 document.getElementById("resultguess").innerHTML = "Your Number to big";
	 count++;
	}
	else {
	 count++;
	 document.getElementById("resultguess").innerHTML = "Succsess in " + count + " guess";
	}

}
