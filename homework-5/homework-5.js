//1. Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги по 
//своему желанию. Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и 
//белые ячейки. Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.

const cells = [];
for(var i=0;i<64;i++){
  //document.write(i);
  cells.push({
    color: i%2?'black':'white',
    x: i%8,
    y: ~~(i/8)//floor?
  });
}
var mbd = document.getElementsByTagName("body");
var node;
    document.write(cells.length);
for (var i in cells) {
    node = document.createElement("div");
    //document.write("create");
    //mbd.appendChild(node);
    node.style.width = '30px';
    node.style.height = '30px';
    //node.style.backgroundColor = 'black';
    //node.innerHTML('<p>kjh</p>');
    node.style.backgroundColor = cells[i].color;
    //node.style.float = 'left';
    node.left = cells[i].x*30+'px';
    node.top = cells[i].y*30+'px';
    //list1.appendChild(node);
    mbd[0].appendChild(node);
    //document.write("append");
}

//2. Заполнить созданную таблицу буквами, отвечающими за шахматную фигуру, например К – король, 
//Ф – ферзь и т.п., причем все фигуры должны стоять на своих местах и быть соответственно черными и белыми.



//3. *Заменить буквы, обозначающие фигуры, картинками.