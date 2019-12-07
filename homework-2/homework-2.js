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

var a=parseInt(Math.random()*100)-50;
var b=parseInt(Math.random()*100)-50;
alert(a+" "+b);    
if ((a>=0) && (b>=0)){
    alert("a="+a+" b="+b+", a-b="+(a-b));
}
if ((a<0) && (b<0)){
    alert("a="+a+" b="+b+", a*b="+(a*b));
}
if (((a>=0) && (b>=0)) || ((a<0) && (b<0))){
    alert("a="+a+" b="+b+", a+b="+(a+=b));
} 


//4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать 
//вывод чисел от a до 15. 

var a=parseInt(Math.random()*(15-1)+1);
switch(a){
    case 1:
        console.log("1");
    case 2:
        console.log("2");    
    case 3:
        console.log("3");
    case 4:
        console.log("4");
    case 5:
        console.log("5");
    case 6:
        console.log("6");
    case 7:
        console.log("7");
    case 8:
        console.log("8");
    case 9:
        console.log("9");
    case 10:
        console.log("10");
    case 11:
        console.log("11");
    case 12:
        console.log("12");
    case 13:
        console.log("13");
    case 14:
        console.log("14");
    case 15:
        console.log("15");
}

//index.html:26 8
//index.html:28 9
//index.html:30 10
//index.html:32 11
//index.html:34 12
//index.html:36 13
//index.html:38 14
//index.html:40 15

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

alert("subtr(9,2)="+subtr(9,2));
//subtr(9,2)=7

alert("addition(10,-3)="+addition(10,-3));
//addition(10,-3)=7

alert("mult(5,5)="+mult(5,5));
//mult(5,5)=25

alert("division(5,-2)="+division(5,-2));
//division(5,-2)=-2.5

//### 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), 
//где arg1, arg2 – значения аргументов, operation – строка с названием операции. 
//В зависимости от переданного значения операции выполнить одну из арифметических операций 
//(использовать функции из пункта 3) и вернуть полученное значение (использовать switch). 

function mathOperation(arg1, arg2, operation){
    switch(operation){
        case "+":
           return addition(arg1,arg2);
        case "-":
           return subtr (arg1,arg2);
        case "*":
            return mult (arg1,arg2);
        case "/":
            return subtr (arg1,arg2);
        default:
            alert("incorrect operation!");
            return null;
   } 
}

alert("mathOperation(5,2,\"+\")="+mathOperation(5,2,"+"));
//mathOperation(5,2,"+")=7

//### 7. *Сравнить null и 0. Попробуйте объяснить результат. 

alert(null == 0);
//false
//0 - число, null - отсутствие значения.

//### 8. *С помощью рекурсии организовать функцию возведения числа в степень. 
//Формат: function power(val, pow), где val – заданное число, pow – степень.

function power(val,pow){
    if (pow==1){
        return val;
    }
    return val*power(val,pow-1);
}
alert("2**8="+power(2,8)); 

//2**8=256
