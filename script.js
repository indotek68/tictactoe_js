window.onload = function(){


//Global Variable
	var square = document.getElementsByClassName("square");
	var reset = document.getElementById("reset")
	var player = document.getElementById("player")
	var count = 1;

	var x = true;

	for(i = 0; i < square.length; i++){
		square[i].onclick = function(event){
			//alert(this.innerHTML)
			// if (count === 9){
			//  		player.innerHTML = "DRAW";
			//  		console.log("DRAW");
			// }
			if(this.innerHTML === "X" || this.innerHTML === "O"){
				
			}
			// else if (square[0].innerHTML === "X" && square[1].innerHTML === "X" && square[2].innerHTML === "X"){
			// 		player.innerHTML = "Player 1 is the WINNER!"
			// }
			// else if (square[3].innerHTML === "X" && square[4].innerHTML === "X" && square[5].innerHTML === "X"){
			// 		player.innerHTML = "Player 1 is the WINNER!"
			// }
			else if (x){
					this.innerHTML = "X";
					this.style.color = "red";
					this.style.borderColor= "black";
					player.innerHTML = "Player 2 Next Turn"
					console.log(square[i]);
					// if(square[i].innerHTML === square[i+1] && square[i+1]=== square[i+2]){
					// 	player.innerHTML = "Player 1 is the WINNER!"
					// }
					x = false; //set 'x' as false to switch to next player 'o'
					// else{
					// 	count = count + 1
					// }
			}
			else{
					this.innerHTML = "O"
					this.style.color = "blue"
					this.style.borderColor= "black"
					player.innerHTML = "Player 1 Next Turn"
					x = true; //sets 'x' back to true to switch back to player 'x'
					count = count + 1 //counts how many turns there are
				}
			}
		//console.log(square)
	}

	//reset buttong
	reset.onclick = function(event){
		x = true;
		count = 0
		for(i = 0; i < square.length; i++){
			square[i].innerHTML = "";
		}
	}
}