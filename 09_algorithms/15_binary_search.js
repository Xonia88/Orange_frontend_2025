function binarySearch(arr, target) {
    var left = 0;
    var right = arr.length - 1;
    while (left <= right) {
        var mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid; // elementul a fost gasit, returnam indexul
        } else if (arr[mid] < target) {
            left = mid + 1; // cautam in jumatatea dreapta
        } else {
            right = mid - 1; // cautam in jumatatea stanga
        }
    }
    return -1; // elementul nu a fost gasit
}