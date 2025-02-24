/**
 * A function that return the search term after sanitization.
 */
export const getSearchTerm = () => {
  const searchTerm = document.getElementById('search').value.trim();
  const regex = /[ ]{2,}/gi; // find two or more spaces in the search term.
  return searchTerm.replace(regex, ' ');
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
