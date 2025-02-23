import { setSearchFocus } from './searchBar.js';

document.addEventListener('readystatechange', (e) => {
  if (e.target.readystate === 'complete') {
    initApplication();
  }
});

const initApplication = () => {
  //set the focus on text input
  setSearchFocus();

  const form = document.getElementById('searchBar');
  form.addEventListener('submit', submitSearchQuery);
};

const submitSearchQuery = (e) => {
  e.preventDefault();
  //delete old search result
  //process the search query
  //set the focus on text input;
  setSearchFocus();
};
