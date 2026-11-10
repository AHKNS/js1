// let (array name) =["data"]
// way to write array 

// example

let arrayNme = ["data 1" , "data2" ,"........."];

let no = [ 10 ,12 , 13 , 14 , 15 , 16 , 17];
console.log(no);

let name = [`hassan` , `ahmad` , `ahkns`];
console.log(name);

// array indicess

name[2]; // ahkns
name[0]; // hassan
name[2]; // ahmad

// array ki value change kar sakta hain

name [0] = "khan";
name [1] = "shah" ;
name [2] = "g jnab";


// array r change able while strings are immut able //

// looping of array 

for (let idx = 0; idx < name.length; idx++) {
    console.log(name[idx]);
}

// for of (mostly used)
 
let cities = [`dehli` , `lahore` , `pashawar` , `krachi`] ;
 for(let city of cities){
    console.log(city)

    // we can add properties in this loop
    console.log(city.toUpperCase())


 }

//  Practice question

let marks = [85 , 97 , 44 , 37 ,76 , 60];
let sum = 0;
let ave;
for(let mark of marks){
sum += mark ;

}
ave = sum / marks.length ;
console.log(ave) ;

// Practice Question no 2
// by using for off loop

let prices = [250 , 645 , 300 , 900 , 50 ];
let discount;
let i = 0 ;
 for( let price of prices){
    console.log(price);
 discount = price / 10;
 prices[i] = prices[i] - discount ;
 console.log(`value after discount ${prices[i]}`)
 i++;
 }
console.log(prices);
 

//  by using for loop

for(let i = 0 ; i<prices.length ; i++){
dis = prices[i] /10;    
prices[i] -= dis;
}
console.log(prices);


    // <................array meathods ...............>

// push and pop (change in orignal arry)

let ved = [ "potato" , " onion" , "tomato"];

console.log(ved.push("garlic")); // 3

// add any item in end of an arry
// we can also add multiple items

console.log(ved.push("mint" , "chili"))

// .....................................

console.log(ved); // 6
console.log(ved.pop()); // chilli
console.log(ved); // 5

// TO strng  (convert an arry to string) (no change in orignal arry mae a new array)
console.log(ved); // array
console.log(ved .toString()); // string
console.log(ved); // same it is array

console.log(prices); //array
console.log(prices.toString());// string
console.log(prices); // array

//  concate an array  (provide us a new array) (no change in orrignal array)(array added in last)

let marval = ["thor" , "irona " , "superman"] ;
let dcHeros = ["spiderman" , "hulk"];
let indianHeros = ["shahrukhan" , "salman khan"]

// conting 2 arrays 

let heros = marval .concat(dcHeros);
console.log(heros);
 // concating more then 2 arrays

let heros2 = marval .concat(dcHeros , indianHeros);
console.log(heros2);


// ............................................
// upshift and shift 

// upshift (use to and element in start of array)(o.r array will change)
console.log(`upshift meathod`);


marval.unshift("force")
console.log(marval);

// shift (use to dlete element in start of array)(o.r array will change)
console.log(`shift meathod`);


marval.shift("force")
console.log(marval);

// ..........................

// slice  (cut apiece of array / do no chnage in orignal array)

let sheros = marval.slice(1 ,3);
console.log(sheros); //  irona , superman



// splice 
// arrayname.splice(index , elemet we want to del , elemnts we wnt to add)

let splice = [1 , 2, 3,4 ,5 ,6]

 splice.splice(1 ,3 ,101 ,102,103);
console.log(splice);


// add element 

splice.splice(4,0,50 , 60 , 70);
console.log(splice);

// add element 

splice.splice(1 , 2 , 0);
console.log(splice);

// replace element 

splice.splice(1 , 1 , 2);
console.log(splice);

// if we pass one no in splice it start react as slice 

// add element 

splice.splice(5);
console.log(splice);

// practice q no 3 arry 

let compnies = ["Bloooberg" , "Microsoft" , "Uber" , "Google" , "IBM" , "Netflix"];
console.log(compnies);
// // using splice
// compnies.splice(0 ,1 );
// console.log(`remove netflix = ${compnies}`);
// compnies.splice(1 ,1 ,"ola");
// console.log(`remove uber & and ola = ${compnies}`);
// compnies.splice(6 , 0 ,"amazon");
// console.log(`adding amazon = ${compnies}`);

// using pop sshift etc
compnies.shift(0);
console.log(`remove 1st = ${compnies}`);
compnies.splice(1 ,1 ,"ola");
console.log(`remove uber & and ola = ${compnies}`);
compnies.push("Amazon");
console.log(`adding amazon = ${compnies}`);
console.log(compnies);

// ............end ............ 
