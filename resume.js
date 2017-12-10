function age() {
    var x = prompt("Укажите ваш возраст");
    var x = Number(x);
    if (x > 20 && x < 50) {
        var y = 1;
    } else {
        var y = -5;
    }
    return y;
}

function experience() {
    var x = prompt("Сколько лет опыта в программировании вы имеете?");
    var x = Number(x);
    if (x > 3) {
        var y = 1;
    } else {
        var y = -1;
    }
    return y;
}

function anguLar() {
    var x = prompt("Работали ли вы с Angular.js");
    if (x === "да") {
        var y = 1;
    } else {
        var y = 0;
    }
    return y;
}

function bootStrap() {
    var x = prompt("Имеете ли вы опыт работы с bootstrap");
    if (x === "да") {
        var y = 1;
    } else {
        var y = 0;
    }
    return y;
}

function htmlCss() {
    var x = prompt("Имеете ли вы опыт работы с html и css");
    if (x === "да") {
        var y = 1;
    } else {
        var y = 0;
    }
    return y;
}

function gitHub() {
    var x = prompt("Имеете ли вы опыт работы с git.hub");
    if (x === "да") {
        var y = 1;
    } else {
        var y = 0;
    }
    return y;
}

function result() {
    var a = age();
    var b = experience();
    var c = anguLar();
    var d = bootStrap();
    var e = htmlCss();
    var f = gitHub();
    var s = a + b + c + d + e + f;
    if (s > 4) {
        var i = "Поздравляем! Вы нам подходите.";
    } else {
        var i = "К сожалению, Вы нам не подходите";
    }
    return i;
}
alert(result());