var result=0;
var currentOp='';
var buffer=0;
resetCalc();
/**
 * Resets the state of the calculator and the display
 */
function resetCalc() {
   setDisplay('0');
   result=0;
   currentOp='';
   buffer=0;
}

/**
 * Sets the inner text of the div with id="output"
 * @param {String} str the string to set the inner text to
 */
function setDisplay(str){
document.getElementById('output').innerHTML=str;
}

/**
 * Returns the current result of the calculator
 * Hint: you can use a global variable for the result
 */
function getResult() {
   return result;
}

/**
 * Update the calculator state with the next number and sets the display
 * @param {Number} num the number that was pressed
 */
function pressNum(num){
    if(result!==0){
      result*=10;
      result+=num;
    }
    else{
      result=num;
    }
    if(Math.abs(result)>999999999){
      result=999999999;
    }
   setDisplay(result.toString());
}

/**
 * Operation is pressed, move the current result value to a temporary buffer and
 * set the current result to zero.
 * @param {String} op the operation pressed, either: +,-,*,/
 */
function pressOp(op) {
  if(currentOp!==''){
    currentOp=op;
  }
  else{
   buffer=result;
   result=0;
   currentOp=op;
   setDisplay(result.toString());
  }
}

/**
 * Should compute the current operation with the buffer value and current
 * result value based on the current operation. If there is no current
 * operation, do nothing.
 */
function pressEquals() {
  if(currentOp=='+'){
    result+=buffer;
    buffer=0;
    currentOp='';
    setDisplay(result.toString());
  }
  if(currentOp=='-'){
    result=buffer-result;
    buffer=0;
    currentOp='';
    setDisplay(result.toString());
  }
  if(currentOp=='*'){
    result*=buffer;
    buffer=0;
    currentOp='';
    setDisplay(result.toString());
  }
  if(currentOp=='/'){
    if(buffer!==0 && result!==0){
      result=Math.floor(buffer/result);
      buffer=0;
      currentOp='';
      setDisplay(result.toString());
    }
    else{
      result=0;
      buffer=0;
      currentOp='';
      setDisplay("ERROR");
    }
  }
  if(Math.abs(result)>999999999){
    result=999999999;
    buffer=0;
    setDisplay(result.toString());
  }
}