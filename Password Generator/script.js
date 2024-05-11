let main2 = document.querySelector('.main2');
let btn = document.querySelector('.btn');
let copyicon = document.querySelector('.bx-copy');
let sliderValue = document.querySelector('#sliderValue');
let passwordgen = document.querySelector('#Password');
let inputSlider = document.querySelector('[data-lengthSlider]');
let skip = document.querySelector('.skip');
let main = document.querySelector('.main');
let lowercaseCheck = document.querySelector('.rule3 input[type="checkbox"]');
let uppercaseCheck = document.querySelector('.rule2 input[type="checkbox"]');
let numbersCheck = document.querySelector('.rule1 input[type="checkbox"]');
let symbolsCheck = document.querySelector('.rule4 input[type="checkbox"]');
let indicator = document.querySelector('.bx-circle');
let generateButton = document.querySelector('.btn2');
let allSliderButton = document.querySelector('p');
let genPass = document.querySelector('.btn2');

// Event listeners for buttons and actions
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
    } else {
        alert('Error: Input field not found!');
    }
});

skip.addEventListener('click', function () {
    main.scrollIntoView({ behavior: 'smooth' });
});

// Slider initialization and event handling
inputSlider.value = 0;
inputSlider.oninput = (() => {
    let value = inputSlider.value;
    sliderValue.textContent = value;
});

// Characters for generating password
let allNumber = "0123456789";
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let symbols = " ~`!@#$%^&*()_-+={[}]|:;<,>.?/";

// Event listener for password generation button
genPass.addEventListener('click', () => {
    passwordgen.value = generatePassword(inputSlider.value);
});

// Function to generate random password based on selected criteria
function generatePassword(length) {
    let genPassword = "";
    let allChars = "";
    allChars += lowercaseCheck.checked ? lowercase : "";
    allChars += uppercaseCheck.checked ? uppercase : "";
    allChars += numbersCheck.checked ? allNumber : "";
    allChars += symbolsCheck.checked ? symbols : "";

    if (allChars == "" || allChars.length == 0) {
        return genPassword;
    }

    for (let i = 0; i < length; i++) {
        genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
    }

    return genPassword;
}
