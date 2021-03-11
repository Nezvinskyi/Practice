import './css/common.css';
import MoviePagination from './js/movie-pagination';
import lodash from 'lodash';

const movies = new MoviePagination('.movie-list');
const observerRef = document.querySelector('.last-item-observer');

// with debounce
const observerHandler = lodash.debounce(entries => {
  const { isIntersecting } = entries[0];
  if (!isIntersecting) return;

  movies.loadMore();
}, 300);

// without debounce
// let isLoading = false;

// const observerHandler = entries => {
//   const { isIntersecting } = entries[0];
//   if (isLoading || !isIntersecting) return;
//   isLoading = true;

//   movies.loadMore().finally(() => {
//     isLoading = false;
//   });
// };
const observer = new IntersectionObserver(observerHandler);
observer.observe(observerRef);

const prevPaginationBtnRef = document.querySelector('#prev-page');
const nextPaginationBtnRef = document.querySelector('#next-page');

// movies.mount();

prevPaginationBtnRef.addEventListener('click', movies.goToPrevPage);
nextPaginationBtnRef.addEventListener('click', movies.goToNextPage);
