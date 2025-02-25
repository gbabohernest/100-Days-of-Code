import {
  clearPushListener,
  clearSearchText,
  setSearchFocus,
  showClearTextButton,
} from './searchBar.js';
import {
  deleteSearchResults,
  buildSearchResults,
  clearStatsLine,
  setTheStatsLine,
} from './buildSearchResults.js';
import { getSearchTerm, getSearchResults } from './helperFunctions.js';

const initApplication = () => {
  setSearchFocus();
  const search = document.getElementById('search');
  search.addEventListener('input', showClearTextButton);
  const clear = document.getElementById('clear');
  clear.addEventListener('click', clearSearchText);
  clear.addEventListener('keydown', clearPushListener);
  const form = document.getElementById('searchBar');
  form.addEventListener('submit', submitSearchQuery);
};

const submitSearchQuery = (e) => {
  e.preventDefault();
  deleteSearchResults();
  processTheSearch();
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

document.addEventListener('DOMContentLoaded', () => {
  // console.log('hi');
  initApplication();
});
