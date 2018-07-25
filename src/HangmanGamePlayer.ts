import HangmanGameManager, { HangmanResult } from './HangmanGameManager'

export default class HangmanGamePlayer {
  constructor(private hangmanGame: HangmanGameManager) {
  }

  public playGame() {
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