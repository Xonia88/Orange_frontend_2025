//se da un element target si sa se verifice daca acesta se afla intr-un array
function searchElement(arr, target) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return true;
        }   
    }   
    return false;
}
console.log(searchElement([1, 2, 3, 4, 5], 3)); // true
console.log(searchElement([1, 2, 3, 4, 5], 6)); // false