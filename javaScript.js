$(document).ready(function(){
	
	//call this function after first dog reaches the finish line
	function winner(winnerName)
	{
		alert(winnerName+" is the winner!");
	}

	//if the winner needs to be determined after the time runs out
	function determineAWinner()
	{
		alert("I don't know who the winner is!");
	}
	//call this function at the start of the race
	function countDown(i)
	{
		//THERE HAS A TO BE A BETTER WAY TO DO THIS.. ;D
		setTimeout(function(){ $("#countDown").text("60");}, 1000);
		setTimeout(function(){ $("#countDown").text("59");}, 2000);
		setTimeout(function(){ $("#countDown").text("58");}, 3000);
		setTimeout(function(){ $("#countDown").text("57");}, 4000);
		setTimeout(function(){ $("#countDown").text("56");}, 5000);
		setTimeout(function(){ $("#countDown").text("55");}, 6000);
		setTimeout(function(){ $("#countDown").text("54");}, 7000);
		setTimeout(function(){ $("#countDown").text("53");}, 8000);
		setTimeout(function(){ $("#countDown").text("52");}, 9000);
		setTimeout(function(){ $("#countDown").text("51");}, 10000);
		setTimeout(function(){ $("#countDown").text("50");}, 11000);
		setTimeout(function(){ $("#countDown").text("49");}, 12000);
		setTimeout(function(){ $("#countDown").text("48");}, 13000);
		setTimeout(function(){ $("#countDown").text("47");}, 14000);
		setTimeout(function(){ $("#countDown").text("46");}, 15000);
		setTimeout(function(){ $("#countDown").text("45");}, 16000);
		setTimeout(function(){ $("#countDown").text("44");}, 17000);
		setTimeout(function(){ $("#countDown").text("43");}, 18000);
		setTimeout(function(){ $("#countDown").text("42");}, 19000);
		setTimeout(function(){ $("#countDown").text("41");}, 20000);
		setTimeout(function(){ $("#countDown").text("40");}, 21000);
		setTimeout(function(){ $("#countDown").text("39");}, 22000);
		setTimeout(function(){ $("#countDown").text("38");}, 23000);
		setTimeout(function(){ $("#countDown").text("37");}, 24000);
		setTimeout(function(){ $("#countDown").text("36");}, 25000);
		setTimeout(function(){ $("#countDown").text("35");}, 26000);
		setTimeout(function(){ $("#countDown").text("34");}, 27000);
		setTimeout(function(){ $("#countDown").text("33");}, 28000);
		setTimeout(function(){ $("#countDown").text("32");}, 29000);
		setTimeout(function(){ $("#countDown").text("31");}, 30000);
		setTimeout(function(){ $("#countDown").text("30");}, 31000);
		setTimeout(function(){ $("#countDown").text("29");}, 32000);
		setTimeout(function(){ $("#countDown").text("28");}, 33000);
		setTimeout(function(){ $("#countDown").text("27");}, 34000);
		setTimeout(function(){ $("#countDown").text("26");}, 35000);
		setTimeout(function(){ $("#countDown").text("25");}, 36000);
		setTimeout(function(){ $("#countDown").text("24");}, 37000);
		setTimeout(function(){ $("#countDown").text("23");}, 38000);
		setTimeout(function(){ $("#countDown").text("22");}, 39000);
		setTimeout(function(){ $("#countDown").text("21");}, 40000);
		setTimeout(function(){ $("#countDown").text("20");}, 41000);
		setTimeout(function(){ $("#countDown").text("19");}, 42000);
		setTimeout(function(){ $("#countDown").text("18");}, 43000);
		setTimeout(function(){ $("#countDown").text("17");}, 44000);
		setTimeout(function(){ $("#countDown").text("16");}, 45000);
		setTimeout(function(){ $("#countDown").text("15");}, 46000);
		setTimeout(function(){ $("#countDown").text("14");}, 47000);
		setTimeout(function(){ $("#countDown").text("13");}, 48000);
		setTimeout(function(){ $("#countDown").text("12");}, 49000);
		setTimeout(function(){ $("#countDown").text("11");}, 50000);
		setTimeout(function(){ $("#countDown").text("10");}, 51000);
		setTimeout(function(){ $("#countDown").text("9");}, 52000);
		setTimeout(function(){ $("#countDown").text("8");}, 53000);
		setTimeout(function(){ $("#countDown").text("7");}, 54000);
		setTimeout(function(){ $("#countDown").text("6");}, 55000);
		setTimeout(function(){ $("#countDown").text("5");}, 56000);
		setTimeout(function(){ $("#countDown").text("4");}, 57000);
		setTimeout(function(){ $("#countDown").text("3");}, 58000);
		setTimeout(function(){ $("#countDown").text("2");}, 59000);
		setTimeout(function(){ $("#countDown").text("1");}, 60000);
		setTimeout(function(){ $("#countDown").text("0"); determineAWinner();}, 61000);
		
		
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
			countDown(60);
			}, 4000);
		//hide fake start button and show additional controls	
		setTimeout(function(){
			$("#startButtonFake").addClass("hidden");
			$("#additionalControls").removeClass("hidden");
			}, 10000);
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
	
	
	
	//first player jump button
    $("#jumpDog1").click(function(){
		
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
		
		//10% jump ahead
		var jumpValue = Number(chaseLaneLengthNumber)/10; 
		//add jump value
		dog1CurrentPositionNumber += jumpValue;
		
		//hide the jump button and show the fake one
		$("#jumpDog1Fake").removeClass("hidden");
		$("#jumpDog1").addClass("hidden");
		
		//check if it crossed the finish line
		//since dog picture is 10% width, we need to add chaseLaneLengthNumber*0.1
		//since finish line is 10px width an has two 1px borders, wee need to deduct that for the race to finish at the line
		if ((dog1CurrentPositionNumber+chaseLaneLengthNumber*0.1)>=chaseLaneLengthNumber-12)
		{
			$("#dog1").css("margin-left", dog1CurrentPositionNumber);
			var winnerName = "Bora";
			winner(winnerName);
		}
		//if not
		else{
			//apply the changes to make the dog race
			$("#dog1").css("margin-left", dog1CurrentPositionNumber);
		}
    });
	//first player delay button
    $("#delayDog1").click(function(){
		
        var dog1CurrentPosition = $("#dog1").css("margin-left");
		//remove the px letters from the string
		var dog1CurrentPositionNumber = dog1CurrentPosition.replace("px", "");
		//convert the value into numeric
		dog1CurrentPositionNumber = Number(dog2CurrentPositionNumber);
		
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
		
		//10% delay
		var delayValue = Number(chaseLaneLengthNumber)/10; 
		//put the oposing dog 10% behind his current position
		dog2CurrentPositionNumber -= delayValue;
		$("#dog2").css("margin-left", dog2CurrentPositionNumber);
		
		//hide the jump button and show the fake one
		$("#delayDog1Fake").removeClass("hidden");
		$("#delayDog1").addClass("hidden");
				
    });
	
	
	
	
	
	
	
	//second player jump button
    $("#jumpDog2").click(function(){
		
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
		
		//10% jump ahead
		var jumpValue = Number(chaseLaneLengthNumber)/10; 
		//add jump value
		dog2CurrentPositionNumber += jumpValue;
		
		//hide the jump button and show the fake one
		$("#jumpDog2Fake").removeClass("hidden");
		$("#jumpDog2").addClass("hidden");
		
		
		//check if it crossed the finish line
		//since dog picture is 10% width, we need to add chaseLaneLengthNumber*0.1
		//since finish line is 10px width an has two 1px borders, wee need to deduct that for the race to finish at the line
		if ((dog2CurrentPositionNumber+chaseLaneLengthNumber*0.1)>=chaseLaneLengthNumber-12)
		{
			$("#dog2").css("margin-left", dog2CurrentPositionNumber);
			var winnerName = "Barneta";
			winner(winnerName);
			
		}
		//if not
		else{
			//apply the changes to make the dog race
			$("#dog2").css("margin-left", dog2CurrentPositionNumber);
		}
    });
	//second player delay button
    $("#delayDog2").click(function(){
		
        var dog2CurrentPosition = $("#dog2").css("margin-left");
		//remove the px letters from the string
		var dog2CurrentPositionNumber = dog2CurrentPosition.replace("px", "");
		//convert the value into numeric
		dog2CurrentPositionNumber = Number(dog2CurrentPositionNumber);
		
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
		
		//10% delay
		var delayValue = Number(chaseLaneLengthNumber)/10; 
		//put the oposing dog 10% behind his current position
		dog1CurrentPositionNumber -= delayValue;
		$("#dog1").css("margin-left", dog1CurrentPositionNumber);
				
		//hide the jump button and show the fake one
		$("#delayDog2Fake").removeClass("hidden");
		$("#delayDog2").addClass("hidden");
    });
});