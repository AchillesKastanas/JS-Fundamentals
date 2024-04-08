// Write a function which helps to achieve multiply(a)(b) and returns products of a and b

const productFunction = ( num1 ) => {
    // num1 is stored inside the function and waits to be used in the returning function

    return ( num2 ) => num1 * num2;
};

console.log( productFunction(2)(2) );

// Now create a curry function

const curryFunction = function( fn ) {
    const parCount = fn.length;

    return function f1(...args) {
        if ( args.length >= parCount ) {
            // enough args to call the original function
            return fn( ...args );
        } else {
            return function f2 ( ...moreargs ) {
                var newArgs = args.concat(moreargs)
                return f1( ...newArgs );
            };
        };
    };
};

const curriedSum = curryFunction( ( a, b ) => a + b );
curriedSum(1,2,3);
