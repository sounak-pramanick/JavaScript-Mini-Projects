const colors = ['olive', 'yellow', 'rgba(133,122,200)', '#f15025'];

const btn = document.querySelector('#btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
    const randomIndex = generateRandomNumber();
    color.innerText = colors[randomIndex];
    document.body.style.backgroundColor = colors[randomIndex];
})

const generateRandomNumber = () => Math.floor(Math.random() * colors.length);