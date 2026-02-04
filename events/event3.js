const content = document.getElementById('content');
const start = document.getElementById('start');
const stop =  document.getElementById('stop');


const sayDate = (str) => {
    console.log(str , Date.now())
    content.innerText = new Date().toLocaleString();
}

let intervalId = null;

start.addEventListener('click', () => {
    if (!intervalId) {
        intervalId = setInterval(sayDate, 1000, 'hello');
    }
});

stop.addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = null;
});

