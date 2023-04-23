// parallax
document.addEventListener("DOMContentLoaded", function () {
  const parallax = document.querySelector(".banner");
  window.addEventListener("scroll", function () {
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.7 + "px";
  });
});

// tabs
const tabsContainer = document.querySelector(".tabs-our-services-and-content");
const tabs = tabsContainer.querySelectorAll(".title-tabs");
const contents = tabsContainer.querySelectorAll(".content-tabs");

tabs[0].classList.add("active");
contents[0].classList.add("active");

tabsContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("title-tabs")) {
    const index = Array.from(event.target.parentNode.children).indexOf(
      event.target
    );

    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    contents.forEach((content) => {
      content.classList.remove("active");
    });

    event.target.classList.add("active");
    contents[index].classList.add("active");
  }
});

// подгрузка картинок
const filterButtons = document.querySelectorAll(".filter-button");
const imageGallery = document.querySelector(".image-gallery");
const loadMoreButton = document.querySelector(".load-more-button");

const images = [
  { src: "images/all/landing-pages8.png", category: "landing-pages" },
  { src: "images/all/landing-pages9.png", category: "landing-pages" },
  { src: "images/all/landing-pages10.png", category: "landing-pages" },
  { src: "images/all/landing-pages11.png", category: "landing-pages" },
  { src: "images/all/landing-pages12.png", category: "landing-pages" },
  { src: "images/all/web-design8.jpg", category: "web-design" },
  { src: "images/all/web-design9.png", category: "web-design" },
  { src: "images/all/web-design10.png", category: "web-design" },
  { src: "images/all/web-design11.png", category: "web-design" },
  { src: "images/all/web-design12.png", category: "web-design" },
  { src: "images/all/wordpress11.png", category: "wordpress" },
  { src: "images/all/wordpress12.png", category: "wordpress" },
  {
    src: "images/graphic-design/graphic-design1.jpg",
    category: "graphic-design",
  },
  {
    src: "images/graphic-design/graphic-design2.jpg",
    category: "graphic-design",
  },
  {
    src: "images/graphic-design/graphic-design3.jpg",
    category: "graphic-design",
  },
  {
    src: "images/graphic-design/graphic-design4.jpg",
    category: "graphic-design",
  },
  {
    src: "images/graphic-design/graphic-design5.jpg",
    category: "graphic-design",
  },
  {
    src: "images/graphic-design/graphic-design6.jpg",
    category: "graphic-design",
  },
  { src: "images/landing-pages/landing-page1.jpg", category: "landing-pages" },
  { src: "images/landing-pages/landing-page2.jpg", category: "landing-pages" },
  { src: "images/landing-pages/landing-page3.jpg", category: "landing-pages" },
  { src: "images/landing-pages/landing-page4.jpg", category: "landing-pages" },
  { src: "images/landing-pages/landing-page5.jpg", category: "landing-pages" },
  { src: "images/landing-pages/landing-page6.jpg", category: "landing-pages" },
  { src: "images/landing-pages/landing-page7.jpg", category: "landing-pages" },
  {
    src: "images/graphic-design/graphic-design7.jpg",
    category: "graphic-design",
  },
  {
    src: "images/graphic-design/graphic-design8.jpg",
    category: "graphic-design",
  },
  {
    src: "images/graphic-design/graphic-design9.jpg",
    category: "graphic-design",
  },
  {
    src: "images/graphic-design/graphic-design10.jpg",
    category: "graphic-design",
  },
  {
    src: "images/graphic-design/graphic-design11.jpg",
    category: "graphic-design",
  },
  {
    src: "images/graphic-design/graphic-design12.jpg",
    category: "graphic-design",
  },
  { src: "images/web-design/web-design1.jpg", category: "web-design" },
  { src: "images/web-design/web-design2.jpg", category: "web-design" },
  { src: "images/web-design/web-design3.jpg", category: "web-design" },
  { src: "images/web-design/web-design4.jpg", category: "web-design" },
  { src: "images/web-design/web-design5.jpg", category: "web-design" },
  { src: "images/web-design/web-design6.jpg", category: "web-design" },
  { src: "images/web-design/web-design7.jpg", category: "web-design" },
  { src: "images/wordpress/wordpress1.jpg", category: "wordpress" },
  { src: "images/wordpress/wordpress2.jpg", category: "wordpress" },
  { src: "images/wordpress/wordpress3.jpg", category: "wordpress" },
  { src: "images/wordpress/wordpress4.jpg", category: "wordpress" },
  { src: "images/wordpress/wordpress5.jpg", category: "wordpress" },
  { src: "images/wordpress/wordpress6.jpg", category: "wordpress" },
  { src: "images/wordpress/wordpress7.jpg", category: "wordpress" },
  { src: "images/wordpress/wordpress8.jpg", category: "wordpress" },
  { src: "images/wordpress/wordpress9.jpg", category: "wordpress" },
  { src: "images/wordpress/wordpress10.jpg", category: "wordpress" },
];

