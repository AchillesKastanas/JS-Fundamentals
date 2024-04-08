// Create a function that has increment and getValue functionality

const privateFunction = () => {
    let privateValue = 0;

    return {
        increment: ( val = 1) => {
            privateValue += val;
        },
        getValue: () => {
            return privateValue;
        },
    };
};

myPrivateFunction = privateFunction();
myPrivateFunction.increment();

console.log( myPrivateFunction.getValue() );

// Create a function that stores a secret string and returns it only when we re-call it

const secretFunction = () => {
    let secretString = 'secret';

    return () => secretString;
};

// Needs to be called twice, since it returns a function
console.log( secretFunction()() );