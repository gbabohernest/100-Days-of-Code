import { setSearchFocus } from './searchBar.js';
import {
  buildSearchResults,
  clearStatsLine,
  setTheStatsLine,
} from './buildSearchResults.js';
import { getSearchTerm, processTheSearchQuery } from './helperFunctions.js';

document.addEventListener('readystatechange', (e) => {
  if (e.target.readystate === 'complete') {
    initApplication();
  }
});

const initApplication = () => {
  //set the focus on text input
  setSearchFocus();
  //TODO 3 listeners clear text

  const form = document.getElementById('searchBar');
  form.addEventListener('submit', submitSearchQuery);
};

const submitSearchQuery = (e) => {
  e.preventDefault();
  //TODO delete old search result
  processTheSearchQuery();
  setSearchFocus();
};

/**
 * A function that process the search query
 */
const processTheSearch = async () => {
  clearStatsLine();
  const searchTerm = getSearchTerm();
  if (searchTerm === '') return;

  const resultList = await getSearchResults(searchTerm);
  if (resultList.length) buildSearchResults(resultList);
  setTheStatsLine(resultList.length);
};