let imagesLoaded = 0;
let totalImages = images.length;
let imagesToLoad = 12;

function loadImages() {
  const btnWrap = document.querySelector(".filter-buttons");
  const activeBtn = btnWrap.querySelector(".active");

  for (let i = imagesLoaded; i < imagesLoaded + imagesToLoad; i++) {
    if (i >= totalImages) {
      loadMoreButton.style.display = "none";
      break;
    }

    // hover 109-157string
    const imgContainer = document.createElement("div");
    const img = document.createElement("img");
    const overlay = document.createElement("div");

    img.src = images[i].src;
    img.classList.add(images[i].category);
    imgContainer.appendChild(img);
    imgContainer.appendChild(overlay);
    imgContainer.classList.add("img-container");
    overlay.classList.add("image-overlay");
    overlay.innerHTML = `<div class="overlay-text">
    <svg class="svg-icons" width="88" height="43" viewBox="0 0 88 43" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_2143_233)">
      <rect x="1" y="2" width="41" height="40" rx="20" stroke="#18CFAB"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M26.9131 17.7282L25.0948 15.8913C24.2902 15.0809 22.983 15.0759 22.1768 15.8826L20.1592 17.8926C19.3516 18.6989 19.3482 20.0103 20.1505 20.8207L21.3035 19.689C21.1868 19.3284 21.3304 18.9153 21.6159 18.6295L22.8995 17.3519C23.3061 16.9462 23.9584 16.9491 24.3595 17.3543L25.4513 18.458C25.8528 18.8628 25.8511 19.5171 25.447 19.9232L24.1634 21.2024C23.8918 21.473 23.4461 21.6217 23.1002 21.5263L21.9709 22.6589C22.7745 23.4718 24.0803 23.4747 24.8889 22.6684L26.9039 20.6592C27.7141 19.8525 27.7167 18.5398 26.9131 17.7282ZM19.5261 25.0918C19.6219 25.4441 19.4686 25.8997 19.1909 26.1777L17.9923 27.3752C17.5807 27.7845 16.916 27.7833 16.5067 27.369L15.393 26.2475C14.9847 25.8349 14.9873 25.1633 15.3982 24.7547L16.598 23.5577C16.8903 23.2661 17.3104 23.1202 17.6771 23.2438L18.8335 22.0715C18.0149 21.2462 16.6825 21.2421 15.8606 22.0632L13.9152 24.0042C13.0923 24.8266 13.0884 26.1629 13.9065 26.9886L15.7582 28.8618C16.576 29.6846 17.9072 29.6912 18.7311 28.8701L20.6765 26.9287C21.4985 26.1054 21.5024 24.7717 20.6855 23.9443L19.5261 25.0918ZM19.2579 24.5631C18.9801 24.8419 18.5343 24.8411 18.2618 24.5581C17.9879 24.2743 17.9901 23.8204 18.2661 23.5399L21.5907 20.1611C21.8668 19.8823 22.3117 19.8831 22.5851 20.164C22.8605 20.4457 22.8588 20.9009 22.5817 21.183L19.2579 24.5631Z" fill="#1FDAB5"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M66.5973 1.99795C77.8653 1.99795 86.9999 10.9523 86.9999 21.9979C86.9999 33.0432 77.8653 41.9979 66.5973 41.9979C55.3292 41.9979 46.1946 33.0432 46.1946 21.9979C46.1946 10.9523 55.3292 1.99795 66.5973 1.99795Z" fill="#18CFAB"/>
      <rect x="60" y="17" width="12" height="11" fill="white"/>
      </g>
      <defs>
      <clipPath id="clip0_2143_233">
      <rect width="88" height="43" fill="white"/>
      </clipPath>
      </defs>
      </svg>
      <h2 class="title-hover">creative design</h2>
      <p class="category">${images[i].category}</p>
    </div>`;

    if (activeBtn.dataset.filter !== "all") {
      const btnStyle =
        activeBtn.dataset.filter === images[i].category ? "block" : "none";
      imgContainer.style.display = btnStyle;
    }

    imgContainer.addEventListener("mouseover", () => {
      img.style.display = "none";
      overlay.style.display = "block";
    });

    overlay.addEventListener("mouseout", () => {
      overlay.style.display = "none";
      img.style.display = "block";
    });

    imageGallery.appendChild(imgContainer);
  }
  imagesLoaded += imagesToLoad;
}

