// function double(arr) {
//     return arr.map(function(val) {
//       return val * 2;
//     });
//   }

//   Refactor the above code to use two arrow functions. Turn it into a one-liner.

const doubleArry = arr => arr.map(val => val * 2);

// Replace ALL functions with arrow functions:

// function squareAndFindEvens(numbers){
//     var squares = numbers.map(function(num){
//       return num ** 2;
//     });
//     var evens = squares.filter(function(square){
//       return square % 2 === 0;
//     });
//     return evens;
//   }

const squareAndFindEvens = numbers => {
    const squares = numbers.map(num => num ** 2);
    const evens = squares.filter(square => square % 2 === 0);
    return evens;
}


//  without declaring variables:

const squareAndFindEvens = numbers => numbers.map(num => num ** 2).squares.filter(square => square % 2 === 0);
