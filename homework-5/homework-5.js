//1. Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги по 
//своему желанию. Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и 
//белые ячейки. Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.

function drawChessBoard(){
  var table = document.createElement('table');
  var flag = true;
  
  var trr = document.createElement('tr');
  var arr = [' ','a','b','c','d','e','f','g','h'];
  
  for(var k = 0; k<9; k++){
      
      var td = document.createElement('td');
      td.style.width='50px';
      td.style.height='50px';
      td.style.background='white';
      td.innerHTML=arr[k];
      td.style.transform='rotate(180deg)';
      
      trr.appendChild(td);
      
  }
  table.appendChild(trr);
  
  //создаём ячейки
  for(var i = 0; i<8; i++){
      var tr = document.createElement('tr');
      
      //создаем ячейку для цифр
      var tdd = document.createElement('td');
      tdd.style.width='50px';
      tdd.style.height='50px';
      tdd.innerHTML=i+1;
      tr.appendChild(tdd);
      
      for(var j=0; j<8; j++){
          
          if(j==0)
              flag=!flag;
          
          var td = document.createElement('td');
          
          td.style.width='50px';
          td.style.height='50px';
          if(flag){
              td.style.background='brown';    
          }else
              td.style.background='yellow';    
              
          tr.appendChild(td);
          flag=!flag;
      }
      
    //создаём правую колонку цифр
    var tdd = document.createElement('td');
    tdd.style.width='50px';
    tdd.style.height='50px';
    var n=i+1;
    tdd.innerHTML=n;
    td.style.transform='rotate(180deg)';
    tr.appendChild(tdd);
      
      table.appendChild(tr);
  }
  
  //буквы
  trr = document.createElement('tr');
  for(var k = 0; k<9; k++){
      
      var td = document.createElement('td');
      td.style.width='50px';
      td.style.height='50px';
      td.style.background='white';
      td.innerHTML=arr[k];
      //td.style.transform='rotate(180deg)';
      
      trr.appendChild(td);
      
  }
  table.appendChild(trr);
  
  document.body.appendChild(table);
}

drawChessBoard();

//2. Заполнить созданную таблицу буквами, отвечающими за шахматную фигуру, например К – король, 
//Ф – ферзь и т.п., причем все фигуры должны стоять на своих местах и быть соответственно черными и белыми.



//3. *Заменить буквы, обозначающие фигуры, картинками.