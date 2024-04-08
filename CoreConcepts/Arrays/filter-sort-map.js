// 1. Get array of names from given array of users
// 2. Get only active users
// 3. Sort users by age decending

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


const names = users
    .filter( user => user.isActive )
    .sort( ( user1, user2 ) => user1.age < user2.age ? 1 : -1 )
    .map( user => user.name );

console.log( names );