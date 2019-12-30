//1. Для практикума из занятия 7 продумать, где можно применить замыкания.

//Замыкание можно использовать вместо глобальной переменной, например для вычисления текущего счёта.

function currentScore(){
    var currScore = 0;
    return function(){
        return ++currScore;
    }
}



//2. Не выполняя кода, ответить, что выведет браузер и почему:
if (!("a" in window)) {
    var a = 1;
}
alert(a);

//1 - "a" in window даёт false => a объявляется со значением 1

var b = function a(x) {
    x && a(--x);
};
alert(a);

//ничего не выведет, т. к. функции не передаётся никакое значение

function a(x) {
    return x * 2;
}
var a;
alert(a);

//переменная a не инициализирована => выводится код функции

function b(x, y, a) {
    arguments[2] = 10;
    alert(a);
}
b(1, 2, 3);

//10 так как arguments[2] присвоено значение 10.

function a() {
    alert(this);
}
a.call(null);

//объект window, так как this имеет значение null.