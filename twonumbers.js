function firstNumber() {
    var x = prompt("Введите число первое число");
    var x = Number(x);
    return x;
}

function secondNumber() {
    var x = prompt("Введите первое число в квадрате");
    var x = Number(x);
    return x;
}

function result() {
    var a = firstNumber();
    var b = secondNumber();
    if (b === a * a) {
        var y = "Значение верно";
    } else {
        var y = "Значение не верно"
    }
    return y;
}
alert(result());