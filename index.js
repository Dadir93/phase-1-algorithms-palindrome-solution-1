function isPalindrome(word) {
  function reverseString(input) {
    return input.split("").reverse().join("");
  }

  const reversedWord = reverseString(word);

  return word === reversedWord;
}

/* 
  Pseudocode:
  - Define a helper function reverseString(input) that takes a string as input and returns its reversed version.
    - Split the input string into an array of characters.
    - Reverse the array.
    - Join the reversed array into a string.
    - Return the reversed string.

  - In the main function isPalindrome():
    - Reverse the input string using the reverseString helper function.
    - Compare the reversed string to the original input.
    - Return true if they are the same, and false otherwise.

  Written explanation:
  The function isPalindrome takes a string as input and uses a helper function reverseString to reverse the input string. It then compares the reversed string to the original input. If the reversed string is the same as the input, the function returns true, indicating that the input is a palindrome. Otherwise, it returns false.

  isPalindrome("racecar") will return true because the reversed version of "racecar" is also "racecar".
  isPalindrome("robot") will return false because the reversed version of "robot" is "tobor".
*/

if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
