//1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, 
//мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, 
//десятки и сотни. Например, для числа 245 мы должны получить следующий объект: 
//{‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать 
//соответствующее сообщение с помощью console.log и вернуть пустой объект.


function parseDigits() {
    var instr = prompt("Введите число");
    if (isNaN(instr)) {
        alert("Некорректное значение!");
        return null;
    }
    else {
        if ((parseInt(instr)<0) || (parseInt(instr)>999)) {
            alert("Выход за пределы диапазона 0...999!");
            return null;
        }
        else {
            var arr=instr.split('');
            var outstr="{"; digits=["‘единицы’: ",",‘десятки’: ",",‘сотни’: "]
            for (var i=0;i<arr.length;i++) {
                outstr+=digits[i]+arr[arr.length-i-1];
            }
            outstr+="}";
            return outstr;
        }
    }
}

//document.write(parseDigits());
console.log(parseDigits());

//245
//{‘единицы’: 5,‘десятки’: 4,‘сотни’: 2}
//56
//{‘единицы’: 6,‘десятки’: 5}
//7
//{‘единицы’: 7}
//78678
//null
//765wjyhfg
//null



//2. Для игры, реализованной на уроке, добавить возможность вывода хода номер n 
//(номер задается пользователем)



//var number = []; // четыре цифры нашего числа
var attempts = 0; // число попыток

/////////////////////////////////////////////////
//объявляем массив ответов
/////////////////////////////////////////////////
var arrAnswers = [];

generateNumber(); //сгенерировали неповторяющиеся значения массива
alert(number);
guessNumber();


/////////////////////////////////////////////////
//Просмотр массива ответов
/////////////////////////////////////////////////
var answerNumber = 0;
do {
    answerNumber = prompt("Введите номер ответа (-1 - выход)", 0);
    if ((isNaN(answerNumber)) || ((parseInt(answerNumber)==0) || (parseInt(answerNumber)<-1) || (parseInt(answerNumber)>arrAnswers.length))) {
        alert("Некорректное значение!");
        continue;
    }
    if (parseInt(answerNumber) != -1) {
        alert(arrAnswers[parseInt(answerNumber)-1]);
    }
} while (parseInt(answerNumber) != -1);


function generateNumber(){
	number = [];//массив с уникальными цифрами
	var min = 1;
	var max = 9;
	
	// заполняем массив цифр в числе
	for(var i = 0; i < 4; i++){
		var part = Math.round(Math.random() * (max - min)+min);
		
		// первое число всегда уникально
		if(i == 0){
			number[0] = part;
		}
		else{ // пока не сгенерируется уникальное число, генерируем новые случайные числа
			while(number.indexOf(part) != -1){//элемент найден
				part = Math.round(min + Math.random() * (max - min));
			}
			
			number[i] = part;
		}
	}
}

function guessNumber(){
	var result = prompt("Введите число (-1 - закончить игру)", 0);
	var gameIsRunning = true;
	
	// пока игрок не угадал число
	while(gameIsRunning){
		// выход из игры
		if(parseInt(result) == -1){
			gameIsRunning = false;
		}
		// игрок ввел некорректные данные
		else if(parseInt(result) == 0 || isNaN(parseInt(result))){
			alert("Вы не ввели число");
			// запрашиваем по новой
			result = prompt("Введите число (-1 - закончить игру)", 0);
		}
		// проверяем число
		else{
			var answer = checkNumber(result);//answer[false,1,1]
			if(answer[0]){
				// число угадано
				alert("Поздравляем! Вы угадали число. Кол-во попыток: " + attempts);
				// останавливаем игру
				gameIsRunning = false;
			}
			else{
				// следующий ход
				result = prompt("Быки: " + answer[1] + " Коровы: " + answer[2] + " Введите число (-1 - закончить игру)", 0);
			}
		}
	}
}

function checkNumber(myresult){//1234
	// каждая проверка увеличивает кол-во попыток на 1
    attempts++;
    
/////////////////////////////////////////////////
//Записываем ответ в массив
/////////////////////////////////////////////////
    arrAnswers.push(myresult);
	
	// массив результата
	// 0 - общий результат
	// 1 - быки
	// 2 - коровы
	var answer = [false, 0, 0];
	
	// раскладываем число на разряды
	console.log(myresult);
	console.log(number);
	
	/*s = "1234";
	mas = s.split("")
	*/
	
	/*
	var mas = [1,2,3,4];
	var mas2 = [];
	for(var i in mas){
		mas2[]=mas[i];
	}
	*/
	
	var ranks = myresult.split("");//массив, полученный из введенного числа
	
	for(var i = 0; i < ranks.length; i++){		
		// если по индексу значения совпадают, то это бык
		if(parseInt(ranks[i]) == number[i]){
			answer[1]++;
		}
		// если число вообще есть в массиве, то это корова
		else if(number.indexOf(parseInt(ranks[i])) != -1){
			answer[2]++;
		}
	}
	
	// если набралось 4 быка, то это победа
	if(answer[1] == 4){
		answer[0] = true;
	}
	
	return answer;
}



//3. *На базе игры, созданной на уроке, реализовать игру «Кто хочет стать миллионером?»

var questions = [];
questions[0]= {
	q:"2*2?",
	a1:1,
	a2:2,
	a3:4,
	correct:4,
	price:100
}
questions[1]= {
	q:"3*3?",
	a1:1,
	a2:3,
	a3:9,
	correct:9,
	price:200
}
questions[2]= {
	q:"4*4?",
	a1:1,
	a2:4,
	a3:16,
	correct:16,
	price:300
}
questions[3]= {
	q:"5*5?",
	a1:1,
	a2:25,
	a3:5,
	correct:25,
	price:500
}
questions[4]= {
	q:"7*7?",
	a1:1,
	a2:7,
	a3:49,
	correct:49,
	price:700
}

var answ = 0,sum = 0;
for (var i in questions) {
	answ = prompt(questions[i].q+"\n"+questions[i].a1+"\n"+questions[i].a2+"\n"+questions[i].a3+"\n");
	if (answ == questions[i].correct) {
		sum += questions[i].price;
	}
	else {
		sum -= questions[i].price;
	}
}

document.write("Ваш выигрыш составил"+sum);



//Ваш выигрыш составил 1600