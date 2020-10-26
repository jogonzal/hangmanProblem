import HangmanGameManager, { HangmanResult } from './HangmanGameManager'

export default class HangmanGamePlayer {
  constructor(private hangmanGame: HangmanGameManager, private words: string[]) {
  }

  public calculateWordsStillViable(failedGuessedChars: string[], positionsGuessedSoFar: string[], words: string[]): string[] {
    const wordsStillViable: string[] = []
    for (const word of words) {
      if (failedGuessedChars.some(w => word.includes(w))) {
        continue
      }

      let includeWord = true
      for (let i = 0; i < positionsGuessedSoFar.length; i++) {
        const positionChar = positionsGuessedSoFar[i]
        if (positionChar === '_') {
          continue
        }

        const actualChar = word[i]
        if (actualChar !== positionChar) {
          // console.log(`Not including ${word} because position ${i} has ${} vs ${positionChar}`)
          includeWord = false
          break
        }
      }
      if (includeWord) {
        wordsStillViable.push(word)
      }
    }
    return wordsStillViable
  }

  private getBestCharToGuess(wordsStillViable: string[], positionsGuessedSoFar: string[]): string {
    const charToWordCount = new Map<string, number | undefined>()
    for (const word of wordsStillViable) {
      for (const char of word) {
        const localSet = new Set<string>()
        if (localSet.has(char)) {
          continue
        }
        localSet.add(char)
        // Don't guess the same char again
        if (positionsGuessedSoFar.indexOf(char) === -1) {
          charToWordCount.set(char, (charToWordCount.get(char) || 0) + 1)
        }
      }
    }

    let maxChar: string = '0'
    let maxCount: number = -1
    for (const [key, value] of charToWordCount) {
      if (value > maxCount) {
        maxChar = key
        maxCount = value
      }
    }

    return maxChar
  }

  public playGame() {
    // Here, I have all the words available (not being used in this implementation)
    const words = this.words

    // And the positions guessed so far (not being used in this implementation)
    const positionsGuessedSoFar = this.hangmanGame.positionsGuessedSoFar

    // And the word length (not being used in this implementation)
    const wordLength = this.hangmanGame.wordLength

    const charactersIWillGuess = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let characterGuessIndex = 0

    let wordsStillViable = this.words
    wordsStillViable = wordsStillViable.filter(f => f.length === wordLength)
    const failedGuessedCharacters: string[] = []

    let result: HangmanResult
    do {
      wordsStillViable = this.calculateWordsStillViable(failedGuessedCharacters, this.hangmanGame.positionsGuessedSoFar, wordsStillViable)
      console.log(`Total words in bank: `, wordsStillViable.length)
      const charToGuess = this.getBestCharToGuess(wordsStillViable, this.hangmanGame.positionsGuessedSoFar)
      result = this.hangmanGame.guessCharacter(charToGuess)
      if (result === HangmanResult.No) {
        failedGuessedCharacters.push(charToGuess)
      }
    } while (result !== HangmanResult.Won && result !== HangmanResult.Lost)
    console.log(`Finished the game! I ${HangmanResult[result]} and it only took me ${this.hangmanGame.totalFailedGuesses} failed guesses :)`)
  }
}