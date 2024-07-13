/*
<form id="form" onsubmit="submit_form(); return false;">
<p>The password will have especial characters? (@-&)</p>
<div>
    <input id="includeEspecial" type="checkbox" required/>
    <input id="especialChars" type="range" min="1" max="20" value="6" required/>
</div>
<p>The password will have number characters? (0-9)</p>
<div>
    <input id="includeNumber" type="checkbox" required/>
    <input id="numberChars" type="range" min="1" max="20" value="6" required/>
</div>
<p>The password will have uppercase characters? (A-Z)</p>
<div>
    <input id="includeUpper" type="checkbox" required/>
    <input id="upperChars" type="range" min="1" max="20" value="6" required/>
</div>
<p>The password will have lowercase characters? (a-z)</p>
<div>
    <input id="includeLower" type="checkbox" required/>
    <input id="lowerChars" type="range" min="1" max="20" value="6" required/>
</div><br><br>
<button id="send" type="submit">send</button>
</form>
*/

const INCLUDEESPECIAL = document.getElementById("includeEspecial");
const INCLUDENUMBER =  document.getElementById("includeNumber");
const INCLUDEUPPER =  document.getElementById("includeUpper");
const INCLUDELOWER =  document.getElementById("includeLower");
const ESPECIALCHARS =  document.getElementById("especialChars");
const NUMBERCHARS =  document.getElementById("numberChars");
const LOWERCHARS =  document.getElementById("lowerChars");
const UPPERCHARS =  document.getElementById("upperChars");
let includeEspecial = false, includeNumber = false, includeUpper = false, includeLower = false;
let passwordLength = 0;
let password;
let generator, generate;
const especialChars = `!@#$%^&*()_+[]{}|;:,.<>?/~\"-=`;
const numbers = `0123456789`;
const lowercaseChars = `abcdefghijklmnopqrstuvwxyz`;
const uppercaseChars = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
const charMap = new Map();
document.getElementById("includeEspecial").onchange = function(){
    includeEspecial = INCLUDEESPECIAL.checked;//1
};
document.getElementById("includeNumber").onchange = function(){
    includeNumber = INCLUDENUMBER.checked;//2
};;
document.getElementById("includeUpper").onchange = function(){
    includeUpper = INCLUDEUPPER.checked;//3
};;
document.getElementById("includeLower").onchange = function(){
    includeLower = INCLUDELOWER.checked;//4 
};;



document.getElementById("send").onclick = function(){
    console.clear();
    let NOfEspecial = includeEspecial?Number(ESPECIALCHARS.value):0;
    let NOfNumber = includeNumber?Number(NUMBERCHARS.value):0;
    let NOfLower = includeLower?Number(LOWERCHARS.value):0;
    let NOfUpper = includeUpper?Number(UPPERCHARS.value):0;
    password = '';
    passwordLength = NOfEspecial+NOfNumber+NOfLower+NOfUpper;
    console.log(includeEspecial);
    console.log(includeNumber);
    console.log(includeUpper);
    console.log(includeLower);
    console.log(NOfEspecial);
    console.log(NOfNumber);
    console.log(NOfUpper);
    console.log(NOfLower);
    console.log(passwordLength);
    if((includeEspecial)||(includeNumber)||(includeUpper)||(includeLower)){
        generateString();
    }
}

function generateString(){
    for(let i=0; i < passwordLength; i++){
        console.log(`================================================`)
        generator = generateNumber();
        
        password += getChar(generator);

        console.log(password);
    }
}
function generateNumber(){
    generate = 0;
    generate = Math.ceil(Math.random()*(4));
    console.log(`choosed: ${generate}`)
    console.log(`includeEspecial: ${includeEspecial}, includeNumber: ${includeNumber}, includeUpper: ${includeUpper}, includeLower: ${includeLower}`)
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
    console.log(`passed: ${generate}`)
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

function dictionaryValue(k){    
    k = 1;

    // Caracteres especiais (32)
    const specialCharacters = `!@#$%^&*()_+[]{}|;:',.<>?/~\`"-=`;
    for (let char of specialCharacters) {
        Dictionary.set(k, char);
        k++;
    }

    // Números de 0 a 9
    for (let i = 0; i <= 9; i++) {
        Dictionary.set(k, i.toString());
        k++;
    }

    // Letras minúsculas
    for (let i = 97; i <= 122; i++) {
        Dictionary.set(k, String.fromCharCode(i));
        k++;
    }

    // Letras maiúsculas
    for (let i = 65; i <= 90; i++) {
        Dictionary.set(k, String.fromCharCode(i));
        k++;
    }
}

