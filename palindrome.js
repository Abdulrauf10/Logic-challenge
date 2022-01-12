// A palindrome is a word or phrase that reads the same backward as forward. Write a php function that checks for this 

const word = "madam";

function checkPalindrome(word) {
    const arrayValues = word.split('');

    const reverseArrayValues = arrayValues.reverse();

    const reverseString = reverseArrayValues.join('');

    if(word == reverseString) {
        return 'It is a palindrome';
    }
    else {
        return 'It is not a palindrome';
    }
}

console.log(checkPalindrome(word))