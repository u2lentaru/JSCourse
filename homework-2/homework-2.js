//1. Дан код:
//var a = 1, b = 1, c, d;
//c = ++a; alert(c);           // 2
//d = b++; alert(d);           // 1
//c = (2+ ++a); alert(c);      // 5
//d = (2+ b++); alert(d);      // 4
//alert(a);                    // 3
//alert(b);                    // 3
//Почему код даёт именно такие результаты?

Разобран на занятии.

//2. Чему будет равен x в примере ниже?
//var a = 2;
//var x = 1 + (a *= 2);

5

//3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. 
//Затем написать скрипт, который работает по следующему принципу:
//если a и b положительные, вывести их разность;
//если а и b отрицательные, вывести их произведение;
//если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом. ### 

var a=Math.random();
var b=Math.random();
if (a>=0) && (b>=0){
    alert(a-b);
}
if (a<0) && (b<0){
    alert(a*b);
}
if (a>=0 && b>=0) || (a<0 && b<0){
    alert(a+=b);
}


//4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать 
//вывод чисел от a до 15. 

var a=parse int(Math.random()*(15-1)+1);
switch(a){
    case 1:
        alert(a);
    case 2:
        alert(a);    
    case 3:
        alert(a);
    case 4:
        alert(a);
    case 5:
        alert(a);
    case 6:
        alert(a);
    case 7:
        alert(a);
    case 8:
        alert(a);
    case 9:
        alert(a);
    case 10:
        alert(a);
    case 11:
        alert(a);
    case 12:
        alert(a);
    case 13:
        alert(a);
    case 14:
        alert(a);
    case 15:
        alert(a);
}

//### 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. 
//Обязательно использовать оператор return. 

function subtr(a,b){
    return a-b;
}

function addition(a,b){
    return a+=b;
}

function mult(a,b){
    return a*b;
}

function division(a,b){
    return a/b;
}


//### 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), 
//где arg1, arg2 – значения аргументов, operation – строка с названием операции. 
//В зависимости от переданного значения операции выполнить одну из арифметических операций 
//(использовать функции из пункта 3) и вернуть полученное значение (использовать switch). 

function mathOperation(arg1, arg2, operation){
    
}

//### 7. *Сравнить null и 0. Попробуйте объяснить результат. 

alert(null == 0);

//### 8. *С помощью рекурсии организовать функцию возведения числа в степень. 
//Формат: function power(val, pow), где val – заданное число, pow – степень.

function power(val,pow){
    if pow==1{
        return val;
    }
    return val*power(val,pow-1);
}
