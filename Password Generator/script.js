let main2 = document.querySelector('.main2');
let btn = document.querySelector('.btn');
let length = document.querySelector('#length');
let passwordDisplay = document.querySelector('[data-lengthSlider]');
let lettersCheck = document.querySelector('.p2');
let numbersCheck = document.querySelector('.p1');
let symbolsCheck = document.querySelector('.p3');
let indicator = document.querySelector('.strengthValue');
let generateButton = docment.querySelector('.btn2');
let allSliderButton = document.querySelector('p');
const symbols = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';










btn.addEventListener('click', function () {
    main2.style.display = "block";
    main2.scrollIntoView({ behavior: 'smooth' });
});
let skip = document.querySelector('.skip');
let main = document.querySelector('.main');
skip.addEventListener('click', function () {
    main.scrollIntoView({ behavior: 'smooth' });
});
let copyicon = document.querySelector('.bx-copy');

copyicon.addEventListener('click', function () {
    // Assuming there's an input field with the ID 'password'
    var copyText = document.getElementById('password');
    copyText.select();
    document.execCommand('copy');
    alert('Copied to clipboard: ' + copyText.value);
});

// Slider using JavaScript
const slider = document.querySelector('[data-lengthSlider]');
const inputValue = document.querySelector('#inputValue');

slider.addEventListener("input", (event) => {
    passwordLength = event.target.value;
    inputValue.innerText = passwordLength;
});

let password = "";
let passwordLength = 10;
let checkCount = 0;
