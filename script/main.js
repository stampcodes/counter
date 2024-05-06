const increaseButton = document.querySelector("[data-increase]");
const increaseButton10 = document.querySelector("[data-increase-10]");
const decreaseButton = document.querySelector("[data-decrease]");
const decreaseButton10 = document.querySelector("[data-decrease-10]");
let screenNumber = document.querySelector("[data-screen-number]");


screenNumber.textContent = 0;

increaseButton.addEventListener("click", ()=>{
  screenNumber.textContent++;
})

decreaseButton.addEventListener("click", ()=>{
  screenNumber.textContent--;
})

increaseButton10.addEventListener("click",()=>{
  let currentValue = parseInt(screenNumber.textContent)
  screenNumber.textContent = currentValue + 10;
})

decreaseButton10.addEventListener("click",()=>{
  let currentValue = parseInt(screenNumber.textContent)
  screenNumber.textContent = currentValue - 10;
})


