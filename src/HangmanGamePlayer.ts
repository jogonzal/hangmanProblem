import HangmanGameManager, { HangmanResult } from './HangmanGameManager'

export default class HangmanGamePlayer {
  constructor(private hangmanGame: HangmanGameManager, private words: string[]) {
  }

  public playGame() {
    // Here, I have all the words available (not being used in this implementation)
    const words = this.words

    // And the positions guessed so far (not being used in this implementation)
    const positionsGuessedSoFar = this.hangmanGame.positionsGuessedSoFar

    // And the word length (not being used in this implementation)
    const wordLength = this.hangmanGame.wordLength

    // START DUMMY IMPLEMENTATION
    // This is a very 'dumb' player who just guessed a, b, c, ... until win or lose
    // TODO: Replace this implementation!!
    const charactersIWillGuess = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let characterGuessIndex = 0

    let result: HangmanResult
    do {
      result = this.hangmanGame.guessCharacter(charactersIWillGuess[characterGuessIndex])
      characterGuessIndex++ // Guess the next one!
    } while (result !== HangmanResult.Won && result !== HangmanResult.Lost)
    console.log(`Finished the game! I ${HangmanResult[result]} and it only took me ${this.hangmanGame.totalFailedGuesses} failed guesses :)`)
  }
}