let btn = document.querySelector('.btn');

let main2 = document.querySelector('.main2');
btn.addEventListener('click', function () {
main2.scrollIntoView({ behavior: 'smooth' });
})


let skip = document.querySelector('.skip');

let main = document.querySelector('.main');
skip.addEventListener('click', function () {
main.scrollIntoView({ behavior: 'smooth' });
})

let copyicon = document.querySelector('.bx-copy');

copyicon.addEventListener('click', function () {
    var copyText = document.getElementById('copyText');
    copyText.select();
    document.execCommand('copy');
    alert('Copied to clipboard: ' + copyText.value);
});

// slider using js
const slider = document.querySelector('[data-lengthSlider]');
const inputValue = document.querySelector('#inputValue');
let passwordLength = 0;


slider.addEventListener("input", (event) => {
    passwordLength = event.target.value;

    inputValue.innerText = passwordLength;
})