// Find the number of occurances of the minimum number of the given list

const theGivenList = [1, 1, 1, 1, 2, 3];
const theMinValue = Math.min( ...theGivenList );
const minimumList = theGivenList.filter( el => el === theMinValue );
const minNumberCount = minimumList.length;

console.log( minNumberCount );
