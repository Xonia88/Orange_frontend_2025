//se da un array, sa se inverseze elementele din array, fara a crea un alt array
function reverseArray(arr) {
    var left = 0;
    var right = arr.length - 1;
    while (left < right) {
        var temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
    return arr; 
}
console.log(reverseArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
console.log(reverseArray([5, 4, 3, 2, 1])); // [1, 2, 3, 4, 5]
console.log(reverseArray([1, 3, 5, 7, 9, 11])); // [11, 9, 7, 5, 3, 1]
var arr = [-1, -3, -5, -7, -9];
console.log(arr); // [-1, -3, -5, -7, -9]
console.log(reverseArray(arr)); // [-9, -7, -5, -3, -1]
console.log(arr); // [-9, -7, -5, -3, -1]
