// // Programme for Even and Odd Number :

// var num = prompt ("Enter the Number : ");

// if (num % 2 == 0)
//     document.write ("Even Number"); 

// else 
//     document.write ("Odd Number");


// // Programme for Positive and Negative Number :

// var num = prompt ("Enter the Number : ");

// if (num > 0)
//     document.write ("Positive Number")

// else if (num < 0)
//     document.write ("Negative Number")

// else
//     document.write ("Zero");


// // Task 4: Letter Grade Programme 

// var achievedNumber = prompt ("Achieved Number by a Student : ");

// if (achievedNumber > 100 || achievedNumber < 0)
//     document.write ("Invalid Number");

// else if (achievedNumber >= 80 && achievedNumber <= 100)
//     document.write ("Grade : A+");

// else if (achievedNumber >= 70 && achievedNumber <= 79)
//     document.write ("Grade : A");

// else if (achievedNumber >= 60 && achievedNumber <= 69)
//     document.write ("Grade : A-");

// else if (achievedNumber >= 50 && achievedNumber <= 59)
//     document.write ("Grade : B");

// else if (achievedNumber >= 40 && achievedNumber <= 49)
//     document.write ("Grade : C");

// else if (achievedNumber >= 33 && achievedNumber <= 39)
//     document.write ("Grade : D");

// else 
//     document.write ("Grade : Fail");


// // Programme for greater and smaller number: 

// var num1 = parseFloat (prompt ("Enter the first number :"));
// var num2 = parseFloat (prompt ("Enter the second number :"));
// var num3 = parseFloat (prompt ("Enter the third number :"));

// if (num1 > num2 && num1 > num3)
//     document.write ("Large Number = " + num1);

// else if (num2 > num3 && num2 > num1)
//     document.write ("Large Number = " + num2);

// else
//     document.write ("Large Number = " + num3);


// Programme for Vowel and Consonant : 

// var letter = prompt ("Enter a letter : ");

// letter = letter.toLowerCase();

// if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u")
//     console.log ("Vowel");

// else
//     console.log ("Consonant"); 


// Programme for Letter Grade :

var achievedMarks = prompt ("Enter the achieved marks:");

if (achievedMarks < 0 || achievedMarks > 100)
    document.write ("Invalid Marks !!!!");

else if (achievedMarks >= 80 && achievedMarks <= 100)
    document.write ("Grade : A+");

else if (achievedMarks >= 70 && achievedMarks <= 79)
    document.write ("Grade : A");

else if (achievedMarks >= 60 && achievedMarks <= 69)
    document.write ("Grade : A-");

else if (achievedMarks >= 50 && achievedMarks <= 59)
    document.write ("Grade : B");

else if (achievedMarks >= 40 && achievedMarks <= 49)
    document.write ("Grade : C");

else if (achievedMarks >= 33 && achievedMarks <= 39)
    document.write ("Grade : D");

else 
    document.write ("Grade : Fail");
