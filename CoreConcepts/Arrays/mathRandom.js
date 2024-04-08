// Create a function that shuffles the given array randomly

const arrayShuffler = ( theArray ) => {
    return theArray
        // Create an object that stores a random value
        .map( el => ({ sort: Math.random(), num: el }) )
        // Sort based on that value
        .sort( ( el1, el2 ) => el1.sort < el2.sort ? -1 : 1 )
        // Keep the numbers from the object
        .map( el => el.num );
}

console.log( arrayShuffler( [1, 2, 3, 4, 5] ) );