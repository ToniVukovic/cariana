var prevScrollpos = window.scrollY;
window.onscroll = function () {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100%";
  }
  prevScrollpos = currentScrollPos;
};

const menuButton = document.querySelector("#menu-button");

const rootElement = document.documentElement;

menuButton.addEventListener("click", () => {
  rootElement.toggleAttribute("menu-open");
});

const hamLinks = document.getElementsByClassName("ham-link");

for (const hamLink of hamLinks) {
  hamLink.addEventListener("click", () => {
    rootElement.removeAttribute("menu-open");
  });
}

let year = new Date().getFullYear();

document.getElementById("year").innerHTML = year;

// mapping through data instead of hardcoding

let data = [
  {
    id: 1,
    image: "images/cap.png",
    name: "Baseball Cap Cool Brand",
    rating: 4,
    price: 30,
    hot: true,
    sale: false,
    gender: "male",
  },
  {
    id: 2,
    image: "images/glasses.png",
    name: "Black Frame Glasses",
    rating: 3,
    price: 75,
    hot: true,
    sale: true,
    gender: "male",
  },
  {
    id: 3,
    image: "images/women-polo.png",
    name: "Polo Shirt Women",
    rating: 5,
    price: 50,
    hot: false,
    sale: true,
    gender: "female",
  },
  {
    id: 4,
    image: "images/watch-gold.png",
    name: "Fancy Gold Watch",
    rating: 5,
    price: 970,
    hot: false,
    sale: false,
    gender: "male",
    watch: true,
  },
  {
    id: 5,
    image: "images/watch-dark.png",
    name: "Even Fancier Watch",
    rating: 5,
    price: 1700,
    hot: true,
    sale: false,
    gender: "male",
    watch: true,
  },
  {
    id: 6,
    image: "images/shorts.png",
    name: "Shorts One of a Kind",
    rating: 4,
    price: 50,
    hot: false,
    sale: true,
    gender: "male",
  },
  {
    id: 7,
    image: "images/watch-brown.png",
    name: "Another Awesome Watch",
    rating: 3,
    price: 530,
    hot: true,
    sale: false,
    gender: "male",
    watch: true,
  },
  {
    id: 8,
    image: "images/jacket.png",
    name: "Denim Jacket",
    rating: 4,
    price: 120,
    hot: false,
    sale: true,
    gender: "male",
  },
  {
    id: 9,
    image: "images/jacket-dark.png",
    name: "Dark Jacket Men's",
    rating: 5,
    price: 150,
    hot: true,
    sale: false,
    gender: "male",
  },
  {
    id: 10,
    image: "images/handbag-brown.png",
    name: "Brown handbag",
    rating: 4,
    price: 711,
    hot: false,
    sale: true,
    gender: "female",
    handbag: true,
  },
  {
    id: 11,
    image: "images/handbag-pink.png",
    name: "Pink handbag",
    rating: 5,
    price: 300,
    hot: false,
    sale: true,
    gender: "female",
    handbag: true,
  },
  {
    id: 12,
    image: "images/handbag-red.png",
    name: "Red Handbag",
    rating: 4,
    price: 400,
    hot: true,
    sale: false,
    gender: "female",
    handbag: true,
  },
  {
    id: 13,
    image: "images/watch-hamilton.png",
    name: "Hamilton Watch Black",
    rating: 5,
    price: 750,
    hot: false,
    sale: false,
    gender: "male",
    watch: true,
  },
  {
    id: 14,
    image: "images/ray-ban-aviators.png",
    name: "Ray Ban Aviators",
    rating: 5,
    price: 230,
    hot: false,
    sale: true,
    gender: "male",
  },
  {
    id: 15,
    image: "images/shirt-pink.png",
    name: "Pink Shirt Women",
    rating: 4,
    price: 60,
    hot: true,
    sale: false,
    gender: "female",
  },

  {
    id: 16,
    image: "images/shirt-white.png",
    name: "White Shirt Women",
    rating: 4,
    price: 70,
    hot: false,
    sale: true,
    gender: "female",
  },
];

const catalogue = document.getElementById("catalogue");

const elements = data.map((item) => {
  const element = document.createElement("div");
  element.className = "item-wrap";

  element.innerHTML += `<div id="${item.id}" class="item">
  ${item.sale ? '<div class="sale">SALE</div>' : ""}
  ${item.hot ? '<div class="hot">HOT</div>' : ""}
  
  <img
    src=${item.image}
    alt=${item.name}
  />
</div>
<div class="item-text">
  <h5>${item.name}</h5>
  <img class="stars" src="images/${
    item.rating
  }-stars.svg" alt="The rating of this product is ${item.rating} stars" />
  <p>$${item.price}</p>
</div>`;

  return element;
});

elements.forEach((element) => {
  catalogue.appendChild(element);
});

// load-more functionality

document.addEventListener("DOMContentLoaded", function () {
  var initialItemsToShow = 8;

  var items = document.querySelectorAll(".item-wrap");
  var loadMore = document.getElementById("loadMore");

  for (var i = initialItemsToShow; i < items.length; i++) {
    items[i].style.display = "none";
  }

  loadMore.addEventListener("click", function () {
    for (var i = initialItemsToShow; i < items.length; i++) {
      items[i].style.display = "flex";
    }

    loadMore.style.display = "none";
  });
});

