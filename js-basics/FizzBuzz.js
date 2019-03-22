const output = fizzBuzz(16);
console.log(output); 

function fizzBuzz(input) {
    switch(true) {
        case isNaN(input):
            return 'Not a number';
        case input % 15 === 0:
            return 'FizzBuzz';
        case input % 3 === 0:
            return 'Fizz';
        case input % 5 === 0:
            return 'Buzz';
        default:
            return input;
    }
}