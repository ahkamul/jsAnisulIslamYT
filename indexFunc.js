                // Traditional Function: 

    // Ex. 1 (Creating a function)

// function square () {
//     var num = 5;
//     var result = num * num;
//     document.write ("Result = " + result + "<br>");
// }

// square ();    // Calling function 

    
    // Ex. 2 (How to pass value in a function)

// function square (num) {
//     var result = num * num;
//     document.write ("Result = " + result + "<br>");
// }

// square (5);
// square (6);
// square (7);


    // Ex. 3

// function square (num1, num2) {
//     var result = num1 * num2;
//     document.write ("Result = " + result + "<br>");
// }

// square (5 , 6);
// square (6 , 7);
// square (7 , 8);


    // Ex. 4 (Returning a function)

// function square (num1, num2) {
//     var result = num1 * num2;
//     return result;
// }

// // square (5 , 6);  This is not working

// document.write (square (5 , 6)); 
// document.write ("Result = " + square (5 , 6)); 


    // Programme for Addition: 

// function addition (x , y) {
//     var result = x + y;
//     return result;
// }

// document.write ("Sum = " + addition (5 , 6)); 


    // Programme for Subtraction: 

// function subtract (x , y) {
//     var result = x - y;
//     return result;
// }

// document.write ("Subtraction = " + subtract (15 , 6)); 


                // # 25 : IIFEs and Function Expression
                // IIFE - Immediately Invocable Function Expression
                
        // Ex. 1

// function display () {
//     document.write ("Hello !!!!");
// }
// display (); 

    // Above programme done by IIFE: 

// (function display () {
//     document.write ("Hello Bangladesh !!! ");
// })(); 

        
        // Ex. 2 

// (function display (message) {
//     document.write (message);
// }) ("Hello Bangladesh again !!!");


                // Function Expression

    // Ex. 1

// function displayMessage () {
//     document.write ("Hi ! I am a message.");
// }

// displayMessage (); 

    // Above programme done by Function Expression

// var display2 = function displayMessage () {
//     document.write ("This is Function Expression !!!!");
// }

// display2 ();

    // Passing Parameter to function: 

var display2 = function displayMessage (msg) {
    document.write (msg);
}

display2 ("This is Function Expression with Parameter !!!");