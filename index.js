const openMenu = document.querySelector('.hamburger-container__img');
const closeMenu = document.querySelector('.hamburger__close-img');
const hamburger = document.querySelector('.hamburger');
const menuLinks = document.querySelectorAll('.menu-links');
const featuredSpeakers = document.querySelector(
  '.featured-speakers__dynamic-box',
);
const seeMore = document.querySelector('.see-more__btn');
const seeLess = document.querySelector('.see-less');

// Opening the hamburger menu
function openHamburgerMenu() {
  hamburger.classList.remove('hidden');
}

openMenu.addEventListener('click', openHamburgerMenu);

// Closing the hamburger menu

function closeHamburgerMenu() {
  hamburger.classList.add('hidden');
}

closeMenu.addEventListener('click', closeHamburgerMenu);

// Go to the link
menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    hamburger.classList.add('hidden');
  });
});

// Dynamic speakers
const dynamicSpeakers = [
  {
    id: 1,
    img: '/assets/Chimamanda.svg',
    name: 'Chimamanda Ngozi Adichie',
    occupation: ' Author and Publisher',
    description:
      'Chimamanda is an award winning writer of numerous books, sold in over 100 languages.',
  },
  {
    id: 2,
    img: '/assets/Safra-cat.svg',
    name: 'Safra Catz',
    occupation: 'CEO Oracle',
    description:
      ' Safra is the CEO of Oracle,a banker and an accounting lecturer at Stanford Business School',
  },
  {
    id: 3,
    img: '/assets/Sumbul.svg',
    name: 'Dr. Sumbul Desaie',
    occupation: 'Vice president of health, Apple',
    description:
      "Desaie has spear-headed Apple's effort to break into the healthcare market through fresh technologies.",
  },
  {
    id: 4,
    img: '/assets/Ifedayo.svg',
    name: 'Ifedayo Agoro',
    occupation: 'CEO DANG!, content and media strategist',
    description:
      'Ife owns an online community that inspires women to lead better lives. She is the founder and creative lead of DANG!.',
  },
  {
    id: 5,
    img: '/assets/Fei-fei.svg',
    name: 'Fei-Fei LI',
    occupation: " Co-director of Stanford's Human-Centered AI Institute",
    description:
      'Fei-Fei co-founded AI4ALL, and has helped increased the diversity in the AI sphere through educating and mentoring people.',
  },
  {
    id: 6,
    img: '/assets/Chimamanda.svg',
    name: 'Blessing Ogodo',
    occupation: ' UI/UX Designer',
    description:
      'Blessing is one of the fastest rising stars in tech. She has been a majir part of the progress of many companies in Africa and Europe.',
  },
];

const speakers = function () {
  for (let i = 0; i < dynamicSpeakers.length; i += 1) {
    featuredSpeakers.innerHTML += `
        <div class="featured-speakers__box featured-speakers__box-display">
            <img
              src="${dynamicSpeakers[i].img}"
              alt="featured speaker ${dynamicSpeakers[i].id}"
              class="featured-speakers__img"
            />
            <div class="featured-speakers__info">
              <h3 class="featured-speakers__name">${dynamicSpeakers[i].name}</h3>
              <h4 class="featured-speakers__occupation">
               ${dynamicSpeakers[i].occupation}
              </h4>
              <i class="gray-line"></i>
              <p class="featured-speakers__description">
               ${dynamicSpeakers[i].description}
              </p>
            </div>
          </div>
          `;
  }
};

window.addEventListener('load', speakers);

// See more button
let currentItems = 2;

seeMore.addEventListener('click', () => {
  const speakers = [...document.querySelectorAll('.featured-speakers__box')];

  for (let i = currentItems; i < speakers.length; i += 1) {
    speakers[i].style.display = 'flex';
  }

  currentItems += 4;

  if (currentItems >= speakers.length) {
    seeMore.style.display = 'none';
    seeLess.classList.remove('hidden');
  }
});

// see less button
seeLess.addEventListener('click', () => {
  const speakers = [...document.querySelectorAll('.featured-speakers__box')];

  for (let i = 2; i < speakers.length; i += 1) {
    speakers[i].style.display = 'none';
  }

  currentItems -= 4;

  if (currentItems <= 2) {
    seeMore.style.display = 'flex';
    seeLess.classList.add('hidden');
  }
});

// Active page
const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('.active');

navLinks.forEach((link) => {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add('active');
  }
});
