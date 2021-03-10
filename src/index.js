// import './js/theory';
// import './js/r-get';
// import './js/c-post';
// import './js/u-patch';
// import './js/d-delete';

const BASE_URL = 'http://localhost:3000';

function getBookNames() {
  fetch(`${BASE_URL}/books`)
    .then(response => response.json())
    .then(data => {
      console.log('object');
      console.log(data);
      showBookCredentials(data, 'title');
    });
}

getBookNames();

function showBookCredentials(data, property) {
  data.forEach(element => {
    console.log(element.id, element[property]);
  });
}
