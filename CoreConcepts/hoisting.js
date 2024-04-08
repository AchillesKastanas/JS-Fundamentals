// Hoisting: the declaration of the variable will be bubbled to the top of the file
//           happens while using: var / function
//           does NOT happen while using: const / let

// What will be logged

// foo is not defined - error
console.log( foo ); 
foo = 1;

// undefined
console.log( foo2 ); 
var foo2 = 2;

// undefined
var foo2;
console.log( foo2 ); 
foo2 = 2;

// 3
foo3 = 3;
console.log( foo3 );
var foo3;