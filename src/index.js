import './css/common.css';

import pokemonCardTpl from '../src/templates/pokemon-card.hbs';
import API from './js/api-service';
import getRefs from './js/get-refs';

const refs = getRefs();

refs.searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const searchQuery = form.elements.query.value;

  API.fetchPokemon(searchQuery).then(renderPokemonCard).catch(onFetchError);
}

function renderPokemonCard(pokemon) {
  const markup = pokemonCardTpl(pokemon);
  refs.cardContainer.innerHTML = markup;
}

function onFetchError(error) {
  alert('Wooopppssss.... :-(');
}

// ======+++ rest

fetch('https://pokeapi.co/api/v2/pokemon?limit=1000')
  .then(r => r.json())
  .then(console.log);

fetch(
  'https://pixabay.com/api/?key=20542752-0490219c09a6da4a08c0fa17e&q=yellow+flowers&image_type=photo',
)
  .then(r => r.json())
  .then(console.log);
