document.getElementById("input").placeholder = "Только кирилица "

const converter = {
  'а': 'a',    'б': 'b',    'в': 'v',    'г': 'g',    'д': 'd',
  'е': 'e',    'ё': 'e',    'ж': 'zh',   'з': 'z',    'и': 'i',
  'й': 'y',    'к': 'k',    'л': 'l',    'м': 'm',    'н': 'n',
  'о': 'o',    'п': 'p',    'р': 'r',    'с': 's',    'т': 't',
  'у': 'u',    'ф': 'f',    'х': 'h',    'ц': 'c',    'ч': 'ch',
  'ш': 'sh',   'щ': 'sch',  'ь': '',     'ы': 'y',    'ъ': '',
  'э': 'e',    'ю': 'yu',   'я': 'ya',

  'А': 'A',    'Б': 'B',    'В': 'V',    'Г': 'G',    'Д': 'D',
  'Е': 'E',    'Ё': 'E',    'Ж': 'Zh',   'З': 'Z',    'И': 'I',
  'Й': 'Y',    'К': 'K',    'Л': 'L',    'М': 'M',    'Н': 'N',
  'О': 'O',    'П': 'P',    'Р': 'R',    'С': 'S',    'Т': 'T',
  'У': 'U',    'Ф': 'F',    'Х': 'H',    'Ц': 'C',    'Ч': 'Ch',
  'Ш': 'Sh',   'Щ': 'Sch',  'Ь': '',     'Ы': 'Y',    'Ъ': '',
  'Э': 'E',    'Ю': 'Yu',   'Я': 'Ya'
};


let textCyrillic = document.querySelector('input');

let buttonCyrillic = document.querySelector('button');

let firstBlock = document.getElementById('firstBlock')
let secondBlock = document.getElementById('secondBlock')

buttonCyrillic.addEventListener('click', () => {
   let word = textCyrillic.value;
  
   if(word.match(/[a-zA-Z0-9]/)){  //ТОлько Русские буквы
    alert("Вводить только РУССКИЕ буквы");
    input.value  = "";
  }
})


buttonCyrillic.addEventListener('click', () => { 
    let wordRus = document.createElement('div');
    let wordTrans = document.createElement('div');
    wordRus.innerText = textCyrillic.value;
    wordRus.className = 'newWord';   

  

    let addWord = document.querySelector('.firstBlock')    
    let wordLength =  wordRus.innerText.length;
    addWord.style.overflow = 'scroll';   
    secondBlock.style.overflow = 'scroll'; 

    // скрываем троеточием длинные латиские слова
    if(wordLength > 9){
        wordRus.innerText = textCyrillic.value.substring(0, 9) + '...'; 
        wordRus.title = textCyrillic.value; 
    }

    addWord.insertAdjacentElement("afterbegin", wordRus) //Добавляем новое слово первое в свою колонку

    secondBlock.insertAdjacentElement("afterbegin",wordTrans) //Добавляем новое слово первое в свою колонку


    function translit(word) {
        let answer = '';
        for (let i = 0; i < word.length; i += 1) {
          if (converter[word[i]] === undefined) {
            answer += word[i];
          } else {
            answer += converter[word[i]];
          }
        }
        return answer;
      }      

      wordTrans.innerText = translit(textCyrillic.value);
      let lengthTrans = wordTrans.innerText.length

      // скрываем длинные слова латинские
      if (lengthTrans > 9) {
        wordTrans.innerText = translit(textCyrillic.value).substring(0, 9) + '...'; 
        wordTrans.title = translit(textCyrillic.value);

      }

      textCyrillic.value = ''; // сброс ввода
    });
