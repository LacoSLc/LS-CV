// SECTION 1

let openHam = document.querySelector('#openHam');
let closeHam = document.querySelector('#closeHam');
let navigationItems = document.querySelector('.navi');

const hamburgerEvent = (navigation, close, open) => {
    navigationItems.style.display = navigation;
    closeHam.style.display = close;
    openHam.style.display = open;
};

openHam.addEventListener('click', () => hamburgerEvent("flex", "block", "none"));
closeHam.addEventListener('click', () => hamburgerEvent("none", "none", "block"));

// SECTION 2

let sections = document.querySelectorAll('section')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 300;
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
            sec.classList.add('show-animate');
        }

        else{
            sec.classList.remove('show-animate')
        }
    })    
}


// SECTION 3 GALLERY

// FISHING

let fishButton = document.querySelector('#fishButton');
let closer1 = document.querySelector('#closer1');
let galleryFish = document.querySelector("#wrapperFish");

const galleryEventF = (gallery, close, open) => {
    galleryFish.style.display = gallery;
    closer.style.display = close;
    fishButton.style.display = open;
};
fishButton.addEventListener('click', () => galleryEventF("flex", "block", "none"));
closer1.addEventListener('click', () => galleryEventF("none", "none", "block"));

// ARCHERY

let archeryButton = document.querySelector('#archeryButton');
let closer2 = document.querySelector('#closer2');
let galleryArchery = document.querySelector("#wrapperArchery");

const galleryEventA = (gallery, close, open) => {
    galleryArchery.style.display = gallery;
    archeryButton.style.display = open;
};

archeryButton.addEventListener('click', () => galleryEventA("flex", "block", "none"));
closer2.addEventListener('click', () => galleryEventA("none", "none", "block"));




// SECTION $ PERCENTA HTML

let htmlButton = document.querySelector('#html');
// let closer1 = document.querySelector('#closer1');
let galleryHtml = document.querySelector("#perhtml");

const galleryEventH = (gallery, close, open) => {
    galleryHtml.style.display = gallery;
    // closer.style.display = close;
    htmlButton.style.display = open;
};

htmlButton.addEventListener('click', () => galleryEventH("flex", "block",));
// closer1.addEventListener('click', () => galleryEventF("none", "none", "block"));

// SECTION $ PERCENTA CSS

let cssButton = document.querySelector('#css');
// let closer1 = document.querySelector('#closer1');
let galleryCss = document.querySelector("#percss");

const galleryEventC = (gallery, close, open) => {
    galleryCss.style.display = gallery;
    // closer.style.display = close;
    htmlButton.style.display = open;
};

cssButton.addEventListener('click', () => galleryEventC("flex", "block",));
// closer1.addEventListener('click', () => galleryEventF("none", "none", "block"));

// SECTION $ PERCENTA JS

let jsButton = document.querySelector('#js');
// let closer1 = document.querySelector('#closer1');
let galleryJs = document.querySelector("#perjs");

const galleryEventJS = (gallery, close, open) => {
    galleryJs.style.display = gallery;
    // closer.style.display = close;
    htmlButton.style.display = open;
};

jsButton.addEventListener('click', () => galleryEventJS("flex", "block",));
// closer1.addEventListener('click', () => galleryEventF("none", "none", "block"));

// SECTION $ PERCENTA PYTHON

let pythonButton = document.querySelector('#python');
// let closer1 = document.querySelector('#closer1');
let galleryPython = document.querySelector("#perpython");

const galleryEventPy = (gallery, close, open) => {
    galleryPython.style.display = gallery;
    // closer.style.display = close;
    htmlButton.style.display = open;
};

pythonButton.addEventListener('click', () => galleryEventPy("flex", "block",));
// closer1.addEventListener('click', () => galleryEventF("none", "none", "block"));
