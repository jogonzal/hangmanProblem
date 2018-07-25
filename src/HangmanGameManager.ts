export enum HangmanResult {
  Yes,
  No,
  Won,
  Lost
}

export default class HangmanGameManager {
  private maxAttempts = 100 // Feel free to lower this number :)

  private wordToGuess: string
  public guessed: boolean[]
  public totalFailedGuesses: number

  public wordLength: number

  constructor(words: string[]) {
    // Pick a random word
    this.wordToGuess = words[Math.floor(Math.random() * words.length)]
    this.totalFailedGuesses = 0
    this.guessed = []
    for (let i = 0; i < this.wordToGuess.length; i++) {
      this.guessed.push(false)
    }

    this.wordLength = this.wordToGuess.length

    console.log(`Initialized game manager - word to guess is "${this.wordToGuess}"`)
  }

  public guessCharacter(guessedCharacter: string): HangmanResult {
    const result = this.guessCharacterPrivate(guessedCharacter)
    console.log(`[HangmanGameManager] User guessed '${guessedCharacter}'. Result: ${HangmanResult[result]} TotalFailedGuesses: ${this.totalFailedGuesses}`)

    return result
  }

  private guessCharacterPrivate(guessedCharacter: string): HangmanResult {
    if (!guessedCharacter || guessedCharacter.length !== 1) {
      throw new Error('Character length should be 1!')
    }

    // Check if a character was guessed
    let guessedSomething = false
    for (let i = 0; i < this.wordToGuess.length; i++) {
      const char = this.wordToGuess[i]
      if (char === guessedCharacter) {
        guessedSomething = true
        this.guessed[i] = true
      }
    }

    // Check if all characters have been guessed
    let isCharacterMissing = false
    for (let i = 0; i < this.wordToGuess.length; i++) {
      const guessedIndividual = this.guessed[i]
      if (!guessedIndividual) {
        isCharacterMissing = true
      }
    }

    // Check if user has won
    if (!isCharacterMissing) {
      return HangmanResult.Won
    }

    if (guessedSomething) {
      return HangmanResult.Yes
    }

    this.totalFailedGuesses++
    if (this.totalFailedGuesses >= this.maxAttempts) {
      return HangmanResult.Lost
    }

    return HangmanResult.No
  }
}