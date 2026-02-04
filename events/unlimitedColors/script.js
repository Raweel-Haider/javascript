
const randomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

const start = document.getElementById('startButton');
const stopp = document.getElementById('stopButton');


let intervalid = null;
const startColorChange = () => {
    if(!intervalid) {
        const changeColor = () => {
            document.body.style.backgroundColor = randomColor();
        };
        intervalid = setInterval(changeColor, 500);
    }
};

const stopColorChange = () => {
    clearInterval(intervalid);
    intervalid = null;
};

start.addEventListener('click', startColorChange);
stopp.addEventListener('click', stopColorChange);

// document.addEventListener('DOMContentLoaded', () => {
//     const colorButton = document.getElementById('changeColor');
//     colorButton.addEventListener('click', () => {
//         document.body.style.backgroundColor = randomColor();
//     });
// });