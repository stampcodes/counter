// const increaseButton = document.querySelector("[data-increase]");
// const increaseButton10 = document.querySelector("[data-increase-10]");
// const decreaseButton = document.querySelector("[data-decrease]");
// const decreaseButton10 = document.querySelector("[data-decrease-10]");
// let screenNumber = document.querySelector("[data-screen-number]");



const decreaseButton10 = document.createElement("button")
const decreaseButton = document.createElement("button")
const screenNumber = document.createElement("div")
const increaseButton = document.createElement("button")
const increaseButton10 = document.createElement("button")

decreaseButton10.setAttribute("class", "decrease10")
decreaseButton.setAttribute("class", "decrease")
screenNumber.setAttribute("class", "screen-number")
increaseButton.setAttribute("class", "increase")
increaseButton10.setAttribute("class", "increase10")

decreaseButton10.textContent = "-10"
decreaseButton.textContent = "-"
increaseButton.textContent = "+"
increaseButton10.textContent = "+10"
screenNumber.textContent = 0;

document.querySelector("#counter").append(decreaseButton10)
document.querySelector("#counter").append(decreaseButton)
document.querySelector("#counter").append(screenNumber)
document.querySelector("#counter").append(increaseButton)
document.querySelector("#counter").append(increaseButton10)






increaseButton.addEventListener("click", () => {
  let currentValue = parseInt(screenNumber.textContent)
  screenNumber.textContent = currentValue + 1;
})

decreaseButton.addEventListener("click", () => {
  let currentValue = parseInt(screenNumber.textContent)
  screenNumber.textContent = currentValue - 1;
})

increaseButton10.addEventListener("click", () => {
  let currentValue = parseInt(screenNumber.textContent)
  screenNumber.textContent = currentValue + 10;
})

decreaseButton10.addEventListener("click", () => {
  let currentValue = parseInt(screenNumber.textContent)
  screenNumber.textContent = currentValue - 10;
})


