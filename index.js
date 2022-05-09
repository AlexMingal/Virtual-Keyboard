let lang = 'eng';

let  audio = new Audio();
audio.preload = 'auto';
audio.src = './soundkey.mp3';

const wrapper = document.createElement('div');
wrapper.classList.add("wrapper");

const textField = document.createElement('TEXTAREA');
textField.classList.add('textField');
wrapper.appendChild(textField);
textField.textContent = '';


const body = document.body;
body.appendChild(wrapper);

const keylist = [
                ['`','1','2','3','4','5','6','7','8','9','0', ' - ','=', 'Backspace'], 
                ['Tab', 'q','w','e','r','t','y','u','i','o','p','[',']','`\`','Del'],
                ['CapsLock','a','s','d','f','g','h','j','k','l',`;`,`'`,'Enter'],
                ['Shift','z','x','c','v','b','n','m',`,`,'.','/','-','Shift'],
                ['Ctrl', 'Win', 'Alt', 'SPACE', 'Alt', '<-', '|','->','Ctrl']
                ];
                   
                
                    // ['`','1','2','3','4','5','6','7','8','9','0', ' - ','=', 'Backspace'], 
                    // ['Tab', 'й','ц','у','к','е','н','г','ш','щ','з','х','ъ','`\`','Del'],
                    // ['CapsLock','ф','ы','в','а','п','р','о','л','д',`ж`,`э`,'Enter'],
                    // ['Shift','я','ч','с','м','и','т','ь',`б`,'ю','/','-','Shift'],
                    // ['Ctrl', 'Win', 'Alt', 'SPACE', 'Alt', '<-', '|','->','Ctrl']
                    // ]                
                    // ];
const bigkeys = ['Backspace', 'Tab', 'Del','CapsLock', 'Enter', 'Shift', 'Ctrl', 'SPACE'];


const header = document.createElement('h1');
header.textContent = 'Virtual Keyboard by AlexMingal';
wrapper.insertAdjacentElement('beforebegin', header);

const keyboard = document.createElement('div');
keyboard.classList.add("keyboard");
wrapper.appendChild(keyboard);


    for (i = 0; i < 5; i++){ 
        keylist[i].forEach(el => {
            const keyDiv = document.createElement('div');
            keyDiv.classList.add("key");
            if (bigkeys.includes(el)) { keyDiv.classList.add("bigkeys");}
            keyboard.appendChild(keyDiv);
            keyDiv.textContent = el;
            keyDiv.addEventListener('click', keyClicked);

            });
        const breakDiv = document.createElement('div');
        breakDiv.classList.add('break');
        keyboard.appendChild(breakDiv);
        }

function keyClicked(e) {
    audio.play();
    const clicked = e.target;
    if (clicked.textContent === "Backspace") { backSpc() }
    else if (clicked.textContent === "Tab") { textField.textContent += '    ' }
    else if (clicked.textContent === "SPACE") { textField.textContent += ' ' }

    else textField.textContent += `${clicked.textContent}`;

    }


document.addEventListener('keydown', logKey);

function logKey(e) {
    if (e.key === "Backspace") { backSpc() }
    else if (e.key === "Tab") { e.preventDefault(); textField.textContent += '    ' }
    else if (e.key === "SPACE") { e.preventDefault(); textField.textContent += ' ' }

    else textField.textContent += `${e.key}`;
    }


function backSpc() {
   textField.textContent = textField.textContent.slice(0, -1);
}
