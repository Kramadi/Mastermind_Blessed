const blessed = require('blessed');
const screen = blessed.screen();
const colors = require('colors/safe');

    //Дизайн
blessed.form({
    parent: screen,
    top: 'center',
    left: 110,
    align: 'center',
    width: 33,
    height: 14, 
    border:{
        type:'line'
        },
        style:{
            border:{
            fg:'green'
            }
        },
    bg: 'black',
    content: 'Як грати?\n Для того щоб почати грати Вам необхідно ввести назву кольору.\n Наприклад:\n ' + colors.blue('синий ') + colors.red('червоний ')+ colors.yellow('жовтий ') + colors.green('зелений') +'\n або\n' + colors.blue('blue ') + colors.red('red ')  + colors.yellow('yellow ') + colors.green('green')
});

var form = blessed.form({
    parent: screen,
    keys: true,
    border:{
        type:'line'
        },
        style:{
            border:{
            fg:'green'
            }
        },
    top: 'center',
    width: 37,
    height: 17, 
    bg: 'black',
    autoNext: true,
    content: colors.white('Крамаренко Д.А. 1КН-20МС') + '\n' +
             colors.green('Green - Зелений') + '\n' + 
             colors.red('Red - Червоний') + '\n' + 
             colors.blue('Blue - Синій') + '\n' + 
             colors.yellow('Yellow - Жовтий') + '\n' + 
             colors.cyan('Cyan - Блакитний') + '\n' + 
             colors.magenta('Magenta - Пурпурний')
});

var greaterThanEdit = blessed.Textbox({
    parent: form,
    top: 8,
    height: 1,
    left: 2,
    right: 2,
    bg: 'white',
    keys: true,
    inputOnFocus: true,
    content: 'test'
});

var greaterThanEdit2 = blessed.Textbox({
    parent: form,
    top: 10,
    height: 1,
    left: 2,
    right: 2,
    bg: 'white',
    keys: true,
    inputOnFocus: true,
    content: 'test'
});

var greaterThanEdit3 = blessed.Textbox({
    parent: form,
    top: 12,
    height: 1,
    left: 2,
    right: 2,
    bg: 'white',
    keys: true,
    inputOnFocus: true,
    content: 'test'
});

var greaterThanEdit4 = blessed.Textbox({
    parent: form,
    top: 14,
    height: 1,
    left: 2,
    right: 2,
    bg: 'white',
    keys: true,
    inputOnFocus: true,
    content: 'test'
});

var table = blessed.table({
    parent: screen,
    top: 'center',
    left: 38,
    border: 'line',
    align: 'center',
    tags: true,
    style: {
      header: {
        fg: 'blue',
        bold: true
      },
      cell: {
        fg: 'magenta'
      },
      border:{
        fg:'green'
        }
    }
  });

function CreateEndGame (){
    return blessed.box({
       parent: screen,
       top: "center",
       left: "center",
       width: '20%',
       height: '20%',
       valign:'middle',
       align: 'center',
      content: 'Гра завершена!\n Натисніть q, щоб вийти',
       border: {
         type: 'line'
       },
       style: {
         fg: 'black',
         bg: 'yellow',
       },
     })
   }

function CreateWinGame (){
    return blessed.box({
       parent: screen,
       top: "center",
       left: "center",
       width: '20%',
       height: '20%',
       valign:'middle',
       align: 'center',
      content: 'Ви виграли!\n Натисніть q, щоб вийти',
       border: {
         type: 'line'
       },
       style: {
         fg: 'black',
         bg: 'yellow',
       },
     })
   }

   function CreateWrongWrite (){
    return blessed.box({
       parent: screen,
       top: "center",
       left: "center",
       width: '50%',
       height: '30%',
       valign:'middle',
       align: 'center',
      content: 'Неправильно ввели.\n Колорі не мають повторюватися.\n Введите ще раз',
       border: {
         type: 'line'
       },
       style: {
         fg: 'black',
         bg: 'yellow',
       },
     })
   }

   function isRepeat(num) {
    let result = '' + num;
    result = result.split('');
    for(let i=0; i < result.length; i++) {
        if (result.indexOf(result[i], i+1) > 0){
            return false;
        } else if (i == result.length -1){
            return true;
        }     
    }
}

function SetColor(color,textBox) {
    let value = Math.abs(color) % 6
    switch(value) {
        case 0:
            return textBox.setValue('Green');
        case 1:
            return textBox.setValue('Blue');
        case 2:
            return textBox.setValue('Red');
        case 3:
            return textBox.setValue('Yellow');
        case 4:
            return textBox.setValue('Cyan');
        case 5:
            return textBox.setValue('Magenta');
    }

}

function StrToNumber(str) {
	var colorsArray = str.split(" ");
	for(let i = 0; i < 4; i++){
		switch(colorsArray[i]){
			case 'Green':
				colorsArray[i] = 1;
				break;
			case 'Red':
				colorsArray[i] = 2;
				break;
			case 'Blue':
				colorsArray[i] = 3;
				break;
			case 'Yellow':
				colorsArray[i] = 4;
				break;
			case 'Cyan':
				colorsArray[i] = 5;
				break;
			case 'Magenta':
				colorsArray[i] = 6;
				break;
		}
	}

	return Number(colorsArray.join(''))
}

var Bull = 0;
var Cows = 0;
var count = 1;
var result = [];

for(let i = 0; i < 4; i++){
    result.push(Math.floor(Math.random() * (6 - 1 + 1)) + 1);
}

