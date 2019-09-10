function fizzBuzz(n) {
    if (n % 3 == 0 && n % 5 == 0) return 'Fizz Buzz';
    else if (n % 3 == 0) return 'Fizz';
    else if (n % 5 == 0) return 'Buzz';
    return n;
}
module.exports = fizzBuzz;