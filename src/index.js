module.exports = function check(str, arrParam) {
  let elements = str.split('');
  let openBrakets = []; //array for open elements
  let closeBrakets = []; //array for close elements
  let sameBrakets = []; //array for same elements like [8,8]
  let stack = []; // stak array
  let openIndex;
  let closeIndex

  //sorting open/close/same elements
  for (let i = 0; i < arrParam.length; i++) {
    openBrakets.push(arrParam[i][0]);
    closeBrakets.push(arrParam[i][1]);
    if (arrParam[i][0] == arrParam[i][1]) {
      sameBrakets.push(arrParam[i][0]);
    }
  }

  //using stack find open/close elemnts
  for (let i = 0; i < elements.length; i++) {
    openIndex = openBrakets.indexOf(elements[i]);
    if (openIndex !== -1) {
      //Find open bracket
      if (sameBrakets.indexOf(elements[i]) !== -1) {
        if (stack[stack.length - 1] !== openIndex) {
          stack.push(openIndex);
          continue;
        }
      } else {
        stack.push(openIndex);
      }
    }

    closeIndex = closeBrakets.indexOf(elements[i]);
    if (closeIndex !== -1) {
      //Find close braket
      openIndex = stack.pop();
      if (openIndex !== closeIndex) {
        return false;
      }
    }
  }

  if (stack.length !== 0) {
    return false;
  }
  return true;
}