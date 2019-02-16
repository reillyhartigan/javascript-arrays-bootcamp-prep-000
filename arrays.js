var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]; //define array
function addElementToBeginningOfArray(array, element) {
var array = [array, ...chocolateBars]
return array
};
function destructivelyAddElementToBeginningOfArray(array, element) {
return array.push(element)
}
