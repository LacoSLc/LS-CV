// ___________________________________________SECTION 1__________________________________________

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


// __________________________________________SECTION 2____________________________________________

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



// _________________________________________________________SECTION 3 GALLERY__________________________________________________

// const imageCategories = {
//   fish: [
//     "foto/ryby/1.jpg",
//     "foto/ryby/2.jpg",
//     "foto/ryby/3.jpg",
//     "foto/ryby/4.jpg",
//     "foto/ryby/5.jpg",
//     "foto/ryby/6.jpg"
//   ],
//   archery: [
//     "foto/archery/1.jpg",
//     "foto/archery/2.png",
//     "foto/archery/3.jpg",
//     "foto/archery/4.jpg",
//     "foto/archery/5.jpeg"
//   ],
//   drone: [
//     "foto/drone/1.png",
//     "foto/drone/2.png",
//     "foto/drone/3.png",
//     "foto/drone/4.png",
//     "foto/drone/5.png"
//   ]
// };

// let currentIndex = 0;
// let currentCategory = 'fish';

// function openGallery(category) {
//   currentCategory = category;
//   currentIndex = 0;
//   updateGalleryImage();
//   document.getElementById("fullscreenGallery").style.display = "flex";
//   document.body.classList.add("no-scroll");
// }

// function closeGallery() {
//   document.getElementById("fullscreenGallery").style.display = "none";
//   document.body.classList.remove("no-scroll");
// }

// function changeImage(direction) {
//   const images = imageCategories[currentCategory];
//   currentIndex = (currentIndex + direction + images.length) % images.length;
//   updateGalleryImage();
// }

// function updateGalleryImage() {
//   const img = document.getElementById("galleryImage");
//   img.src = imageCategories[currentCategory][currentIndex];
// }

// // Zatvoriť kliknutím mimo obrázka
// document.getElementById("fullscreenGallery").addEventListener("click", function (e) {
//   if (e.target.id === "fullscreenGallery") {
//     closeGallery();
//   }
// });

// // ____SWIPE OVLADANIE_________

// let touchStartX = 0;
// let touchEndX = 0;

// const gallery = document.getElementById("fullscreenGallery");

// gallery.addEventListener("touchstart", function (e) {
//   touchStartX = e.changedTouches[0].screenX;
// }, false);

// gallery.addEventListener("touchend", function (e) {
//   touchEndX = e.changedTouches[0].screenX;
//   handleGesture();
// }, false);

// function handleGesture() {
//   const swipeThreshold = 50; // minimálny pohyb v pixeloch
//   if (touchEndX < touchStartX - swipeThreshold) {
//     changeImage(1); // swipe left -> ďalší obrázok
//   }
//   if (touchEndX > touchStartX + swipeThreshold) {
//     changeImage(-1); // swipe right -> predchádzajúci obrázok
//   }
// }


const imageCategories = {
  fish: [
    "foto/ryby/1.jpg",
    "foto/ryby/2.jpg",
    "foto/ryby/3.jpg",
    "foto/ryby/4.jpg",
    "foto/ryby/5.jpg",
    "foto/ryby/6.jpg",
    "foto/ryby/7.jpg"
  ],
  archery: [
    "foto/archery/1.jpg",
    "foto/archery/2.png",
    "foto/archery/3.jpg",
    "foto/archery/4.jpg",
    "foto/archery/5.jpeg"
  ],
  drone: [
    "foto/drone/1.png",
    "foto/drone/2.png",
    "foto/drone/3.png",
    "foto/drone/4.png",
    "foto/drone/5.png"
  ]
};

let currentIndex = 0;
let currentCategory = 'fish';

function openGallery(category) {
  currentCategory = category;
  currentIndex = 0;
  updateGalleryImage();
  document.getElementById("fullscreenGallery").style.display = "flex";
  document.body.classList.add("no-scroll");

  // Pridáme stav do histórie pre späť tlačidlo
  history.pushState({ galleryOpen: true }, "");
}

function closeGallery() {
  document.getElementById("fullscreenGallery").style.display = "none";
  document.body.classList.remove("no-scroll");

  // Odstránime stav z histórie ak bol pridaný
  if (history.state && history.state.galleryOpen) {
    history.back();
  }
}

function changeImage(direction) {
  const images = imageCategories[currentCategory];
  currentIndex = (currentIndex + direction + images.length) % images.length;
  updateGalleryImage();
}

function updateGalleryImage() {
  const img = document.getElementById("galleryImage");
  img.src = imageCategories[currentCategory][currentIndex];
}

// Zatvorenie kliknutím mimo obrázka
document.getElementById("fullscreenGallery").addEventListener("click", function (e) {
  if (e.target.id === "fullscreenGallery") {
    closeGallery();
  }
});

// Swipe podpora pre mobily
let touchStartX = 0;
let touchEndX = 0;

const gallery = document.getElementById("fullscreenGallery");

gallery.addEventListener("touchstart", function (e) {
  touchStartX = e.changedTouches[0].screenX;
});

gallery.addEventListener("touchend", function (e) {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
});

function handleSwipe() {
  const deltaX = touchEndX - touchStartX;
  const swipeThreshold = 50; // px

  if (Math.abs(deltaX) > swipeThreshold) {
    if (deltaX < 0) {
      changeImage(1);  // Swipe left → next
    } else {
      changeImage(-1); // Swipe right → previous
    }
  }
}

// Podpora systémového tlačidla Späť
window.addEventListener("popstate", function () {
  if (document.getElementById("fullscreenGallery").style.display === "flex") {
    closeGallery();
  }
});


// SEC 3 scrollbar from middle
document.addEventListener('DOMContentLoaded', function () {
  const scrollContainer = document.getElementById('scroll-container');
  const content = document.getElementById('fotoWrapper');
  
  const middlePosition = (content.offsetWidth - scrollContainer.clientWidth) / 2;
 
  scrollContainer.scrollLeft = middlePosition;
});




//________________________________________________________ SECTION 4 _______________________________________________________

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

// ___________________________________________Section 5__________________________________________________--

// _____Donwload CV_____

var $ = (s, o = document) => o.querySelector(s);

$(".dl").addEventListener("click", function() {
  this.classList.add("run");
  setTimeout(() => this.classList.add("done"), 4000);
  setTimeout(() => this.classList.remove("done"), 5500);
  setTimeout(() => this.classList.remove("run"), 5500);
});



//___________________________________ Side navigator_________________________________________________

let mainNavLinks = document.querySelectorAll(".sideLight");
let mainSections = document.querySelectorAll(".secSide");

let lastId;
let cur = [];

window.addEventListener("scroll", event => {
  let fromTop = window.scrollY;

  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop + 300  &&
      section.offsetTop + section.offsetHeight - 300 > fromTop
    ) {
      link.classList.add("current");
    } else {
      link.classList.remove("current");
    }
  });
});






