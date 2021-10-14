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

var numbers = [20, 5, 25, 45, 1]; 

numbers.sort ();        // sort method not working

numbers.sort (function (a, b){
        return a - b;
})

document.write (numbers); 
