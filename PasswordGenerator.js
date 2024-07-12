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
let passwordLength = 0;
let password = '';
let dictionary1 = `abcdefghijklmnopqrstuvwxyz`;
let dictionary2 = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`
let dictionary3 = `0123456789`
let dictionary4 = `!@#$%^&*()_+[]{}|;:,.<>?/~\"-=`;


document.getElementById("send").onclick = function(){
    let includeEspecial = INCLUDEESPECIAL.checked;//1
    let includeNumber = INCLUDENUMBER.checked;//2
    let includeUpper = INCLUDEUPPER.checked;//3
    let includeLower = INCLUDELOWER.checked;//4
    let especialChars = Number(ESPECIALCHARS.value);
    let numberChars = Number(NUMBERCHARS.value);
    let lowerChars = Number(LOWERCHARS.value);
    let upperChars = Number(UPPERCHARS.value);
    passwordLength = especialChars+numberChars+lowerChars+upperChars;
    console.log(includeEspecial);
    console.log(includeNumber);
    console.log(includeUpper);
    console.log(includeLower);
    console.log(especialChars);
    console.log(numberChars);
    console.log(lowerChars);
    console.log(upperChars);
    console.log(passwordLength);
    if((includeEspecial)||(includeNumber)||(includeUpper)||(includeLower)){
        generateString();
    }
}

function generateString(){
    for(let i=0; i <= passwordLength; i){
        let generator = Math.ceil(Math.random()*(4));
        console.log(generator);
        switch(generator){
            case 1:
                if(includeEspecial){
                    password += dictionary.charAt(Math.ceil(Math.random()*32-1)+64);
                    i++;
                }
            case 2:
                if(includeNumber){
                    password += dictionary.charAt(Math.ceil(Math.random()*10-1)+53);
                    i++;
                }
            case 3:
                if(includeUpper){
                    password += dictionary.charAt(Math.ceil(Math.random()*26-1)+27);
                    i++;
                }
            case 4:
                if(includeLower){
                    password += dictionary.charAt(Math.ceil(Math.random()*26-1)+1);
                    i++;
                }
        }
        console.log(password);
    }
    console.log(password);
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

