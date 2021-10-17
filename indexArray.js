        //  # 26 : How to create and use array in JS :

// var names = ["Abu", "Acu", "Adu", "Afu", "Agu", "Anu"]

// // document.write (names); 
// // document.write (names.length);

// names.push ("Azu");

// // document.write (names);
// // document.write (names.length);

// names.pop ();   // Last index will be deleted 

// document.write (names);  


        // Array Concatenation :

// var country1 = ["Bangladesh", "Bhutan", "Nepal", "Sri Lanka", "India", "Pakistan", ];
// var country2 = ["Afghanistan", "Iran", "Iraq"]

// var country = country1.concat (country2);

// // document.write (country); 
// document.write (country.length);


        // # 27 : Loop in Array 

    // Ex. 1

// var num = [10, 20, 30, 40, 50];

// document.write (num [0]); 
// document.write (num [1]); 
// document.write (num [2]); 
// document.write (num [3]); 
// document.write (num [4]); 

        // Above programme can be done by using for loop :

// var num = [10, 20, 30, 40, 50];

// for (var i = 0; i < 5; i ++) {
//     document.write (num [i]);
// }

        // Addition of Array Elements: 


// var num = [10, 20, 30, 40, 50];

// sum = 0;

// for (var i = 0; i < 5; i ++) {
//     //document.write (num [i]);
//     sum = sum + num [i];
// }

// document.write ("Sum = " + sum); 


        // Addition of Array Elements by taking value from prompt: 

// var num = new Array ();

// for (var i = 0; i < 5; i ++) {
//     num [i] = parseInt (prompt ("Enter a number :"));
// }

// var sum = 0; 

// for (var i = 0; i < 5; i ++) {
//     sum = sum + num [i];
// }

// document.write ("Sum = " + sum); 


        // # 28 : Array related methods: 

// Ex. 1 

// var names = ["Abu", "Adu", "Afu"]; 

// names.pop();            // Removing from last 
// names.shift ();         // Removing from first (Opposite of pop)
// names.unshift();        // Reinstate element after removing for shift() method. 
// names.splice (2, 0, "Amu", "Anu");      // Adding element Amu and Anu in number 2 index
// names.splice (2, 2, "Amu", "Anu");      // Adding element Amu and Anu in number 2 index and removing number 2 index from original Array. 
// names.splice (2, 1, "Amu", "Anu");  // Working like the previous one, can't understand

// names.splice (2, 1);
// names.slice (1, 2);

// document.write(names);

// Ex. 2 

// var names = ["Afu", "Babu", "Dadu", "Sabu", "Abu", "Jodu", "Adu", ];

// names.sort();
// names.reverse(); 

// document.write (names);

// Ex. 3 : Number sorting

// var numbers = [20, 5, 25, 45, 1]; 

// numbers.sort ();        // sort method not working

// numbers.sort (function (a, b){
//         return a - b;
// })

// document.write (numbers); 


        // # 29 : One Dimensional Array 

// Ex. 1 

// var names = ["Ash", "Shakib", "Mushi", "Mahmudullah", "Mash"];

// for (var x = 0; x < names.length; x ++){
//         document.write (names [x]);
// }

// Task # 8 : 


// var scores = [21, 28, 1, 0, 101, 88, 15, 89, 27, 28, 7, 11];
// var maxScore = highestScore (scores);

// function highestScore (scores) {
//         var max = scores [0];
//         for (var x = 1; x < scores.length; x ++){
//                 if (max < scores [x]) {
//                         max = scores [x];
//                 }
//         }
//         return max;
// }


// document.write (maxScore);


        // # 30 : Two Dimensional Array / Task 9 

// Ex. 1 

// var playersInfo = [
//         ["Ash", 95],
//         ["Bash", 19],
//         ["Mushi", 3],
//         ["Mash", 13],
//         ["Shakib", 45]
// ]

// for (var x = 0; x < 5; x ++) {
//         for (var y = 0; y < 2; y ++){
//                 document.write (playersInfo [x] [y]); 
//                 //console.log (playersInfo [x] [y]);
//         }
        
// }


        // Task 9 : 

// Creating a function called playersInfo that will 
   // - Receive a 2d Array called plearsInfo
   // - Based on the highest score, return the name of the player. 

// Things required : variable, if-else, loop, function, array 

var playersInfo = [
        ["Ash", 95],
        ["Bash", 25],
        ["Mash", 45],
        ["Jash", 105],
]

highestRunScorer (playersInfo); 

function highestRunScorer {
        //document.write (playersInfo);
        var highestRunScorer = playersInfo [0] [0];
        var highestRunScorer = playersInfo [0] [1];

        for ( var x = 1; x < playersInfo; x ++) {
                if (highestScore < playersInfo [x] [1]) {
                        highestScore = playersInfo [x] [1];
                        highestScorer = playersInfo [x] [0];
                }
        }
        return highestScorer;
}

var Name = highestRunScorer (playersInfo);

document.write (Name); 