// filter items
const displayAll = document.getElementById("displayAll");
const maleBtn = document.getElementById("filterMaleButton");
const femaleBtn = document.getElementById("filterFemaleButton");
const handbagBtn = document.getElementById("filterHandbags");
const watchesBtn = document.getElementById("filterWatches");
const allCatBtns = document.querySelectorAll(".catalogue-btn");

// Function to display all items
function displayAllItems() {
  displayFilteredItems(data);
  loadMore.style.display = "none";
  allCatBtns.forEach((link) => link.classList.remove("active"));
  displayAll.classList.add("active");
}

// Function to filter 'male' items
function filterMaleItems() {
  const maleItems = data.filter((item) => item.gender === "male");
  displayFilteredItems(maleItems);
  loadMore.style.display = "none";
  allCatBtns.forEach((link) => link.classList.remove("active"));
  maleBtn.classList.add("active");
}

// Function to filter 'female' items
function filterFemaleItems() {
  const femaleItems = data.filter((item) => item.gender === "female");
  displayFilteredItems(femaleItems);
  loadMore.style.display = "none";
  allCatBtns.forEach((link) => link.classList.remove("active"));
  femaleBtn.classList.add("active");
}

// Function to filter handbags
function filterHandbags() {
  const handbags = data.filter((item) => item.handbag === true);
  displayFilteredItems(handbags);
  loadMore.style.display = "none";
  allCatBtns.forEach((link) => link.classList.remove("active"));
  handbagBtn.classList.add("active");
}

// Function to filter watches
function filterWatches() {
  const watches = data.filter((item) => item.watch === true);
  displayFilteredItems(watches);
  loadMore.style.display = "none";
  allCatBtns.forEach((link) => link.classList.remove("active"));
  watchesBtn.classList.add("active");
}

// Function to display filtered items
function displayFilteredItems(filteredItems) {
  const container = document.getElementById("catalogue");

  // Clear existing content
  container.innerHTML = "";

  filteredItems.forEach((item) => {
    const element = document.createElement("div");
    element.className = "item-wrap";

    element.innerHTML += `<div id="${item.id}" class="item">
  ${item.sale ? '<div class="sale">SALE</div>' : ""}
  ${item.hot ? '<div class="hot">HOT</div>' : ""}
  
  <img
    src=${item.image}
    alt=${item.name}
  />
</div>
<div class="item-text">
  <h5>${item.name}</h5>
  <img class="stars" src="images/${
    item.rating
  }-stars.svg" alt="The rating of this product is ${item.rating} stars" />
  <p>$${item.price}</p>
</div>`;

    // Append the element to the container in the DOM
    container.appendChild(element);
  });
}
document
  .getElementById("filterMaleButton")
  .addEventListener("click", filterMaleItems);
document
  .getElementById("filterFemaleButton")
  .addEventListener("click", filterFemaleItems);
document
  .getElementById("filterHandbags")
  .addEventListener("click", filterHandbags);
document
  .getElementById("filterWatches")
  .addEventListener("click", filterWatches);
document
  .getElementById("displayAll")
  .addEventListener("click", displayAllItems);

// "sort by" button functionalty

document.getElementById("filterBtn").addEventListener("click", function () {
  var dropdownContent = document.querySelector(".dropdown-content");
  dropdownContent.classList.toggle("show");
});

// // filter by "hot" or "sale"

//////////////////////////////////////////////////

function filterByOptions(option) {
  const filteredItems =
    option === "all" ? data : data.filter((item) => item[option]);
  displayFilteredItems(filteredItems);
  loadMore.style.display = "none";
  dropdownContent.classList.remove("show");
}

["all", "hot", "sale"].forEach((type) => {
  document
    .getElementById(type)
    .addEventListener("click", () => filterByOptions(type));
});

// this slider functionality was copied (and modified) from https://codesandbox.io/p/sandbox/vanilla-js-responsive-image-slider-vblu3?file=%2Fsrc%2Findex.js which is a piece of code written by milliwonkim

const slides = document.querySelectorAll(".slide");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const auto = false;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
  const current = document.querySelector(".current");
  current.classList.remove("current");
  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add("current");
  } else {
    slides[0].classList.add("current");
  }
  setTimeout(() => current.classList.remove("current"));
};

const prevSlide = () => {
  const current = document.querySelector(".current");
  current.classList.remove("current");
  if (current.previousElementSibling) {
    current.previousElementSibling.classList.add("current");
  } else {
    slides[slides.length - 1].classList.add("current");
  }
  setTimeout(() => current.classList.remove("current"));
};

next.addEventListener("click", (e) => {
  nextSlide();
  if (auto) {
    slideInterval = setInterval(nextSlide, intervalTime);
    clearInterval(slideInterval);
  }
});

prev.addEventListener("click", (e) => {
  prevSlide();
  if (auto) {
    slideInterval = setInterval(nextSlide, intervalTime);
    clearInterval(slideInterval);
  }
});

if (auto) {
  slideInterval = setInterval(nextSlide, intervalTime);
}
