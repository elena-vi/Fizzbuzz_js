function Fizzbuzz () {};

Fizzbuzz.prototype.multipleOfThree = function(number) {
	return number % 3 == 0 && number != 0
}

Fizzbuzz.prototype.multipleOfFive = function(number) {
	return number % 5 == 0 && number != 0
}

Fizzbuzz.prototype.getResult = function(number) {
	if (this.multipleOfThree(number) && this.multipleOfFive(number)) { return 'Fizzbuzz' };
	if (this.multipleOfThree(number)) { return 'Fizz' };
	if (this.multipleOfFive(number)) { return 'Buzz' };
	return number
}