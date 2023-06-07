const decreaseBtn = document.querySelector('.decrease');
const resetBtn = document.querySelector('.reset');
const increaseBtn = document.querySelector('.increase');
const counter = document.querySelector('.counter');

let number = 0;

const decreaseNum = () => {
	number -= 1;
    counter.textContent = number
};


const increaseNum = () => {
    number += 1
    counter.textContent = number
}

const resetNum = () => {
    number = 0
    counter.textContent = number
}






decreaseBtn.addEventListener('click', decreaseNum)
increaseBtn.addEventListener('click', increaseNum)
resetBtn.addEventListener('click', resetNum)