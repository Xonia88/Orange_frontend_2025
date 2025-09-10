//afiseaza indexul unde se afla elementul maxim dintr-un array
function printIndexOfMaxElem(arr) {
    var max = arr[0];
    var maxIndex = 0;
    for (let i = 1; i < arr.length; i++) {  
        if (max < arr[i]) {
            max = arr[i];
            maxIndex = i;
        }   
    }
    return maxIndex;
}       
console.log(printIndexOfMaxElem([1, 2, 3, 4, 5])); // 4
console.log(printIndexOfMaxElem([5, 4, 3, 2, 1])); // 0
console.log(printIndexOfMaxElem([1, 3, 5, 7, 9, 11])); // 5 
console.log(printIndexOfMaxElem([-1, -3, -5, -7, -9])); // 0
console.log(printIndexOfMaxElem([-1, -3, -5, -7, 0])); // 4
    