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
    srcName = this.id.split("_");
    dstName = "./img/big/"+srcName[1]+".jpg";
    dstImg = document.createElement("img");
    dstImg.src = dstName;
    dstImg.width = "300";
    dstImg.height = "200";
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
<div id="goods">
</div>
<hr size="3">
<p id="sum">Сумма: 0</p>
<div id="basket">В корзине:</div>
<script src="hw_6_2.js">
</script>
</body>
</html>*/

//hw_6_2.js

var sum = 0;
var goods = [{
    "name": "Notebook Lenovo",
    "price": "18000",
    "img": "./img/small/1.jpg"
},
{
    "name": "Apple ipad",
    "price": "35000",
    "img": "./img/small/2.jpg"
},
{
    "name": "Samsung Galaxy",
    "price": "20000",
    "img": "./img/small/3.jpg"
}];

window.onload = function(){
    var goodsDiv = document.getElementById("goods");
    for (var i in goods){
        var goodDiv = document.createElement("div");
        goodsDiv.append(goodDiv);
        var goodImg = document.createElement("img");
        goodImg.src = goods[i].img;
        goodImg.height = "50";
        goodImg.width = "100";
        goodImg.margin = "10";
        goodDiv.append(goodImg);
        var goodName = document.createElement("p");
        goodName.innerHTML = goods[i].name;
        goodDiv.append(goodName);
        var goodPrice = document.createElement("p");
        goodPrice.innerHTML = goods[i].price;
        goodDiv.append(goodPrice);
        var byuButton = document.createElement("button");
        byuButton.id = i;
        byuButton.onclick = byuGood;
        byuButton.innerHTML = "Купить";
        goodDiv.append(byuButton);
        var br = document.createElement("br");
        goodDiv.append(br);            
    }
}

function byuGood(){
    var basketDiv = document.getElementById("basket");
    var basketGoodName = document.createElement("p");
    basketGoodName.innerHTML = goods[this.id].name +" "+goods[this.id].price;
    basketDiv.append(basketGoodName);
    var psum = document.getElementById("sum");
    sum += parseFloat(goods[this.id].price); 
    psum.innerHTML ="Сумма: "+sum;
}

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
<div id="bPict"><img src="./img/small/1.jpg" width="300" height="200" alt="img_1" id="imgBigPict"></div>
<div>
<button id="prev">Назад</button><button id="next">Вперед</button>
</div>
<script src="hw_6_3.js">
</script>
</body>
</html>*/

//hw_6_3.js

var imgs = ["./img/small/1.jpg","./img/small/2.jpg","./img/small/3.jpg"];
var currImg = imgs.length;

window.onload = function(){
    var prevButton = document.getElementById("prev");
    var nextButton = document.getElementById("next");
    prevButton.onclick = showPrevPict;
    nextButton.onclick = showNextPict;
}

function showPrevPict(){
    var imgBigPict = document.getElementById("imgBigPict");
    imgBigPict.src = imgs[(--currImg)%imgs.length];
    if (currImg == 0) {
        currImg = imgs.length;
    }
}

function showNextPict(){
    var imgBigPict = document.getElementById("imgBigPict");
    imgBigPict.src=imgs[(++currImg)%imgs.length];
}