const counterBtn = document.getElementById('counter-btn')
const counter = document.getElementById('counter')
const changeColourBtn = document.getElementById('change-color-btn')

let count = 0

changeColourBtn.addEventListener('click', () => {
  counterBtn.style.backgroundColor = getRandomColor()
})

counterBtn.addEventListener('click', () => {
  count++
  counter.textContent = count.toString().padStart(2, '0')
})

function getRandomColor() {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}
