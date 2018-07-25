# Hangman problem

Problem to solve: play hangman.
Input: Number of letters, entire corpus of possible words, positions guessed so far

## How to run
0. `yarn`
1. `npm run start:dev`
2. Browse to localhost:8080
3. That's it! Open the browser window, and you'll see somethign like this:



## So... how does this work?

Take a look at HangmanGamePlayer.ts. Your goal here is to create the best strategy to win the hangman game as a player. A simple implementation that simply guesses a, b, c... until winning or losing is available. Note that this implementation is extremely has much room for improvement.

### Input

1. Number of letters in the word to guess (this.hangmanGame.wordLength)
2. Positions guessed so far (this.hangmanGame.positionsGuessedSoFar)
3. Words available (this.words)

### Expected behavior

Win the game (by guessing the correct characters) with as few failed guesses as possible.