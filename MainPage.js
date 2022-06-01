
// adding functionality to the hamburger navbar icon
const toggleButton = document.querySelector('.toggle-button');

const navbar = document.querySelector('.nav-bar');

toggleButton.addEventListener('click', function() {
    navbar.classList.toggle('nav-bar-active');
})






// adding links to corner text in 'Projects and Work' section

const cornerText1 = document.querySelector('#corner-text-1');
const cornerText2 = document.querySelector('#corner-text-2');
const cornerText3 = document.querySelector('#corner-text-3');
const cornerText4 = document.querySelector('#corner-text-4');
const cornerText5 = document.querySelector('#corner-text-5');

cornerText1.addEventListener('click', function() {
    let options = '';
    let ref = window.open('https://ishan-wijesingha99.github.io/Pig-Browser-Game/', '_blank', options);
})

cornerText2.addEventListener('click', function() {
    let options = '';
    let ref = window.open('https://ishan-wijesingha99.github.io/Pig-Browser-Game/', '_blank', options);
})

cornerText3.addEventListener('click', function() {
    let options = '';
    let ref = window.open('https://ishan-wijesingha99.github.io/Pig-Browser-Game/', '_blank', options);
})

cornerText4.addEventListener('click', function() {
    let options = '';
    let ref = window.open('https://ishan-wijesingha99.github.io/Pig-Browser-Game/', '_blank', options);
})

cornerText5.addEventListener('click', function() {
    let options = '';
    let ref = window.open('https://ishan-wijesingha99.github.io/Pig-Browser-Game/', '_blank', options);
})









// adding functionality to the 'contact me' section

const githubDiv = document.querySelector('.github');
const linkedinDiv = document.querySelector('.linked-in');
const emailDiv = document.querySelector('.email');

githubDiv.addEventListener('click', function() {
    let options = '';
    let ref = window.open('https://github.com/Ishan-Wijesingha99', '_blank', options);
});

linkedinDiv.addEventListener('click', function() {
    let options = '';
    let ref = window.open('https://au.linkedin.com/in/ishan-wijesingha-497222239?trk=people-guest_people_search-card', '_blank', options);
});

emailDiv.addEventListener('click', function() {
    let options = '';
    let ref = window.open('mailto:ishanwijes@gmail.com', '_blank', options);
});



