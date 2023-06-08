/** 
  * capitalization - capitalize letters that occupy
                     even & odd indexes seperately
  * Description: Index 0 will be considered even
  * s - string arg
  * return: both even and odd version of the string
*/

function capitalization(s) {
  const result = [];
  const even = [];
  const odd = [];
  const s_copy = s.split('');

  s_copy.forEach((ele, index) => {
    if (index === 0 || index % 2 === 0) {
      even.push(ele.toUpperCase());
    } else {
      even.push(ele);
    }
  })

  s_copy.forEach((ele, index) => {
    if (index % 2 !== 0) {
      odd.push(ele.toUpperCase());
    } else {
      odd.push(ele);
    }
  })
  result.push(even.join(''));
  result.push(odd.join(''));
  return result;
}