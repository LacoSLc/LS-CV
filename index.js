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

let links = document.querySelectorAll(".bttn");

links.forEach(l => {

  l.addEventListener("click", (e) => {
    e.preventDefault();
    let currentTab = document.querySelector(`.wrappPer${l.href.substr(l.href.indexOf("#"))}`);
    
    if(currentTab.classList.contains("hide")){

      document.querySelectorAll(".wrappPer").forEach(t => {
        t.classList.add("hide");
      });

      currentTab.classList.remove("hide");
    }else{
      document.querySelectorAll(".wrappPer").forEach(t => {
        t.classList.add("hide");
      });
    }
  })
})

var btnContainer = document.getElementById("h2wrapp");

var btns = btnContainer.getElementsByClassName("bttn");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");

    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    this.className += " active";
  });
}



