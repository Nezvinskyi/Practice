/* eslint-disable arrow-parens */
/* eslint-disable no-use-before-define */
// Webinar 27.01.2021
// task-1 chnge color of parent when hover on child
// variant 1
// const refs = {
// card: document.querySelector('.card'),
// cardDelete: document.querySelector('.card__delete'),
// }

// refs.cardDelete.addEventListener('mouseover', event => {
// refs.card.classList.add('card_focus')
// })
// refs.cardDelete.addEventListener('mouseout', event => {
// refs.card.classList.remove('card_focus')
// })

// variant 2 - delegation
let refs = {
  card: document.querySelector('.card'),
};

refs.card.addEventListener('mouseover', onMouseOver);
refs.card.addEventListener('mouseout', onMouseOut);

function onMouseOver(event) {
  if (event.target.classList.contains('card__delete')) {
    event.currentTarget.classList.add('card_focus');
  }
}

function onMouseOut(event) {
  if (event.target.classList.contains('card__delete')) {
    event.currentTarget.classList.remove('card_focus');
  }
}
//---------------------------------------------

/*
 * task-2 (4 red boxes chnge color to green when click on box.
 * if there is already a green box - switch to red)
 */

refs.parent = document.querySelector('.parent');
const boxesRef = document.querySelectorAll('.box');

refs.parent.addEventListener('click', event => {
  if (!event.target.classList.contains('box')) return;
  resetColor();
  event.target.classList.add('box-active');
});

function resetColor() {
  boxesRef.forEach(box => box.classList.remove('box-active'));
}

// task-3 (field of 8x8 squares
// click on square toggles white / black background.add button to toggle all squares colors)

refs.field = document.querySelector('.field');
refs.reverseBtn = document.querySelector('.reverse');

const boxMarkup = '<div class = "square"></div>';
for (let i = 0; i < 64; i += 1) {
  refs.field.insertAdjacentHTML('beforeend', boxMarkup);
}

const squaresRef = document.querySelectorAll('.square');

refs.field.addEventListener('click', event => {
  if (!event.target.classList.contains('square')) return;

  event.target.classList.toggle('square-active');
});

refs.reverseBtn.addEventListener('click', reverseColors);

// Variant 1
function reverseColors() {
  squaresRef.forEach(square => {
    square.classList.toggle('square-active');
  });
}
// //variant 2. CSS classes
// function reverseColors() {
// refs.field.classList.toggle('field-reverse');
// }

// task-4
const treeRef = document.querySelector('.tree');

treeRef.addEventListener('click', event => {
  if (!event.target.classList.contains('tree__item')) return;

  const branchRef = event.target.querySelector('.tree__branch');

  if (!branchRef) return;

  // folds all nested branches

  if (branchRef.classList.contains('open')) {
    branchRef.querySelectorAll('.tree__branch').forEach(branch => {
      branch.classList.remove('open');
    });
  }

  branchRef.classList.toggle('open');
});

// Webinar 2
// Task-1. Infinity scroll

import countries from './countries.js';

let startIndex = 0;
const COUNTY_FOCUS_COUNT = 10;
let handlerCallCount = 0;

refs.countriesList = document.querySelector('.countries-list');
refs.startBtn = document.querySelector('.start-btn');

function createCountry(country) {
  const countryRef = document.createElement('h5');
  countryRef.classList.add('country');
  countryRef.textContent = country;
  return countryRef;
}

function isScrollToBottom() {
  return window.innerHeight + window.scrollY >= document.body.offsetHeight;
}

function renderFocusCountries(list) {
  const focusCountries = countries.slice(
    startIndex,
    startIndex + COUNTY_FOCUS_COUNT,
  );
  const countriesRef = focusCountries.map(createCountry);
  list.append(...countriesRef);
}
function scrollHandler() {
  console.log(++handlerCallCount);
  if (!isScrollToBottom()) return;
  renderFocusCountries(refs.countriesList);
  startIndex += COUNTY_FOCUS_COUNT;
}

refs.startBtn.addEventListener('click', () => {
  window.addEventListener('scroll', _.throttle(scrollHandler, 200));
});

// task-3  live search
refs.searchRef = document.querySelector('.search');
refs.filterList = document.querySelector('.countries-filter-list');

function renderFilteredCountries(filteredCountries) {
  const filteredRefs = filteredCountries.map(createCountry);

  refs.filterList.append(...filteredRefs);
}

function liveFilter(input) {
  const arr = countries.filter(country =>
    country.toLowerCase().includes(input.toLowerCase()),
  );
  renderFilteredCountries(arr);
}

function handleSearch(event) {
  console.log(++handlerCallCount);
  refs.filterList.innerHTML = '';
  liveFilter(event.target.value);
}
refs.searchRef.addEventListener('input', _.debounce(handleSearch, 200));

// task-5. infinity scroll & IntersectionObserver

refs.ioCountriesList = document.querySelector('.io-country-list');
refs.anchorRef = document.querySelector('.anchor');

console.log(refs);
function observerCallback([entrie], observerRef) {
  console.log(++handlerCallCount);
  if (!entrie.isIntersecting) return;
  renderFocusCountries(refs.ioCountriesList);
  startIndex += COUNTY_FOCUS_COUNT;

  if (startIndex >= countries.length) {
    observerRef.unobserve(refs.anchorRef);
  }
}

const options = {
  threshold: 0,
};

const observer = new IntersectionObserver(observerCallback, options);

observer.observe(refs.anchorRef);
