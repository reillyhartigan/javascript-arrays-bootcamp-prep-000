var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]; //define array
function addElementToBeginningOfArray(array, element) {
return [element, ...array]
return array
};
function destructivelyAddElementToBeginningOfArray(array, element) {
return array.onshift(element)
};
function addElementToEndOfArray(array, element) {
  return [...array, element]
};
function destructivelyAddElementToEndOfArray(array, element) {
  return array.push(element)
}
