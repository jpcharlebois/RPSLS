var promptDisplay = "Do you choose rock, paper, scissors, lizard, spock?";

function run() {
    var userChoice = prompt(promptDisplay);
    var computerChoice = Math.random();
    
    if (computerChoice < 0.21) {
    	computerChoice = "rock";
    } else if(computerChoice < 0.41) {
    	computerChoice = "paper";
    } else if(computerChoice < 0.61) {
    	computerChoice = "scissors";
    } else if(computerChoice < 0.81) {
    	computerChoice = "lizard";
    } else {
    	computerChoice = "spock";
    }
    console.log("User: " + userChoice);
    console.log("Computer: " + computerChoice);

    console.log(compare(userChoice, computerChoice));
}



function compare(choice1, choice2) {
    if (choice1 === choice2) {
        promptDisplay = "The result is a tie! Do you choose rock, paper, scissors, lizard, spock?";
        run();
        return;
    } else if (choice1 === "rock") {
        if (choice2 === "scissors") {
            return "rock smashes scissors!";
        } else if (choice2 === "lizard") {
            return "rock crushes lizard";
        }
    } else if (choice1 === "paper") {
        if (choice2 === "rock") {
            return "paper covers rock";
        } else if (choice2 === "spock") {
            return "paper disproofs spock";
        }
    } else if (choice1 === "scissors") {
        if (choice2 === "paper") {
            return "scissors cuts paper";
        } else if (choice2 === "lizard") {
            return "scissors decapatates lizard";
        }
    } else if (choice1 === "lizard") {
        if (choice2 === "spock") {
            return "lizard poisons spock";
        } else if (choice2 === "paper") {
            return "lizard eats paper";
        }
    } else if (choice1 === "spock") {
        if (choice2 === "scissors") {
            return "spock smashes scissors";
        } else if (choice2 === "rock") {
            return "spock vaporizes rock";
        }
    }
    
    compare(choice2, choice1);
}
