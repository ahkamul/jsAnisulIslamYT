// var num = parseInt (prompt ("Enter any number : "));

// if (num > 0) {
//     document.write ("Positive Number");
// } 
// else if ( num < 0) {
//     document.write ("Negative Number");
// } 
// else {
//     document.write ("Zero");
// }

        // Above same programme by using Number Method: 


// var num = Number (prompt ("Enter any number : "));

// if (num > 0) {
//     document.write ("Positive Number");
// } 
// else if ( num < 0) {
//     document.write ("Negative Number");
// } 
// else {
//     document.write ("Zero");
// }

        // Above same programme by using Ternary Operator: 

// var num = Number (prompt ("Enter any number : "));

// var result = num > 0 ? document.write ("Positive Number") : document.write ("Negative Number")


        // Programme with Ternary Operator with more than two conditions:

var num = Number (prompt ("Enter any number :")); 

var result = num > 0 ? "Positive Number": num < 0 ? "Negative Number": "Zero";

document.write (result);
