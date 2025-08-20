const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

const deathMessages = [
    'You fell into a pit of spikes!',
    'A shadowy figure ended your journey!',
    'You were devoured by a lurking beast!',
    'A trapdoor opened beneath you!',
    'You were struck by a deadly curse!'
]

const survivalMessages = [
    'You narrowly avoid danger and press on.',
    'A hidden passage keeps you safe.',
    'You hear ominous sounds but escape unharmed.',
    'You find a torch and light your way.',
    'You dodge a falling rock just in time.'
]

let score = 0

function startGame() {
    score = 0
    showDirectionChoice()
}

function showDirectionChoice() {
    textElement.innerText = 'Choose a direction to travel'
    optionButtonsElement.innerHTML = ''
    const directions = ['Forward', 'Backward', 'Left', 'Right']
    directions.forEach(dir => {
        const button = document.createElement('button')
        button.innerText = dir
        button.classList.add('btn')
        button.addEventListener('click', () => handleDirection(dir))
        optionButtonsElement.appendChild(button)
    })
}

function handleDirection(direction) {
    if (Math.random() < 0.3) {
        showDeath()
    } else {
        score += 1
        showSurvival(direction)
    }
}

function showDeath() {
    const msg = deathMessages[Math.floor(Math.random() * deathMessages.length)]
    textElement.innerText = `${msg}\nScore: ${score}`
    optionButtonsElement.innerHTML = ''
    const restartBtn = document.createElement('button')
    restartBtn.innerText = 'Restart'
    restartBtn.classList.add('btn')
    restartBtn.addEventListener('click', startGame)
    optionButtonsElement.appendChild(restartBtn)
}

function showSurvival(direction) {
    const msg = survivalMessages[Math.floor(Math.random() * survivalMessages.length)]
    textElement.innerText = `${msg} You travel ${direction.toLowerCase()}.\nScore: ${score}`
    optionButtonsElement.innerHTML = ''
    const continueBtn = document.createElement('button')
    continueBtn.innerText = 'Continue'
    continueBtn.classList.add('btn')
    continueBtn.addEventListener('click', showDirectionChoice)
    optionButtonsElement.appendChild(continueBtn)
}

startGame()
