//se da un array cu numere pozitive si negative, sa se modifice array astfel incat
//numerele negative sa fie modulul lor
function replaceNegativeNumbers(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = arr[i] * -1;
        }
    }
    return arr;
}   
console.log(replaceNegativeNumbers([-1, 2, -3, 4, -5])); // [1, 2, 3, 4, 5] 
console.log(replaceNegativeNumbers([1, -2, 3, -4, 5])); // [1, 2, 3, 4, 5]
