/**
 * solution - strips all text that follows any of a set
 *            of comment markers passed.
 * @param: input string
 * @param: markers
 * return: striped string
 */

const solution = (input, markers) => {
  //split input into an array of lines
  const linesOfString = input.split("\n");

  const modifiedLinesOfString = linesOfString.map((lineOfString) => {
    //check if the line contains any comment markers
    const indxOfMaker = markers.reduce((index, marker) => {
      const markerPosition = lineOfString.indexOf(marker);
      return markerPosition !== -1 && (index === -1 || markerPosition < index)
        ? markerPosition
        : index;
    }, -1);

    //extract the substring before the comment marker
    const newLineOfString =
      indxOfMaker !== -1 ? lineOfString.slice(0, indxOfMaker) : lineOfString;

    //remove trailing whitespace
    return newLineOfString.trimRight();
  });

  return modifiedLinesOfString.join("\n");
};
