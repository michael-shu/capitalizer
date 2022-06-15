'use strict';

/* Enable tab to type tab, but removes it's use from swapping focus and helping visually impaired users to navigate through the webpage */

let textareas = document.getElementsByTagName('textarea');
    textareas[0].onkeydown = function(e){
        if(e.keyCode == 9 || e.which ==9){
            e.preventDefault();
            var s = this.selectionStart;
            this.value = this.value.substring(0,this.selectionStart) + "\t" + this.value.substring(this.selectionEnd);
            this.selectionEnd = s+1; 
        }
    }


const capitalize = document.getElementById('capitalize');
var nextWord = true;
capitalize.addEventListener('click', function(){

    let test = document.getElementById('input').value;
    let output = ''
    
    if(test)
    {
        let input = document.getElementById('input').value;
        let sentences = input.split(' ');

        for(let sentence of sentences){
            sentence = capitalizer(sentence);
            nextWord = false

            for(let char of sentence){
                if(char == ' '||char== '\n'||char == '?'||char == '\t'||char == '\r'||char == ','||char == ";"||char == '.'||char == '!'||char == '?')
                {
                    nextWord = true;
                    output += char;
                }
                else{
                    if(nextWord && char.toUpperCase != char.toLowerCase())
                    {
                        output += char.toUpperCase();
                        nextWord = false;
                    }
                    else{
                        output += char;
                    }
                }
            }
            output += ' ';
            nextWord = true;
        }
    }
    document.getElementById('output').innerHTML = output;
});

function capitalizer(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}
