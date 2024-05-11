let main2 = document.querySelector('.main2');
let btn = document.querySelector('.btn');
let copyicon = document.querySelector('.bx-copy');
let sliderValue = document.querySelector('#sliderValue');
let passwordgen = document.querySelector('#Password');
let inputSlider = document.querySelector('[data-lengthSlider]');
let skip = document.querySelector('.skip');
let main = document.querySelector('.main');
let uppercaseCheck = document.querySelector('.p2');
let numbersCheck = document.querySelector('.p1');
let lowercaseCheck = document.querySelector('.p3');
let symbolsCheck = document.querySelector('.p4');
let indicator = document.querySelector('.bx-circle');
let generateButton = document.querySelector('.btn2');
let allSliderButton = document.querySelector('p');
let genPass = document.querySelector('.btn2');









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
// slider.addEventListener("input", (event) => {
//     const passwordLength = event.target.value; // Declare passwordLength using const
    // length.innerText = passwordLength; // Update the text content of the <p> element
// });
inputSlider.value = 0;

inputSlider.oninput = (() => {
    let value = inputSlider.value;
    sliderValue.textContent = value;
});
let allNumber = "0123456789";
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let symbols = " ~`!@#$%^&*()_-+={[}]|:;<,>.?/";
//  Function to generate password

genPass.addEventListener('click', () => {
    // Call the generatePassword function and assign the generated password to the passwordgen element
    passwordgen.value = generatePassword(inputSlider.value);
});

function generatePassword() {
    let genPassword = "";
    let allChars = "";
    allChars += lowercaseCheck.checked ? lowercase : "";
    allChars += uppercaseCheck.checked ? uppercase : "";
    allChars += numbersCheck.checked ? allNumber : "";
    allChars += symbolsCheck.checked ? symbols : "";

    genPassword = uppercase.charAt(Math.floor(Math.random() * uppercase.length ));
    return genPassword;
}