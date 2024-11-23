const add = function(a,b) {
  return a + b;
	
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(arr) {
  return arr.reduce((a,b) => a + b,0);
	
};

const multiply = function(arr) {
  return arr.reduce((a,b) => a * b);
};

const power = function(a,p) {
  let res = a;
  for (let i = 1; i < p; i++){
    res *= a;
  }
  return res
	
};

const factorial = function(num) {

  let res = 1;

  while (num > 0){
    res *= num;
    num -= 1;
  }

  return res

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
