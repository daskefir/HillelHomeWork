function input() {
    var x = prompt("Введите палиндром");
    return x;
}

function isPalindrome() {
    var x = input();
    var xlen = x.length;
    xRev = x.split('').reverse().join('');
    if (x == xRev) {
        console.log("yes");
    } else {
        console.log("no");
    }
}
isPalindrome();