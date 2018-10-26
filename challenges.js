// 1. In this simple assignment you are given a number and have to make it negative. 
// But maybe the number is already negative?
// Example:
// makeNegative(1); // return -1
// makeNegative(-5); // return -5
// makeNegative(0); // return 0
// makeNegative(0.12); // return -0.12

// Notes:

// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

// start your work here:
function makeNegative (number) {



    // write the code for your function here
    if (number > 0) {               //if the number is more than 0 then multiply it by negative one
        number = number*-1;
    }
    return number;

 
}
  
  // call your function here
    var number = makeNegative(500);
    console.log(number)
  
  // 2. Given an array of integers, return a new array with each value doubled.
  // For example:
  // [1, 2, 3] --> [2, 4, 6]
  // For the beginner, try to use the map method - it comes in very handy quite a lot so is a good one to know.


  var doubleArray = [5, 10, 15];
  
  // write your function here 

  function multipleArrayElement(doubleArray) {
    return doubleArray * 2
}

console.log(doubleArray)
  //I used Array.from - I found that it is simpler and more efficient in saving time so it outputs a new array by calling the outputArray, this contains a function within it

    let inputArray = [1, 2, 3]
    let outputArray = Array.from(inputArray, x => x *2) 



  // call your function here
    console.log(outputArray)
  
  // 3. You will be given an array (a) and a value (x). All you need to do is check whether the provided array contains the value.
  // Array can contain numbers or strings. X can be either. Return true if the array contains the value, false if not.
  var pets = ['cat', 'dog', 'snake'];
  // write your function here

  // I did not use the normal function --> instead, I just created my array and used console.log to check if it does contain
  
  // call your function here
  console.log(pets.includes('cat')); // expected output: true
  console.log(pets.includes('hamster')); // expected output: false
  
  // 4. Bonus Exercise 
  // Life isn't always easy as a small word amongst big words. If only they had a code warrior to help them out...
  
  // Your task is to make all words which are 3 characters or less into capitals. You should also remove any vowels from 'long' (4 characters or more) words.
  
  // For example:
  // "The quick brown fox jumps over the lazy dog"
  
  // Should become:
  // "THE qck brwn FOX jmps vr THE lzy DOG"
  
  // For the purposes of this exercise, mid-word punctuation counts towards the character limit of a word.
  // e.g: "it's / I'm" should become: "t's / I'M"