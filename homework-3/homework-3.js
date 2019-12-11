//1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

var i=0,p=1;
var arr = [];
while (i<=100) {
    arr.push(i);
    i++;
}
i=2;
while (i<=100) {
    p=i+1;
    while (p<=100) {
        if (p%i==0) {
            arr[p]=0; 
        }
        p++;
    }
    i++;
}
i=1;
while (i<=100) {
    if (arr[i]!=0) {
        console.log(arr[i]);
    }
    i++;
}

index.html:30 1
index.html:30 2
index.html:30 3
index.html:30 5
index.html:30 7
index.html:30 11
index.html:30 13
index.html:30 17
index.html:30 19
index.html:30 23
index.html:30 29
index.html:30 31
index.html:30 37
index.html:30 41
index.html:30 43
index.html:30 47
index.html:30 53
index.html:30 59
index.html:30 61
index.html:30 67
index.html:30 71
index.html:30 73
index.html:30 79
index.html:30 83
index.html:30 89
index.html:30 97

//2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. 
//Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.



//3. Товары в корзине хранятся в массиве. Задачи:
//a) Организовать такой массив для хранения товаров в корзине;
//b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.



//4.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
//for(…){// здесь пусто} 

for (var i=0; i<10; console.log(i++));

//index.html:9 0
//index.html:9 1
//index.html:9 2
//index.html:9 3
//index.html:9 4
//index.html:9 5
//index.html:9 6
//index.html:9 7
//index.html:9 8
//index.html:9 9


//5. *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды 
//должно быть 20 рядов, а не 5:
//x
//xx
//xxx
//xxxx
//xxxxx

for(var i = 1, prm = " "; i <= 20; i++){
    prm += "x";
    console.log(prm);
}

//index.html:11  x
//index.html:11  xx
//index.html:11  xxx
//index.html:11  xxxx
//index.html:11  xxxxx
//index.html:11  xxxxxx
//index.html:11  xxxxxxx
//index.html:11  xxxxxxxx
//index.html:11  xxxxxxxxx
//index.html:11  xxxxxxxxxx
//index.html:11  xxxxxxxxxxx
//index.html:11  xxxxxxxxxxxx
//index.html:11  xxxxxxxxxxxxx
//index.html:11  xxxxxxxxxxxxxx
//index.html:11  xxxxxxxxxxxxxxx
//index.html:11  xxxxxxxxxxxxxxxx
//index.html:11  xxxxxxxxxxxxxxxxx
//index.html:11  xxxxxxxxxxxxxxxxxx
//index.html:11  xxxxxxxxxxxxxxxxxxx
//index.html:11 