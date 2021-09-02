// const button = document.querySelector('#btn');
// const hexNum = document.querySelector('#hex-value');
// const body = document.querySelector('body');
// button.addEventListener('click', hexGenerator);

// function hexGenerator() {
//     const hex = Math.random().toString(16).slice(2,8);
//     hexNum.innerHTML = hex
//     body.style.background = `#${hex}`
// }

const button = document.querySelector('#btn');
const hexNum = document.querySelector('#hex-value');
const body = document.querySelector('body');
button.addEventListener('click', (hexGenerator) => {
    const hex = Math.random().toString(16).slice(2,8);
    hexNum.innerHTML = hex
    body.style.background = `#${hex}`
});
