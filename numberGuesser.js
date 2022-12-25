function startGame(correctNumber) {
  // Initialize variables
  let guessCount = 0;
  let guessedNumbers = [];

  // Prompt user to guess a number and check if it is correct
  while (true) {
    // Increment guess count
    guessCount++;

    // Get user input
    let input = prompt("Guess a number:");

    // Check if input is a number
    if (isNaN(input)) {
      console.log("Not a number! Try again!");
      continue;
    }

    // Convert input to a number
    let guess = parseInt(input);

    // Check if guess has already been made
    if (guessedNumbers.includes(guess)) {
      console.log("Already Guessed!");
      continue;
    }

    // Add guess to list of guessed numbers
    guessedNumbers.push(guess);

    // Check if guess is correct
    if (guess === correctNumber) {
      console.log("You got it! You took " + guessCount + " attempts!");
      break;
    } else if (guess < correctNumber) {
      console.log("Too Low!");
    } else {
      console.log("Too High!");
    }
  }
}

// Start the game
startGame(7);
