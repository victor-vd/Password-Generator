let includeEspecial = false;
let includeNumber = false;
let includeUpper = false;
let includeLower = false;
let passwordLength;
let password;
let generate;
const especialChars = `!@#$%^&*()_+[]{}|;:,.<>?/~\"-=`;
const numbers = `0123456789`;
const lowercaseChars = `abcdefghijklmnopqrstuvwxyz`;
const uppercaseChars = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
const charMap = new Map();

document.getElementById("includeEspecial").onchange = function(){
    includeEspecial = document.getElementById("includeEspecial").checked;//1
};
document.getElementById("includeNumber").onchange = function(){
    includeNumber = document.getElementById("includeNumber").checked;//2
};;
document.getElementById("includeUpper").onchange = function(){
    includeUpper = document.getElementById("includeUpper").checked;//3
};;
document.getElementById("includeLower").onchange = function(){
    includeLower = document.getElementById("includeLower").checked;//4 
};;

document.getElementById("send").onclick = function(){
    console.clear();
    passwordLength = includeEspecial?Number(document.getElementById("especialChars").value):0;
    passwordLength += includeNumber?Number(document.getElementById("numberChars").value):0;
    passwordLength += includeUpper?Number(document.getElementById("upperChars").value):0;
    passwordLength += includeLower?Number(document.getElementById("lowerChars").value):0;
    password = '';
    console.log(includeEspecial);
    console.log(includeNumber);
    console.log(includeUpper);
    console.log(includeLower);
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
    //console.log(`passed: ${generate}`)
    return ''+generate;
}

function getChar(k){
    charMap.set('1', especialChars.charAt(Math.round(Math.random()*31)));
    charMap.set('2', numbers.charAt(Math.round(Math.random()*9)));
    charMap.set('3', uppercaseChars.charAt(Math.round(Math.random()*25)));
    charMap.set('4', lowercaseChars.charAt(Math.round(Math.random()*25)));
    console.log(`k: ${k} / values: `+charMap.get('1')+charMap.get('2')+charMap.get('3')+charMap.get('4'))
    return charMap.get(k);
}