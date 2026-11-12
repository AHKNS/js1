function vowelsCounter( word ){
let count = 0;
for(text of word){


if(text === "a" || text === "A"
 ||text === "e" || text === "E"
 ||text === "o" || text === "O"
 ||text === "i" || text === "I"
 || text === "u" || text === "U" ){
    count ++;
    
}

}

return count;
}

// let input = prompt("enter your text");

// let v = vowelsCounter(input);
// console.log (v);


// poledrome

function poledrome (letter){

let reverse = "";

for (let i = letter.length - 1; i >= 0; i--){
 reverse += letter[i];

}
return reverse;

}

let word = prompt("enter your word");

let wordct = word.toLowerCase().trim();

let ans = poledrome(wordct);
console.log(ans);