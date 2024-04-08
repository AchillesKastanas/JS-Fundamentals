// Write a function which can concatenate two arrays
// .concat() does NOT mutate the array
// can be done also with [...firstArray, ...secondArray]

const arrayConcatenator = ( firstArray, secondArray ) => {
    return firstArray.concat( secondArray );
};

console.log( arrayConcatenator( [1, 2], [3, 4] ) );

