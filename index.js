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
fishButton.addEventListener('click', () => galleryEventF("block", "block", "none"));
closer1.addEventListener('click', () => galleryEventF("none", "none", "block"));

// ARCHERY

let archeryButton = document.querySelector('#archeryButton');
let closer2 = document.querySelector('#closer2');
let galleryArchery = document.querySelector("#wrapperArchery");

const galleryEventA = (gallery,close, open) => {
    galleryArchery.style.display = gallery;
    closer.style.display = close;
    archeryButton.style.display = open;
};

archeryButton.addEventListener('click', () => galleryEventA("block", "block", "none"));
closer2.addEventListener('click', () => galleryEventA("none", "none", "block"));

// DRONE

let droneButton = document.querySelector('#droneButton');
let closer3 = document.querySelector('#closer3');
let galleryDrone = document.querySelector("#wrapperDrone");

const galleryEventD = (gallery,close, open) => {
    galleryDrone.style.display = gallery;
    closer.style.display = close;
    droneButton.style.display = open;
};

droneButton.addEventListener('click', () => galleryEventD("block", "block", "none"));
closer3.addEventListener('click', () => galleryEventD("none", "none", "block"));




// SECTION 4 

// let btn = document.querySelector('.bttn');

// function toggle() {
//   btn.classList.toggle('active');
// }

// btn.addEventListener('click', toggle);


// ---------------------------------------------------------------------------
let links = document.querySelectorAll(".bttn");

// loop through all the links
links.forEach(l => {
  // add click listeners
  l.addEventListener("click", (e) => {
    e.preventDefault();
    let currentTab = document.querySelector(`.wrappPer${l.href.substr(l.href.indexOf("#"))}`);
    
    if(currentTab.classList.contains("hide")){
      // add hide class to all the tab content
      document.querySelectorAll(".wrappPer").forEach(t => {
        t.classList.add("hide");
      });
      // remove hide class from the tab content which's id matches with the current href
      currentTab.classList.remove("hide");
    }else{
     // add hide class to all the tab content
      document.querySelectorAll(".wrappPer").forEach(t => {
        t.classList.add("hide");
      });
    }
  })
})


