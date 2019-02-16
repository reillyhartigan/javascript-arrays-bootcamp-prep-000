var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]; //define array
function addElementToBeginningOfArray(array, element) {
return [element, ...array]
};
function destructivelyAddElementToBeginningOfArray(array, element) {
return array.push(element)
}
