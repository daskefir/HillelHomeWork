function numero1() {
    var a = prompt("Введите первое число");
    var a = Number(a);
    return a;
}

function numero2() {
    var a = prompt("Введите второе число");
    var a = Number(a);
    return a;
}

function numero3() {
    var a = prompt("Введите третье число");
    var a = Number(a);
    return a;
}

function summa() {
    var x = numero1() + numero2() + numero3();
    return x;
}

function middle() {
    var x = summa() / 3;
    return x;
}

alert(middle());