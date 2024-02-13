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



let archeryhButton = document.querySelector('#archeryButton');
let closer2 = document.querySelector('#closer2');
let galleryArchery = document.querySelector("#wrapperArchery");

const galleryEventA = (gallery, close, open) => {
    galleryArchery.style.display = gallery;
    archeryButton.style.display = open;
};

archeryhButton.addEventListener('click', () => galleryEventA("flex", "block", "none"));
closer2.addEventListener('click', () => galleryEventA("none", "none", "block"));




