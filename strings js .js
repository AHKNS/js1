// Strinng


// string Properties

let str = "hassan";
let str2 = "khan";

str.length
console.log(str)

console.log(`my name is ${str}`)
console.log(`my name is ${str2}`)
console.log(`my name is ${str} \n \t ${str2}`)

console.log(str[0]);
let a = `hassan\tkhan`;

// string meathods

// uppercase lowercase {.toUpperCase .toLowerCase}
let string = `toUpporCase`;
let f_name = `chanzaib`;

// trim {.trim}

let trim = `   khna        khan   klak`; // only remove spaces from outer to 1st and last char
let trim1 = `                 my name is hassan khan                   `;
let trim2 = `h  a  s  a  s  a  s  n `;

//slice {.slice(start ,end?)}

let slice0 = `123456789`;
let slice1 = `Pakistan`;
let slice2 = `punjab`;

// in vs code

console.log(slice0.slice(1, 6));
console.log(slice1.slice(2));


// concact {str1.concat(str2)} 2 strings ko apas ma gorna ka liya
// we can cancat by using + sign

let aa = "hassan";
let bb = "khan";
let cc = "js";
let dd = "cpp";

// in vs code

console.log(aa.concat(bb)); //hassankhan
console.log(cc.concat(bb));// jjskhan
console.log(dd.concat(cc));//cppjs
console.log(dd.concat(aa));//cpphassan
console.log(aa+bb+cc+dd);

                        // Replace Meathod{str.replace(searchVal, newValue)}

let replace0 = "hello";      ;
let replace1 = "dear"; 

// in vs code

console.log(replace0.replace("h" , "y"));
console.log(replace1.replace("d", "b"));
console.log(replace0.replace('lo' , 'p'));


                            // char-at 

  let hassan = "chanzaib"


  console.log(hassan.charAt(3));
  console.log(hassan.charAt(4))