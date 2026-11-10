let bill = prompt("enter bill")

if(bill >= 2000){
discount = bill*0.10;
}else if(bill < 1999){
    console.log("your bill", bill)
}






let afterDiscount = bill-discount;
let tax = afterDiscount*0.05
let finalBill = afterDiscount + tax

console.log ("your entered bill =",  bill);
console.log ("your bill =",  finalBill);
console.log ( "your discount =", discount);
console.log ("your tax =", tax);