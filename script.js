const makeChange = (c) => {
  const romanNumerals = [
    ['M', 1000], 
    ['CM', 900], 
    ['D', 500], 
    ['CD', 400], 
    ['C', 100], 
    ['XC', 90], 
    ['L', 50], 
    ['XL', 40], 
    ['X', 10], 
    ['IX', 9], 
    ['V', 5], 
    ['IV', 4], 
    ['I', 1]
  ];

  let result = '';
  let number = parseInt(c, 10); // Convert the input to a number
  
  for (let [symbol, value] of romanNumerals) {
    while (number >= value) {
      result += symbol;
      number -= value;
    }
  }

  return result;
};

// Do not change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));


// do not edit below this line
module.exports = convertToRoman
