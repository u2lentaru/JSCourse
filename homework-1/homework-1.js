//1. Задать температуру в градусах по Цельсию. Вывести в alert соответствующую температуру 
//в градусах по Фаренгейту. Подсказка: расчёт идёт по формуле: Tf = (9 / 5) * Tc + 32, 
//где Tf – температура по Фаренгейту, Tc – температура по Цельсию

var tc=18.1;
var tf;
tf=9*tc/5+32;
alert("tc = "+tc+", tf="+tf);
//tc = 18.1, tf=64.58

//2. Работа с переменными.

//Решение с использованием "+" и "-"
var a=1, b=2;
a=a+b;
b=a-b;
a=a-b;
alert("a = "+a+", b="+b);
//a = 2, b=1

//Более компактный вариант

var a=1, b=2;
[a,b]=[b,a];
alert("a = "+a+", b="+b);
//a = 2, b=1

//3. Объявить две переменные: admin и name. Записать в name строку "Василий"; 
//Скопировать значение из name в admin. Вывести admin (должно вывести «Василий»).



//4. *Чему будет равно JS-выражение 1000 + "108"/

1108?

//5. *Самостоятельно разобраться с атрибутами тега script (async и defer)/