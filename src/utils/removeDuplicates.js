
const removeDuplicates = (array) => {
  let currentIndex = ''

  return array.filter((element, index, currentArray) => {
    currentIndex = currentArray.findIndex((currentElement) => {
      return currentElement.name === element.name
    });
  
    return currentIndex === index
  });
}

export default removeDuplicates;