filterImages("all");
loadImages();

function filterImages(category) {
  const filteredImages = document.querySelectorAll(
    `.image-gallery img:not(.${category})`
  );
  filteredImages.forEach((image) => {
    image.style.display = "none";
  });

  const visibleImages = document.querySelectorAll(
    `.image-gallery img.${category}`
  );
  visibleImages.forEach((image) => {
    image.style.display = "block";
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const currentFilter = document.querySelector(".filter-button.active");
    currentFilter.classList.remove("active");
    button.classList.add("active");
    if (button.dataset.filter === "all") {
      const allImages = document.querySelectorAll(".image-gallery img");
      allImages.forEach((image) => {
        image.style.display = "block";
      });
    } else {
      filterImages(button.dataset.filter);
    }
  });
});

loadMoreButton.addEventListener("click", () => {
  loadImages();
});

// filter-and-tabs-what-people-say-about-the-ham
const employeeTabs = document.querySelectorAll(
  ".tabs-employee-information li.tab"
);
const tabContents = document.querySelectorAll(".content-tab");

const array = Array.prototype.slice.call(employeeTabs);

employeeTabs.forEach((clickedTab) => {
  clickedTab.addEventListener("click", () => {
    employeeTabs.forEach((tab) => {
      tab.classList.remove("active");
    });

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active");
    });

    clickedTab.classList.add("active");
    const activeTab = document.querySelector(clickedTab.dataset.target);
    activeTab.classList.add("active");
  });
});

// карусель и рабочие кнопки
const tabElements = document.querySelector(".tabs-employee-information");
const tabList = tabElements.querySelectorAll(".tab");
const leftButton = tabElements.querySelector(".left-button");
const rightButton = tabElements.querySelector(".right-button");
let previousTab = null;

function setActiveTab(index) {
  tabList.forEach((tab) => {
    tab.classList.remove("active");
    tab.style.marginTop = "0px";
  });
  previousTab = tabElements.querySelector(".tab.active");
  tabList[index].classList.add("active");
}

function moveTab(offset) {
  const activeTab = tabElements.querySelector(".tab.active");
  const activeTabIndex = Array.prototype.indexOf.call(tabList, activeTab);

  const newTabIndex = (activeTabIndex + offset) % tabList.length;
  const newIndex = newTabIndex < 0 ? tabList.length + newTabIndex : newTabIndex;

  const arrayTab = array[activeTabIndex].dataset.target;
  const activeContainer = document.querySelector(`${arrayTab}`);

  tabContents.forEach((container) => {
    container.classList.remove("active");
  });
  activeContainer.classList.add("active");

  setActiveTab(newIndex);

  if (previousTab) {
    previousTab.style.marginTop = "0";
  }
  activeTab.style.marginTop = "-20px";
}

leftButton.addEventListener("click", () => moveTab(-1));
rightButton.addEventListener("click", () => moveTab(1));

//masonry
const photo = document.querySelector(".photo-gallery-of-best-images");
document.addEventListener("readystatechange", () => {
  let msnry = new Masonry(photo, {
    itemSelector: ".gallery-item",
    columnWidth: 378,
    gutter: 10,
    horizontalOrder: true,
  });
});

const photoSecond = document.querySelector(
  ".photo-gallery-of-best-images-second"
);
document.addEventListener("readystatechange", () => {
  let msnrySecond = new Masonry(photoSecond, {
    itemSelector: ".gallery-item-second",
    columnWidth: 180,
    gutter: 10,
    horizontalOrder: true,
  });
});

const photoThree = document.querySelector(
  ".photo-gallery-of-best-images-three"
);
document.addEventListener("readystatechange", () => {
  let msnryThree = new Masonry(photoThree, {
    itemSelector: ".gallery-item-three",
    columnWidth: 124,
    gutter: 3,
    horizontalOrder: true,
  });
});
