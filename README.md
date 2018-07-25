# Hangman problem

Problem to solve: play hangman.
Input: Number of letters, entire corpus of possible words, positions guessed so far

## How to run
0. Install yarn
1. `yarn` (this installs dependencies)
2. `yarn run start:dev` (this deploys the webapp)
3. Browse to http://localhost:8080
4. That's it! Open the browser window, and you'll see somethign like this:

![Sample image](/SampleConsoleOutput.png)

## So... how does this work?

Take a look at HangmanGamePlayer.ts - this is the only file you'll change, specifically the "playGame" method. Your goal here is to create the best strategy to win the hangman game as a player. In the hangman game, a player is provided with the length of a word (in this case, there's only 1 word) and can guess 1 character at a time. If a player guesses a character right, they can know the position of the character they guessed right (which might be in multiple spots).

A simple implementation that simply guesses a, b, c... until winning or losing is available. Note that this implementation has much room for improvement and doesn't make use of any information like word length, word pool, or which positions of the word it has guessed.

### Input for HangmanGamePlayer.ts

1. Number of letters in the word to guess (this.hangmanGame.wordLength)
2. Positions guessed so far (this.hangmanGame.positionsGuessedSoFar)
3. Words available (this.words)

### Expected behavior

Win the game (by guessing the correct characters) with as few failed guesses as possible.