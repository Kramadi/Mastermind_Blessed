const blessed = require('blessed');
const screen = blessed.screen();
const colors = require('colors/safe');

    //Дизайн
blessed.form({
    parent: screen,
    top: 'center',
    left: 100,
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
    height: 14, 
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

var ButtonSubmit = blessed.button({
    parent: form,
    mouse: true,
    keys: true,
    shrink: true,
    padding: {
        left: 1,
        right: 1
    },
    left: 10,
    bottom: 1,
    name: 'submit',
    content: 'подати',
    style: {
        bg: 'white',
        focus: {
            bg: 'red'
        },
        hover: {
            bg: 'red'
        }
    }
});

var cancel = blessed.button({
    parent: form,
    mouse: true,
    keys: true,
    shrink: true,
    padding: {
        left: 1,
        right: 1
    },
    left: 20,
    bottom: 1,
    name: 'cancel',
    content: 'скасувати',
    style: {
        bg: 'white',
        focus: {
            bg: 'red'
        },
        hover: {
            bg: 'red'
        }
    }
});

var table = blessed.table({
    top: 1,
    left: 'center',
    data: null,
    border: 'line',
    align: 'center',
    tags: true,
    width: 'shrink',
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

function StrToNumber(str) {
	var GetStr = str.split(" ");
	for(let i = 0; i < 4; i++){
		switch(GetStr[i]){
			case 'Green':
			case 'green':
            case 'Зелений':
            case 'зелений':
				GetStr[i] = 1;
				break;
			case 'Red':
			case 'red':
            case 'Червоний':
            case 'червоний':
				GetStr[i] = 2;
				break;
			case 'Blue':
			case 'blue':
            case 'Синій':
            case 'синій':
				GetStr[i] = 3;
				break;
			case 'Yellow':
			case 'yellow':
             case 'Жовтий':
            case 'жовтий':
				GetStr[i] = 4;
				break;
			case 'Cyan':
			case 'cyan':
            case 'Блакитний':
            case 'блакитний':
				GetStr[i] = 5;
				break;
			case 'Magneta':
			case 'magneta':
            case 'Пурпурний':
            case 'пурпурний':
				GetStr[i] = 6;
				break;
		}
	}

	return Number(GetStr.join(''))
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

ButtonSubmit.on('press', function() {
    form.submit();
});

cancel.on('press', function() {
    form.reset();
});

form.on('submit', function() {
    Bull = 0;
    Cows = 0;
          
    let getText = Number(StrToNumber(greaterThanEdit.getValue()));
    let array = [...'' + getText].map(Number);

    if(isRepeat(getText)){         
        

        for(let i = 0; i < 4; i++){
            if(array[i] < 1 || array[i] > 6){
                greaterThanEdit.setValue('');
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

form.on('reset', function(data) {
    greaterThanEdit.setValue('');
    screen.render();
});

screen.key(['escape', 'q', 'C-c', 'й'], function() {
    process.exit(0);
});

greaterThanEdit.focus();

table.setData(data1);
screen.append(table);
screen.render();