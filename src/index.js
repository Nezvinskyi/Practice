import './css/common.css';

/*
 * https://newsapi.org/
 * 4330ebfabc654a6992c2aa792f3173a3
 * http://newsapi.org/v2/everything?q=cat&language=en&pageSize=5&page=1
 */

const options = {
  headers: {
    Authorization: 'd082869b7f79460ea045ec72443d6f3f',
  },
};

fetch('https://newsapi.org/v2/everything?q=imac&pageSize=5&page=3', options)
  .then(r => r.json())
  .then(console.log);
