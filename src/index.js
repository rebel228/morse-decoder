const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = '';
    let expression = expr;
    //breaking string in 10-char slices
    while (expression.length > 0) {
        let element = expression.slice(0, 10);
        expression = expression.substring(10);
        if (element === '**********') {
            result += ' ';
        }
        else {
            //removing all extra zeroes in front
        let actualString = '';
        for (let i = 0; i < 10; i ++) {
            if (element[i] === '1') {
                actualString = element.substring(i);
                break;
            }
        }
        //turning every 2characters into morse code
        let code = ''; //dots and dashes will go here
        for (let i = 0; i <actualString.length; i += 2) {
            if (actualString.slice(i, i + 2) === '10') code += '.';
            else code += '-';
        }
        //comparing code with the letters and adding to the final string
        result += MORSE_TABLE[code];
        }
    }


    return result;
}

module.exports = {
    decode
}