var data1 = [[ '',  '',  '' , '' ,'Результат'],
             [ '',  '',  '' , '' ,  '' ],
             [ '',  '',  '' , '' ,  '' ],
             [ '',  '',  '' , '' ,  '' ],
             [ '',  '',  '' , '' ,  '' ],
             [ '',  '',  '' , '' ,  '' ],
             [ '',  '',  '' , '' ,  '' ],
             [ '',  '',  '' , '' ,  '' ],
             [ '',  '',  '' , '' ,  '' ],
             [ '',  '',  '' , '' ,  '' ],
             [ '',  '',  '' , '' ,  '' ]
            ];

        //Кольори
var Green = colors.green('Зелений');
var Red = colors.red('Червоний');
var Blue = colors.blue('Синій');
var Yellow = colors.yellow('Жовтий');
var Cyan = colors.cyan('Блакитний');
var Magenta = colors.magenta('Пурпурний');

for(let i = 0; i < 4; i++){
    switch(result[i]){
        case 1:
            result[i] = Green;
            break;
        case 2:
            result[i] = Red;
            break;
        case 3:
            result[i] = Blue;
            break;
        case 4:
            result[i] = Yellow;
            break;
        case 5:
            result[i] = Cyan;
            break;
        case 6:
            result[i] = Magenta;
            break;
    }
}

var countColorgreaterThanEdit = 0;
var countColorgreaterThanEdit2 = 0;
var countColorgreaterThanEdit3 = 0;
var countColorgreaterThanEdit4 = 0;

greaterThanEdit.key(['right', 'Right'], function() {
    countColorgreaterThanEdit++;
    SetColor(countColorgreaterThanEdit,greaterThanEdit);

    screen.render();
});

greaterThanEdit.key(['left', 'Left'], function() {
    countColorgreaterThanEdit--;
    SetColor(countColorgreaterThanEdit,greaterThanEdit);
    screen.render();
});

greaterThanEdit2.key(['right', 'Right'], function() {
    countColorgreaterThanEdit2++;
    SetColor(countColorgreaterThanEdit2,greaterThanEdit2);
    screen.render();
});

greaterThanEdit2.key(['left', 'Left'], function() {
    countColorgreaterThanEdit2--;
    SetColor(countColorgreaterThanEdit2,greaterThanEdit2);
    screen.render();
});

greaterThanEdit3.key(['right', 'Right'], function() {
    countColorgreaterThanEdit3++;
    SetColor(countColorgreaterThanEdit3,greaterThanEdit3);
    screen.render();
});

greaterThanEdit3.key(['left', 'Left'], function() {
    countColorgreaterThanEdit3--;
    SetColor(countColorgreaterThanEdit3,greaterThanEdit3);
    screen.render();
});

greaterThanEdit4.key(['right', 'Right'], function() {
    countColorgreaterThanEdit4++;
    SetColor(countColorgreaterThanEdit4,greaterThanEdit4);
    screen.render();
});

greaterThanEdit4.key(['left', 'Left'], function() {
    countColorgreaterThanEdit4--;
    SetColor(countColorgreaterThanEdit4,greaterThanEdit4);
    screen.render();
});

screen.key(['Enter', 'enter'], function() {
    form.submit();
});

form.on('submit', function() {
    Bull = 0;
    Cows = 0;
          
    let getText = Number(StrToNumber(greaterThanEdit.getValue() + " " + 
                                     greaterThanEdit2.getValue()+ " " + 
                                     greaterThanEdit3.getValue()+ " " + 
                                     greaterThanEdit4.getValue()));

    let array = [...'' + getText].map(Number);

    if(isRepeat(getText)){
        

        for(let i = 0; i < 4; i++){
            if(array[i] < 1 || array[i] > 6){
                greaterThanEdit.setValue('');
                greaterThanEdit2.setValue('');
                greaterThanEdit3.setValue('');
                greaterThanEdit4.setValue('');
                screen.render();
                return;
            }
        }

        for(let i = 0; i < 4; i++){
            switch(array[i]){
                case 1:
                    array[i] = Green;
                    break;
                case 2:
                    array[i] = Red;
                    break;
                case 3:
                    array[i] = Blue;
                    break;
                case 4:
                    array[i] = Yellow;
                    break;
                case 5:
                    array[i] = Cyan;
                    break;
                case 6:
                    array[i] = Magenta;
                    break;
            }
        }

        for(let i = 0; i < 4; i++){
            if(result[i] == array[i]){
                Bull++;
            }
        }

        for(let i = 0; i < 4; i++){
            for(let j = 0; j < 4; j++){
                if(result[i] == array[j] && i !=j){
                    Cows++;
                    break; 
                }
            }
        }

        data1[count][0] = array[0];
        data1[count][1] = array[1];
        data1[count][2] = array[2];
        data1[count][3] = array[3];
        let output = String(Bull) + ' бики и ' + String(Cows) + ' корови';
        data1[count][4] = String(output);
        table.setData(data1);
        screen.append(table);

        if(Bull == 4){
            CreateWinGame();
            screen.render();
            return;
        }

        count++;
        greaterThanEdit.setValue('');
        greaterThanEdit2.setValue('');
        greaterThanEdit3.setValue('');
        greaterThanEdit4.setValue('');

        if(count > 10){
            CreateEndGame();
            screen.render();
            return;
        }
    }else{
        CreateWrongWrite();
        screen.render();
        return;
    }

 return screen.render();
});

screen.key(['escape', 'q', 'C-c', 'й'], function() {
    process.exit(0);
});

greaterThanEdit.focus();

table.setData(data1);
screen.append(table);
screen.render();