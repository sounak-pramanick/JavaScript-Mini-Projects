const count = document.querySelector('p');
const increaseBtn = document.querySelector('#increase');
const decreaseBtn = document.querySelector('#decrease');
const resetBtn = document.querySelector('#reset');

let countNum = 0;

increaseBtn.addEventListener('click', () => {
    countNum++;
    count.textContent = countNum;
    if(count.textContent > 0) {
        count.classList.remove('green');
        count.classList.add('blue');
    }
    if(count.textContent === 0) {
        count.classList.remove('blue', 'green');
        count.classList.add('black');
    }
})

decreaseBtn.addEventListener('click', () => {
    countNum--;
    count.textContent = countNum;
    if(count.textContent < 0) {
        count.classList.remove('blue');
        count.classList.add('green');
    }
    if(count.textContent === 0) {
        count.classList.remove('blue', 'green');
        count.classList.add('black');
    }
})

resetBtn.addEventListener('click', () => {
    countNum = 0;
    count.textContent = countNum;
    count.classList.remove('blue', 'green');
})