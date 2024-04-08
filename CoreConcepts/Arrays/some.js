// Check if a user has the given name in the array 
// .some() returns true if it finds at least one
// .findIndex() returns an index >= 0 if it finds at least one

const users = [
    {
        id: 1,
        name: 'Achilles',
        isActive: true,
        age: 23,
    },
    {
        id: 2,
        name: 'Panos',
        isActive: true,
        age: 31,
    },
    {
        id: 3,
        name: 'Odysseas',
        isActive: false,
        age: 29,
    }
];

const nameFinder = ( theUsers, theName ) => {
    return theUsers.some( user => user.name === theName );
} 

console.log( nameFinder( users, 'Achilles' ) );
console.log( nameFinder( users, 'Marco' ) );