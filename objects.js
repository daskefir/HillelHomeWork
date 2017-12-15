var a = Number.parseInt(prompt("Введите значение"));

function x() {
    var c = isNaN(a);
    return c;
}

function y() {
    var q = x();
    var zero = 0;
    if (q === true) {
        return zero;
    } else {
        return a;
    }
}

alert(y());