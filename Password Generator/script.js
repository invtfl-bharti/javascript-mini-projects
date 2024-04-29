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