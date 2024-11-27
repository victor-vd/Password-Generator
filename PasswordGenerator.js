//characters related variables
const ESPECIAL_CHAR = `!@#$%^&*()_+[]{}|;:,.<>?/~\"-=`;
const NUMBER = `0123456789`;
const LOWERCASE_CHAR = `abcdefghijklmnopqrstuvwxyz`;
const UPPERCASE_CHAR = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
const charMap = new Map();

//numbers on the side of the slider
const ESPECIAL_CHARS_N = document.getElementById("especialCharsN");
const NUMBER_CHARS_N = document.getElementById("numberCharsN");
const UPPER_CHARS_N = document.getElementById("upperCharsN");
const LOWER_CHARS_N = document.getElementById("lowerCharsN");

//sliders
const ESPECIAL_CHARS = document.getElementById("especialChars");
const NUMBER_CHARS = document.getElementById("numberChars");
const UPPER_CHARS = document.getElementById("upperChars");
const LOWER_CHARS = document.getElementById("lowerChars");

//checkboxes
const INCLUDE_ESPECIAL = document.getElementById("includeEspecial");//1
const INCLUDE_NUMBER = document.getElementById("includeNumber");//2
const INCLUDE_UPPER = document.getElementById("includeUpper");//3
const INCLUDE_LOWER = document.getElementById("includeLower");//4 

//checkbox assignment
let includeEspecial = INCLUDE_ESPECIAL.checked;//1
let includeNumber = INCLUDE_NUMBER.checked;//2
let includeUpper = INCLUDE_UPPER.checked;//3
let includeLower = INCLUDE_LOWER.checked;//4 

let passwordLength;
let password;
let generate;

//set the initial value of the slider to the number that will be displayed to the user
ESPECIAL_CHARS_N.textContent = ESPECIAL_CHARS.value;
NUMBER_CHARS_N.textContent = NUMBER_CHARS.value;
UPPER_CHARS_N.textContent = UPPER_CHARS.value;
LOWER_CHARS_N.textContent = LOWER_CHARS.value;

//set the value of the number of the slider every time that it changes
ESPECIAL_CHARS.onchange = function () {
    ESPECIAL_CHARS_N.textContent = ESPECIAL_CHARS.value;
};
NUMBER_CHARS.onchange = function () {
    NUMBER_CHARS_N.textContent = NUMBER_CHARS.value;
};
UPPER_CHARS.onchange = function () {
    UPPER_CHARS_N.textContent = UPPER_CHARS.value;
};
LOWER_CHARS.onchange = function () {
    LOWER_CHARS_N.textContent = LOWER_CHARS.value;
};

//set the value of the checkbox on change
INCLUDE_ESPECIAL.onchange = function () {
    includeEspecial = document.getElementById("includeEspecial").checked;//1
};
INCLUDE_NUMBER.onchange = function () {
    includeNumber = document.getElementById("includeNumber").checked;//2
};
INCLUDE_UPPER.onchange = function () {
    includeUpper = document.getElementById("includeUpper").checked;//3
};
INCLUDE_LOWER.onchange = function () {
    includeLower = document.getElementById("includeLower").checked;//4 
};

//when the user submit, the program will calculate the password length and if any
//checkbox is checked, it will call the function to generate the password
document.getElementById("send").onclick = function () {
    console.clear();
    passwordLength = includeEspecial ? Number(ESPECIAL_CHARS.value) : 0;
    passwordLength += includeNumber ? Number(NUMBER_CHARS.value) : 0;
    passwordLength += includeUpper ? Number(UPPER_CHARS.value) : 0;
    passwordLength += includeLower ? Number(LOWER_CHARS.value) : 0;
    password = '';
    if ((includeEspecial) || (includeNumber) || (includeUpper) || (includeLower)) {
        generateString();
    }
}

//until it reaches the password length the program will generate a character
//once it finishes, the password will be displayed to the user.
function generateString() {
    let generator;
    for (let i = 0; i < passwordLength; i++) {
        generator = generateNumber();
        password += getChar(generator);
    }
    document.getElementById("password").textContent = password;
}

//pick a number between 1 and 4 and if that character is included to password, proceed
function generateNumber() {
    generate = 0;
    generate = Math.ceil(Math.random() * (4));
    switch (generate) {
        case 1:
            if (!includeEspecial) {
                generateNumber();
            }
            break;
        case 2:
            if (!includeNumber) {
                generateNumber();
            }
            break;
        case 3:
            if (!includeUpper) {
                generateNumber();
            }
            break;
        case 4:
            if (!includeLower) {
                generateNumber();
            }
            break;
    }
    if (generate)
        return '' + generate;
}

//set a random character to a number every time the function is called
function getChar(k) {
    charMap.set('1', ESPECIAL_CHAR.charAt(Math.round(Math.random() * 31)));
    charMap.set('2', NUMBER.charAt(Math.round(Math.random() * 9)));
    charMap.set('3', LOWERCASE_CHAR.charAt(Math.round(Math.random() * 25)));
    charMap.set('4', UPPERCASE_CHAR.charAt(Math.round(Math.random() * 25)));
    return charMap.get(k);
}

let ass = 10;

for (let i = 1; i <= 200; i++) {
    ass += 50;
    console.log(ass);
}