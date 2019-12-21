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

function showBigPicture(e){
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
    bpDiv.innerHTML = "";
    bpDiv.appendChild(dstImg);
}

//2. Реализовать модуль корзины. Создать блок товаров и блок корзины. У каждого товара есть кнопка «Купить», 
//при нажатии на которую происходит добавление имени и цены товара в блок корзины. Корзина должна уметь 
//считать общую сумму заказа.



//3) *Добавить в галерею функцию перехода к следующему изображению. По сторонам от большой картинки должны 
//быть стрелки «вперед» и «назад», по нажатию на которые происходит замена изображения на следующее или 
//предыдущее.