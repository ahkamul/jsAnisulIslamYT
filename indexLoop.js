// Basic Syntax of Loop in JS :

// for (Initialization; Condition; Update){

// }

// Ex. 1 

// for (x = 0; x <= 10; x++){
//     document.write ("<h1>Bangladesh</h1>");
// }

// document.write ("<h1>End</h1>")


// Ex. 2 

// for (x = 0; x < 10; x++){
//     document.write ("<h1>Bangladesh</h1>");
// }

// document.write ("<h1>End</h1>")


// Ex. 3 

// for (x = 0; x <= 100; x++){
//     document.write ("<h1>Bangladesh</h1>");
// }

// document.write ("<h1>End</h1>")

// Ex. 4 

// for (x = 0; x <= 100; x++){
//     document.write ("   " + x);
// }

// document.write (x);


// Ex. 5

// for (x = 10; x > 0; x--){
//     document.write ("   " + x);
// }

//document.write (x);


// // Ex. 6

// for (x = 100; x >= 0; x = x -5){
//     document.write ("   " + x);
// }

// //document.write (x);


// Ex. 7 : Programme of the sum of consecutive numbers:

    //  1 + 2 + 3 + 4 + 5 = 15 

// var sum = 0;

// for (var x = 1; x <= 5; x ++){
//     sum = sum + x;
// }
// document.write ("Sum = " + sum); 



    // 10 + 9 + 8 + 7 + 6 = 40   

// var sum = 0; 

// for (var x = 10; x > 5; x --){
//     sum = sum + x;
// }
// document.write ("Sum = " + sum);


    // Sum of the all even numbers from 1 - 20:

// var sum = 0;

// for (var x = 2; x <= 20; x = x + 2) {
//     // if (x % 2 == 0)
//     //     document.write ("x");     // need to know how to solve using if conditional 

//     sum = sum + x;
// }

// document.write ("Sum = " + sum);


    // sum of the numbers from m to n :

// var m = parseInt (prompt ("Enter the first number: "));
// var n = parseInt (prompt ("Enter the first number: "));

// var sum = 0;

// for (var x = m; x <= n; x ++) {
//     sum = sum + x;
// }

// document.write ("Sum = " + sum); 


    // Programme of the sum to print 5 times: 

// for (var x = 1; x <= 5; x ++) {
//     var num1 = parseInt (prompt ("Enter the first number: "));
//     var num2 = parseInt (prompt ("Enter the second number: "));
//     var sum = num1 + num2;

//     document.write ("Result = " + num1 + " + " + num2 + " =" + sum); 
// }


// while loop : 

    // Time Table of 5:

// var i = 5;

// while (i <= 50) {
//     document.write (" " + i);
//     i = i + 5;
// }

    // sum of 1 to 10 :

// var i = 1;
// var sum = 0;

// while (i <= 10) {
//     sum = sum + i;
//     i = i + 1; 
// }
// document.write ("Sum = " + sum);

    // sum of all even number from 1 to 100:

// var i = 2;
// var sum = 0;

// while (i <= 100) {
//     sum = sum + i;
//     i = i + 2;
// }

// document.write ("Sum = " + sum); 


    // sum the the numbers from 1 to 100 which are divisible by both 3 & 5: 

// var i = 1;
// var sum = 0;

// while (i <= 100){
//     if (i % 3 == 0 && i % 5 == 0) {
//         sum = sum + i;
//     }
//     i = i + 1;
// }

// document.write ("Sum = " + sum);


    // sum of the even number from 1 to 10 by using for loop: 

// var sum = 0;

// for (i = 1; i <= 10; i++) {
//     if (i % 2 == 0) {
//         sum = sum + i;
//     }
// }

// document.write ("Sum = " + sum);


        // do while loop :

// var i = 1;

// do {
//     document.write (" " + i);
//     i ++ ;
// } while (i <= 10); 

var i = 1;
sum = 0;

do {
    if (i % 2 == 0) {
        sum = sum + i;
    }
    i ++ ;
} while (i <= 10); 

document.write ("Sum = " + sum);