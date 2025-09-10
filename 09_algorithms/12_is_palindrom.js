//verifica daca un string este palindrom
//se citeste de la stanga la dreapta si de la dreapta la stanga
function isPalindrom(str) { 
    var left = 0;
    var right = str.length - 1;
    while (left < right) {
        if(str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
console.log(isPalindrom("ana")); // true
isPalindrom("ana"); // true
isPalindrom("capac"); // true
isPalindrom("radar");   
isPalindrom("civic");      
