// What will be logged here ?

// Task 1
// - Inside functions, 'this' is referencing the global object
// - ex. window, undefined, etc
function getItem() {
  // In this case, since the function is not nested, it logs 'window'
  console.log( this );
};

getItem();


// Task 2
// - Inside objects, 'this' is referencing the object, even if 
// - called inside a function
const item = {
  title: "Ball",
  getItem() {
    // In this case it logs: { title: 'Ball', getItem: [Function: getItem] }
    console.log( "this", this );
  },
};

item.getItem();


// Task 3
// - Inside classes, 'this' is referencing to the instance of the class
// - Placing the console.log() in a nested function will log 'undefined'
// - since it is not referencing the instance of the class
class Item {
  title = "Ball";
  getItem() {
    console.log( "this", this );
  };
};

const newItem = new Item();
item.getItem();