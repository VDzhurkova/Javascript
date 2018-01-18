var array = [];

		function addtoarray(a){
			array.push(a);
			//document.getElementById("output1").innerHTML = array;
			console.log(array);
		}

		function getWinner(){

			var i = Math.floor((Math.random()*array.length));
			document.getElementById("output1").innerHTML = "The winner is " + array[i];
			//console.log(array.length);
			console.log(i);
			console.log(array[i]);

		}
