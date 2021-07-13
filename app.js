const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.yellow')
const timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')

let result = 0
let currentTime = timeLeft.textContent

function randomSquare() {
    square.forEach(className => {
        className.classList.remove('yellow')
    })
    let randomPosition = square[Math.floor(Math.random() * 9)]
    randomPosition.classList.add('yellow')

    // id
    hitPosition = randomPosition.id
}

square.forEach(id => {
    id.addEventListener('mouseup', () => {
        if (id.id === hitPosition) {
            result += 1
            score.textContent = result
        }
    }
    )
})

function moveYellow() {
    let timerid = null
    timerid = setInterval(randomSquare, 750)
}

function countDown() {
    currentTime-- 
    timeLeft.textContent = currentTime
    if (currentTime === 0) {
        alert('GAME OVER! Your score is '+ result)
        result = 0
        score.textContent = 0
        currentTime = 21
        timeLeft.textContent = currentTime
    }
}

moveYellow()
let timerid = setInterval(countDown, 1000)
