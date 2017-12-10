function inPut() {
    var x = prompt("Выберите валюту ввода: usd, eur, uah");
    return x;
}

function chooseInput() {
    var x = inPut();
    var y;
    if (x === "usd") {
        y = 27.4;
    } else if (x === "eur") {
        y = 30;
    } else if (x === "uah") {
        y = 1;
    } else {
        y = 0;
    }
    return y;
}

function outPut() {
    var q = prompt("Введите валюту вывода: usd, eur, uah");
    return q;
}

function valutOutput() {
    var x = outPut();
    if (x === "usd") {
        var y = 27.4;
    } else if (x === "eur") {
        var y = 30;
    } else if (x === "uah") {
        var y = 1;
    } else {
        y = 0;
    }
    return y;
}

function cashShow() {
    var w = chooseInput();
    var r = valutOutput();
    var e = prompt("Введите сумму");
    var e = Number(e);
    var y = e * w / r;
    return y;
}
alert(cashShow());