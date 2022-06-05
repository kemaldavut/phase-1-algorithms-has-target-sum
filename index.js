function hasTargetSum(array, target) {
  // Write your algorithm here
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      sum = array[i] + array[j];
      if (sum === target) {
        return true;
      }
      }
    } 
    return false;  
  }




/* 
  Write the Big O time complexity of your function here
  Big O: O(n^2) 
*/

/* 
  Add your pseudocode here
  Psuedocode:
  1- create a variable called sum and set it to 0
  2- create a for loop that iterates through the array
  3- create a nested for loop that iterates through the array
  4- create a variable called sum and set it to the value of the first index + the value of the second index
  5- if the sum is equal to the target, return true
  6- else return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
