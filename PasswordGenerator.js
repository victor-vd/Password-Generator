const ESPECIAL_CHAR = `!@#$%^&*()_+[]{}|;:,.<>?/~\"-=`;
const NUMBER = `0123456789`;
const LOWERCASE_CHAR = `abcdefghijklmnopqrstuvwxyz`;
const UPPERCASE_CHAR = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
const charMap = new Map();

const ESPECIAL_CHARS_N = document.getElementById("especialCharsN");
const NUMBER_CHARS_N = document.getElementById("numberCharsN");
const UPPER_CHARS_N = document.getElementById("upperCharsN");
const LOWER_CHARS_N = document.getElementById("lowerCharsN");

const ESPECIAL_CHARS = document.getElementById("especialChars");
const NUMBER_CHARS = document.getElementById("numberChars");
const UPPER_CHARS = document.getElementById("upperChars");
const LOWER_CHARS = document.getElementById("lowerChars");

const INCLUDE_ESPECIAL = document.getElementById("includeEspecial");//1
const INCLUDE_NUMBER = document.getElementById("includeNumber");//2
const INCLUDE_UPPER = document.getElementById("includeUpper");//3
const INCLUDE_LOWER = document.getElementById("includeLower");//4 

let includeEspecial = INCLUDE_ESPECIAL.checked;
let includeNumber = INCLUDE_NUMBER.checked;
let includeUpper = INCLUDE_UPPER.checked;
let includeLower = INCLUDE_LOWER.checked;
let passwordLength;
let password;
let generate;

ESPECIAL_CHARS_N.textContent = ESPECIAL_CHARS.value;
NUMBER_CHARS_N.textContent = NUMBER_CHARS.value;
UPPER_CHARS_N.textContent = UPPER_CHARS.value;
LOWER_CHARS_N.textContent = LOWER_CHARS.value;

ESPECIAL_CHARS.onchange = function(){
    ESPECIAL_CHARS_N.textContent = ESPECIAL_CHARS.value;
};
NUMBER_CHARS.onchange = function(){
    NUMBER_CHARS_N.textContent = NUMBER_CHARS.value;
};
UPPER_CHARS.onchange = function(){
    UPPER_CHARS_N.textContent = UPPER_CHARS.value;
};
LOWER_CHARS.onchange = function(){
    LOWER_CHARS_N.textContent = LOWER_CHARS.value;
};

INCLUDE_ESPECIAL.onchange = function(){
    includeEspecial = document.getElementById("includeEspecial").checked;//1
    console.log('includeEspecial: '+includeEspecial);
};
INCLUDE_NUMBER.onchange = function(){
    includeNumber = document.getElementById("includeNumber").checked;//2
    console.log('includeNumber: '+includeNumber);
};
INCLUDE_UPPER.onchange = function(){
    includeUpper = document.getElementById("includeUpper").checked;//3
    console.log('includeUpper: '+includeUpper);
};
INCLUDE_LOWER.onchange = function(){
    includeLower = document.getElementById("includeLower").checked;//4 
    console.log('includeLower: '+includeLower);
};

document.getElementById("send").onclick = function(){
    console.clear();
    passwordLength = includeEspecial?Number(ESPECIAL_CHARS.value):0;
    passwordLength += includeNumber?Number(NUMBER_CHARS.value):0;
    passwordLength += includeUpper?Number(UPPER_CHARS.value):0;
    passwordLength += includeLower?Number(LOWER_CHARS.value):0;
    password = '';
    console.log(passwordLength);
    if((includeEspecial)||(includeNumber)||(includeUpper)||(includeLower)){
        generateString();
    }
}

function generateString(){
    let generator;
    for(let i=0; i < passwordLength; i++){
        generator = generateNumber();
        password += getChar(generator);
    }
    console.log(password);
}

function generateNumber(){
    generate = 0;
    generate = Math.ceil(Math.random()*(4));
    switch(generate){
        case 1:
            if(!includeEspecial){
                generateNumber();
            }
            break;
        case 2:
            if(!includeNumber){
                generateNumber();
            }
            break;
        case 3:
            if(!includeUpper){
                generateNumber();
            }
            break;
        case 4:
            if(!includeLower){
                generateNumber();
            }
            break;
    }
    if(generate)
    return ''+generate;
}

function getChar(k){
    charMap.set('1', ESPECIAL_CHAR.charAt(Math.round(Math.random()*31)));
    charMap.set('2', NUMBER.charAt(Math.round(Math.random()*9)));
    charMap.set('3', LOWERCASE_CHAR.charAt(Math.round(Math.random()*25)));
    charMap.set('4', UPPERCASE_CHAR.charAt(Math.round(Math.random()*25)));
    return charMap.get(k);
}