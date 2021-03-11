import './css/common.css';
import MoviePagination from './js/movie-pagination';

const movies = new MoviePagination('.movie-list');
const prevPaginationBtnRef = document.querySelector('#prev-page');
const nextPaginationBtnRef = document.querySelector('#next-page');

movies.fetchMovies();

prevPaginationBtnRef.addEventListener('click', movies.goToPrevPage);
nextPaginationBtnRef.addEventListener('click', movies.goToNextPage);
