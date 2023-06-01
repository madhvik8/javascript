{
    function printAscendingOrder(num1, num2, num3) {
    var numbers = [num1, num2, num3];
    numbers.sort(function(a, b) {
      return a - b;
    });
    
    console.log("Numbers in ascending order: " + numbers.join(", "));
  }
  
  // Example usage
  printAscendingOrder(3, 1, 2);
}
{
    // Three given numbers
const num1 = 7;
const num2 = 3;
const num3 = 9;

// Creating an array with the three numbers
const numbers = [num1, num2, num3];

// Sorting the array in ascending order
numbers.sort((a, b) => a - b);

// Printing the numbers in ascending order
console.log(numbers);
}
{
    // Three given numbers
const num1 = 7;
const num2 = 3;
const num3 = 9;

// Storing the numbers in an array
const numbers = [num1, num2, num3];

// Sorting the numbers in ascending order using a loop
for (let i = 0; i < numbers.length - 1; i++) {
  for (let j = 0; j < numbers.length - 1 - i; j++) {
    if (numbers[j] > numbers[j + 1]) {
      // Swapping the numbers
      const temp = numbers[j];
      numbers[j] = numbers[j + 1];
      numbers[j + 1] = temp;
    }
  }
}

// Printing the numbers in ascending order
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
}
  
  
  