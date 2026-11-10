// functions

// way to write a function 

// function (function name) (){
// }
// example =

function firstFun(){
console.log("Welcome to apna college");
console.log("this is my firsst function in js");

}

// function ko likh lana kafi nahi ha  sirf function likhna sa function ni chala ga 
//  function ko chalana ka liya huma is function ko call karna parta ha

//  "function name( )"  is statment ka zirya fun tko call kia jata ha


firstFun();

// ......................

// to add input by user to function we add name eg msg in function"()"

function fun(msg)  // the thing write inside the function declaration  () called function parameter
{
    console.log (msg)
}

// add the massage we want to send add to parnthass () of funcion call

fun("enter your name");// the thing write inside the function call  () called function arguments

// ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,

//  we can use multiple para meter 

function fun1(msg ,no)  // the thing write inside the function declaration  () called function parameter
{
    console.log (msg * no)
}

fun1(10 ,20);



//  now we can say that     
        // swcond way to declear function 
        
        // function (function name) ( parameter1 , parameter2){}

 function function2( para1 , para2 ){}

// ................................................ 

//  fuction that create a sum 

function sum(a , b){
    console.log (`the sum of a + b = ${a + b}`)
}

sum(100 , 200);

// ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,

// in all above fun we get a print statmeent 
//  we can just get a value of fun tion without print it
//  by using a reserved wrd called "return"

function sumRet(a , b){
    s = a + b ;
    return s;
}

sumRet( 2 , 3); // no value will be print q ka koi print statmet ha hi ni fun ma 

// fun na ik val ret ki ha go hun kisi variable ma save kar sakta ha

let val = sumRet( 2 , 3); 
console .log(val); // 5 q ka ab value go return hoi yhe wo val ma save  ho gai ha

// jab hu function declation ma return likh data hain to fun ma return ka dbad koi code ni likha ja sakyta