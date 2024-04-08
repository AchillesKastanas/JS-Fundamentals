// Write a function that gets an array and an element and returns an array with
// this element at the end
// Usign .push() is Bad, it modifies the original array

const arrayManager = ( theArray, theElement ) => {
    return [...theArray, theElement]
}

console.log( arrayManager( [1, 2], 3 ) );