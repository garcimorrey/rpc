var computerScore = 0
var playerScore = 0
	
	var playerScoreBox = document.getElementById('playerScore');
	var computerScoreBox = document.getElementById('computerScore');
	
	playerScoreBox.innerHTML = computerScore;
	computerScoreBox.innerHTML = playerScore;
	
	var playerChoice = document.getElementById('playerChoice');
	var computerChoice = document.getElementById('computerChoice')

	function compare(choice1, choice2) {
	
		choice2 = Math.random();
		if (choice2 < 0.33) {
		    choice2 = "rock";
		} else if(choice2 <= 0.66) {
		    choice2 = "paper";
		} else {
			choice2 = "scissors";
		}
		
		playerChoice.innerHTML = choice1;
		computerChoice.innerHTML = choice2;
			    
	    if (choice1 == choice2) {
	        return false;
	    }
	    if (choice1 == "rock") {
	    	if (choice2 == "scissors") {
	 
	            playerScore++;         
	        }
	        else {
	            computerScore++;
	        }
	        return updateScores();
	    }
	    if (choice1 == "paper") { 	
	        if (choice2 == "rock") {
	            playerScore++;
	        }
	        else {
	            computerScore++;
	        }
	        return updateScores();
	    }
	    if (choice1 == "scissors") {
	    
	        if (choice2 == "rock") {
	            computerScore++;
	        }
	        else {
	            playerScore++;
	        }
	        return updateScores();
	    }
	}
	
	function updateScores() {
		playerScoreBox.innerHTML = playerScore;
		computerScoreBox.innerHTML = computerScore;
	}
	