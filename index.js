document.getElementById('start-button').addEventListener('click', startGame)
document.getElementById('black').addEventListener('click', submitAnswer)
document.getElementById('blue').addEventListener('click', submitAnswer)
document.getElementById('green').addEventListener('click', submitAnswer)
document.getElementById('purple').addEventListener('click', submitAnswer)
document.getElementById('red').addEventListener('click', submitAnswer)
document.getElementById('yellow').addEventListener('click', submitAnswer)

let score = 0
let gameWord = document.getElementById('game-word')
let buttons = document.getElementById('colour-buttons')
let startButton = document.getElementById('start-button')
let instructions = document.getElementById('instructions')
let gameTime = 10
let gameInterval

function startGame () {
  score = 0
  gameTime = 10
  document.getElementById('score').innerHTML = ''
  instructions.style.display = 'none'
  startButton.style.display = 'none'
  clearInterval(gameInterval)
  getWord()
  startTimer()
  showButtons()
}

function getWord () {
  let words = ['black', 'blue', 'green', 'purple', 'red', 'yellow']
  let randomWord = words[Math.floor(Math.random() * words.length)]

  document.getElementById('game-word').innerHTML = randomWord

  assignColour(randomWord)
}

function assignColour (assignedClass) {
  let classes = ['black', 'blue', 'green', 'purple', 'red', 'yellow']
  let randomClass = classes[Math.floor(Math.random() * classes.length)]

  gameWord.className = ''

  if (randomClass !== assignedClass) {
    gameWord.classList.add(randomClass)
  } else assignColour(assignedClass)
}

function submitAnswer (event) {
  let buttonColour = event.target.name
  let correctColour = document.getElementById('game-word').className

  if (buttonColour !== correctColour) {
    incorrectAnswer()
  } else {
    getWord()
    score++
  }
}

function incorrectAnswer () {
  gameWord.className = ''
  document.getElementById('game-word').innerHTML = 'oops!'
  endGame()
}

function endGame () {
  buttons.style.display = 'none'
  startButton.style.display = 'inline-block'
  document.getElementById('start-button').innerHTML = 'Try Again'
  displayHighScore()
  clearInterval(gameInterval)
}

function timeUp () {
  gameWord.className = ''
  document.getElementById('game-word').innerHTML = 'Time is up!'
  buttons.style.display = 'none'
  startButton.style.display = 'inline-block'
  document.getElementById('start-button').innerHTML = 'Try Again'
  displayHighScore()
  clearInterval(gameInterval)
}

function showButtons () {
  buttons.style.display = 'block'
}

function displayHighScore () {
  document.getElementById('score').innerHTML = 'YOUR FINAL SCORE IS: ' + score
}

function startTimer () {
  document.getElementById('timer').innerHTML = gameTime
  gameInterval = setInterval(changeTimer, 1000)
}

function changeTimer () {
  gameTime--
  document.getElementById('timer').innerHTML = gameTime
  if (gameTime === 0) {
    timeUp()
  }
}
