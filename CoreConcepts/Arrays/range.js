// Write a function that implements the range(1, 50) -> 1,2,3,...,50
// Array creates an [undefined, undefined, ...] array
// .keys() returns an iterable [0, 1, ...] of keys in the array
// .map() used to start from the given 'start' value

const theCounter = ( start, end ) => {
    return [ ...new Array( end - start ).keys() ].map( element => element + start );
};

console.log( theCounter( 30, 40 ) );