//1. Доработать функцию замены картинки в галерее таким образом, чтобы она проверяла наличие картинки по 
//указанному в src адресу.

//HTML
/*<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
<div id="bPict">Big Picture</div>
<div>
    <img src="./img/small/1.jpg" width="50" height="30" alt="img_1" id="img_1">
    <img src="./img/small/2.jpg" width="50" height="30" alt="img_2" id="img_2">
    <img src="./img/small/3.jpg" width="50" height="30" alt="img_3" id="img_3">
</div>
<script src="hw_6_1.js">
</script>
</body>
</html>*/

//hw_6_1.js

window.onload = function(){
    var imgs = document.querySelectorAll("img");
    for (var i=0;i<imgs.length;i++){
        imgs[i].onclick = showBigPicture;
        }
}

function showBigPicture(){
    var bpDiv = document.getElementById("bPict");
    bpDiv.innerHTML = "";
    srcIcon = Event.target;
    srcName = this.id.split("_");
    dstName = "./img/big/"+srcName[1]+".jpg";
    dstImg = document.createElement("img");
    dstImg.src = dstName;
    dstImg.width = "100";
    dstImg.height = "50";
    dstImg.onerror = function(){
            alert("Файл не найден!");
    }
    bpDiv.append(dstImg);
}

//2. Реализовать модуль корзины. Создать блок товаров и блок корзины. У каждого товара есть кнопка «Купить», 
//при нажатии на которую происходит добавление имени и цены товара в блок корзины. Корзина должна уметь 
//считать общую сумму заказа.

//HTML
/*<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
<div id="bPict">Basket</div>
<div>
    <img src="./img/small/1.jpg" width="50" height="30" alt="img_1" id="img_1">
    <img src="./img/small/2.jpg" width="50" height="30" alt="img_2" id="img_2">
    <img src="./img/small/3.jpg" width="50" height="30" alt="img_3" id="img_3">
</div>
<script src="hw_6_2.js">
</script>
</body>
</html>*/

//hw_6_2.js




//3) *Добавить в галерею функцию перехода к следующему изображению. По сторонам от большой картинки должны 
//быть стрелки «вперед» и «назад», по нажатию на которые происходит замена изображения на следующее или 
//предыдущее.

//HTML
/*<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
<div id="bPict"><img src="./img/small/1.jpg" width="200" height="100" alt="img_1" id="img_1"></div>
<div>
<button id="prev">Назад</button><button id="next">Вперед</button>
</div>
<script src="hw_6_3.js">
</script>
</body>
</html>*/

//hw_6_3.js


var imgs = [];
var currImg = 3000000;
imgs[0]="./img/small/1.jpg";
imgs[1]="./img/small/2.jpg";
imgs[2]="./img/small/3.jpg";
window.onload = function(){
    var prevButton = document.getElementById("prev");
    var nextButton = document.getElementById("next");
    prevButton.onclick = showPrevPict;
    nextButton.onclick = showNextPict;
}

function showPrevPict(){
    var imgBigPict = document.getElementById("imgBigPict");
    imgBigPict.src = imgs[(currImg-1)%3];
    currImg--;
}

function showNextPict(){
    var imgBigPict = document.getElementById("imgBigPict");
    imgBigPict.src=imgs[(currImg+1)%3];
    currImg++;
}