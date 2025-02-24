/**
 * A function that return the search term after sanitization.
 */
export const getSearchTerm = () => {
  const searchTerm = document.getElementById('search').value.trim();
  const regex = /[ ]{2,}/gi; // find two or more spaces in the search term.
  return searchTerm.replace(regex, ' ');
};

/**
 * A function that retrieve and return the search results.
 * @param {string} - A string representing the searchQuery
 * @return {array} - An array of the search results.
 */
export const getSearchResults = async (searchQuery) => {
  const searchString = getSearchString(searchQuery);
  const searchResults = await requestData(searchString);
  let results = [];

  if (searchResults.hasOwnProperty('query')) {
    // we have results
    results = processSearchResults(searchResults.query.pages);
  }
  return results;
};

/**
 * Process the results return from the Wikipedia API
 * @return {array} An array containing the results.
 */
const processSearchResults = (results) => {
  const resultArray = [];
  Object.keys(results).forEach((key) => {
    const id = key;
    const title = results[key].title;
    const text = results[key].extract;
    const img = results[key].hasOwnProperty('thumbnail')
      ? results[key].thumbnail.source
      : null;
    const item = {
      id: id,
      title: title,
      img: img,
      text: text,
    };
    resultArray.push(item);
  });
  return resultArray;
};

/**
 * Fetch data from the wikipedia api
 * @param {*} searchString - search uri.
 */
const requestData = async (searchString) => {
  try {
    const response = await fetch(searchString);
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
  }
};

/**
 * Construct a Wikipedia API search URL for a given topic.
 * @param {string} topic - The search term for Wikipedia.
 * @returns {string} - The encoded Wikipedia API search URL.
 */
const getSearchString = (topic) => {
  const maxChars = getMaxCharacters();
  const searchString = `https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${topic}&gsrlimit=20&prop=pageimages|extract&exchars=${maxChars}&exintro&explaintext&exlimit=max&format=json&origin=*`;

  return encodeURI(searchString);
};

/**
 * Return the max character  in the extract of a search term (topic) based on the user's viewport width
 */
const getMaxCharacters = () => {
  const width = window.innerWidth || document.body.clientWidth;
  let maxChars;

  if (width < 414) maxChars = 65;
  if (width >= 414 && width < 1400) maxChars = 100;
  if (width >= 1400) maxChars = 130;

  return maxChars;
};
