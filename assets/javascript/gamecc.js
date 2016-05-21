
var wins = 0; 
var losses = 0;  
var randomnumber; 
var score = 0;  
 
var gemvalues = [0, 0, 0, 0]; 


function resetgame() {
 
	for (var i = 0; i <gemvalues.length; i++){
		gemvalues[i]= Math.floor(Math.random()* 12)+ 1; 
	}
	randomnumber= Math.floor(Math.random()* 102) + 19; 
	score = 0; 
	console.log(randomnumber)
	updatescreen();
}

function updatescreen() {
	$(".score").text(score);
	$(".randomnumber").text(randomnumber); 
	$(".winslosses").text("Wins: " + wins +  " Losses: " + losses); 

}

function checkscore() {
	if (score > randomnumber){
		losses ++; 
		resetgame(); 

	} else if (score === randomnumber) {
		wins ++; 
		resetgame(); 
	} 
	updatescreen();
}

$(document).ready(function(){

	$("#button1").on("click", function(){
      score = score + gemvalues[0]; 
      	
      	checkscore(); 

	});

	$("#button2").on("click", function(){
	   score = score + gemvalues[1]; 
	    
	    checkscore(); 
	});

	$("#button3").on("click", function(){
	   score = score + gemvalues[2]; 
	    
	    checkscore(); 
	});

	$("#button4").on("click", function(){
	    score = score + gemvalues[3]; 
	     
	     checkscore(); 
	     
	}); 
		resetgame(); 
})
