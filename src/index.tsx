export const fiveLetterWordsFilePath = require('./fiveLetterWords.json')
import HangmanGameManager from './HangmanGameManager'
import HangmanGamePlayer from './HangmanGamePlayer'

console.log('Game starting...')

async function startApp() {
  // Read the words JSON
  const response = await fetch(fiveLetterWordsFilePath)
  const fiveLetterWords: string[] = await response.json()

  console.log(`There are a total of ${fiveLetterWords.length} words in the pool`)

  // Initialize game classes
  const game = new HangmanGameManager(fiveLetterWords)
  const player = new HangmanGamePlayer(game, fiveLetterWords)

  // Play the game
  player.playGame()

  // TODO: Add evaluation 
}

startApp()

