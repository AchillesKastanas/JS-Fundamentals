// Remove all duplicates from the array
// Set() keeps only unique values of any type

const arrayCleaner = ( theArray ) => {
    return [...new Set( theArray )];
}

console.log( arrayCleaner( [1, 2, 3, 3, 4] ) );