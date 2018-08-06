$(document).ready(function(){
	
	//call this function after first dog reaches the finish line
	function winner(winnerName)
	{
		alert(winnerName+" is the winner!");
	}
	
	//press start button for the timer and controls to appear
    $("#startButton").click(function(){
		
		setTimeout(function(){ $("#startButton").val("3");}, 1000);
		setTimeout(function(){ $("#startButton").val("2");}, 2000);
		setTimeout(function(){ $("#startButton").val("1");}, 3000);
		setTimeout(function(){ 
		
			//hide the original start button, show fake button and show controls
			$("#startButton").addClass("hidden");
			$("#startButtonFake").removeClass("hidden");
			$("#controls").removeClass("hidden");			
			}, 4000);
    });
	
	//first player button controls
    $("#playerButton1").click(function(){
		
        var dog1CurrentPosition = $("#dog1").css("margin-left");
		//remove the px letters from the string
		var dog1CurrentPositionNumber = dog1CurrentPosition.replace("px", "");
		//convert the value into numeric
		dog1CurrentPositionNumber = Number(dog1CurrentPositionNumber);
	
		var chaseLaneLength = $("#chaseLane").css("width");
		//remove the px letters from the string
		var chaseLaneLengthNumber = chaseLaneLength.replace("px", "");
		//convert the value into numeric
		chaseLaneLengthNumber = Number(chaseLaneLengthNumber);
		
		//100 clicks are necessary to win the game
		var singleClickMove = Number(chaseLaneLengthNumber)/100; 
		//add 1% of chaseLane width to dog margin-left value
		dog1CurrentPositionNumber += singleClickMove;
				
		//check if it crossed the finish line
		//since dog picture is 10% width, we need to add chaseLaneLengthNumber*0.1
		//since finish line is 10px width an has two 1px borders, wee need to deduct that for the race to finish at the line
		if ((dog1CurrentPositionNumber+chaseLaneLengthNumber*0.1)>=chaseLaneLengthNumber-12)
		{
			var winnerName = "Bora";
			winner(winnerName);
		}
		//if not
		else{
			//apply the changes to make the dog race
			$("#dog1").css("margin-left", dog1CurrentPositionNumber);
		}
    });
	
	//second player button controls
    $("#playerButton2").click(function(){
		
        var dog2CurrentPosition = $("#dog2").css("margin-left");
		//remove the px letters from the string
		var dog2CurrentPositionNumber = dog2CurrentPosition.replace("px", "");
		//convert the value into numeric
		dog2CurrentPositionNumber = Number(dog2CurrentPositionNumber);
	
		var chaseLaneLength = $("#chaseLane").css("width");
		//remove the px letters from the string
		var chaseLaneLengthNumber = chaseLaneLength.replace("px", "");
		//convert the value into numeric
		chaseLaneLengthNumber = Number(chaseLaneLengthNumber);	
		
		//100 clicks are necessary to win the game
		var singleClickMove = Number(chaseLaneLengthNumber)/100; 
		//add 1% of chaseLane width to dog margin-left value
		dog2CurrentPositionNumber += singleClickMove;
		
		//check if it crossed the finish line
		//since dog picture is 10% width, we need to add chaseLaneLengthNumber*0.1
		//since finish line is 10px width an has two 1px borders, wee need to deduct that for the race to finish at the line
		if ((dog2CurrentPositionNumber+chaseLaneLengthNumber*0.1)>=chaseLaneLengthNumber-12)
		{
			var winnerName = "Barneta";
			winner(winnerName);
		}
		//if not
		else{
			//apply the changes to make the dog race
			$("#dog2").css("margin-left", dog2CurrentPositionNumber);
		}
    });
});