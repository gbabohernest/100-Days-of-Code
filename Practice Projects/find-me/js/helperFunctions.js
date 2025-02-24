/**
 * A function that return the search term after sanitization.
 */
export const getSearchTerm = () => {
  const searchTerm = document.getElementById('search').value.trim();
  const regex = /[ ]{2,}/gi; // find two or more spaces in the search term.
  return searchTerm.replace(regex, ' ');
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
