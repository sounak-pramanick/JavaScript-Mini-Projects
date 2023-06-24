const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const btn = document.querySelector('#btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
    let hexColor = '#';
    for(let i = 0; i < 6; i++) {
        let index = generateRandomNumber();
        hexColor += hex[index];
    }
    
    document.body.style.backgroundColor = hexColor;
    color.innerText = hexColor;
})

const generateRandomNumber = () => Math.floor(Math.random() * hex.length);