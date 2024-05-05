let main2 = document.querySelector('.main2');
let btn = document.querySelector('.btn');
let copyicon = document.querySelector('.bx-copy');
let length = document.querySelector('#length');
let passwordgen = document.querySelector('#Password');
let passwordDisplay = document.querySelector('[data-lengthSlider]');
let skip = document.querySelector('.skip');
let main = document.querySelector('.main');
let lettersCheck = document.querySelector('.p2');
let numbersCheck = document.querySelector('.p1');
let symbolsCheck = document.querySelector('.p3');
let indicator = document.querySelector('.strengthValue');
let generateButton = document.querySelector('.btn2');
let allSliderButton = document.querySelector('p');
const symbols = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';









btn.addEventListener('click', function () {
    main2.style.display = "block";
    main2.scrollIntoView({ behavior: 'smooth' });
});

copyicon.addEventListener('click', function () {
    var copyText = document.querySelector('#Password');
    if (copyText) {
        copyText.select();
        document.execCommand('copy');
        alert('Copied to clipboard: ' + copyText.value);
    }
     else {
        alert('Error: Input field not found!');
    }
});

skip.addEventListener('click', function () {
    main.scrollIntoView({ behavior: 'smooth' });
});
// Copying to clipboard
// Slider using JavaScript
const slider = document.querySelector('[data-lengthSlider]');
// Corrected selector for ID
slider.addEventListener("input", (event) => {
    const passwordLength = event.target.value; // Declare passwordLength using const
    length.innerText = passwordLength; // Update the text content of the <p> element
});

