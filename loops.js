/* 
1. Declare a function named forLoop.
2. Function accepts parameter named array, whose value is array.
3. When call function, return add a string to the array 25 times.
*/
function forLoop(array) {
    for (let i = 0 ; i < 25; i++){
      if ( i === 1) {
        array.push("I am 1 strange loop");
      }
      else {
         array.push(`I am ${i} strange loops.`);
      }
    }
    return array;
}

/* 
1. Declare a function named whileLoop.
2. Function accepts parameter named number, whose value is number.
3. Using a while loop, count down (using console.log) from the passed in number to 0. Then return the string 'done'.
*/
function whileLoop(number) {
  while (number > 0) {
  console.log(--number);
  }
  return "done";
}

/* 
1. Declare a function named doWhileLoop.
2. Function accepts parameter named array, whose value is array.
3. Use the maybeTrue() function as the condition, and remove elements from the array until the array is empty 
4. Or until maybeTrue() returns false.
5. return the array.
*/
function doWhileLoop(array) {
  function maybeTrue() {return Math.random() >= 0.5 ;}

  do {array.shift();
  }
  while (array.length > 0 && maybeTrue());
  return array;
}

