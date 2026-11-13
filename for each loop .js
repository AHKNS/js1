
//  => array name .forEach (function fun (a){
//     all details of fun are                    this loop pass his own value to func 
//        mentioned here                          and get out as its own use
//      }) 

//  the function that passed to another function as argument is called call back function


// example :

let arr = [1 ,2 ,2 , 4] ;

arr .forEach((value) =>{
    console.log(value);
})

let tarr = ["pak" ,"ind" , "afg" , "kor"] ;

tarr .forEach((value , idx , tarr) =>{
    console.log(value.toUpperCase(), idx ,tarr);
})