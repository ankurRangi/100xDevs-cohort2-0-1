/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/
class Calculator {

  constructor(result=0){
    this.result = result;
  }
  add(number){
    this.result = this.result + number;
  }
  subtract(number){
    this.result = this.result - number;
  }
  multiply(number){
    this.result = this.result * number;
  }
  divide(number){
    if (number == 0){
      throw new Error("Can not divide by Zero");
    }
    this.result = this.result/number;
  }
  clear(){
    this.result = 0;
  }
  getResult(){
    return this.result;
  }
  isNumber(value) {
    return typeof value === 'number';
  }
  calculate(arithmeticStr){
    arithmeticStr = arithmeticStr.replace(/[^a-zA-Z0-9().+\-*/]/g, "");
    const legitExp = /^[0-9().+\-*/\s]+$/;
    if(!legitExp.test(arithmeticStr)){
      throw new Error("The arthemetic string is incorrect!")
    }
    const tempRes = eval(arithmeticStr);
    if (isNaN(tempRes) || !isFinite(tempRes)){
      throw new Error("The result is either infinte or NaN!")
    }
    this.result = tempRes;
  }
}

module.exports = Calculator;
