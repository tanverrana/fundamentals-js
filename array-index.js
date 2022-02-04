var bookPages = ['tanver', 'rana', 'sobur', 'shakib', 'tammim', 'Mashrafee', 'Mushfiq'];

var tammimIndex = bookPages.indexOf('tammim');
console.log(tammimIndex);

var numbers = [23, 35, 56, 134, 678, 89];
var index = numbers.indexOf(56);
var negative = numbers.indexOf(516); //value nai
console.log(index);
console.log(negative); //value pawa jai nai


//position Number
var secondIndex = bookPages[2];
console.log(secondIndex);

console.log(numbers);

//index r valu change korar jonno 
numbers[2] = 75;
numbers[3] = 48;
console.log(numbers);