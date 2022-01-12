// Given a  string of characters  as input, write a php  function  that returns it with the characters reversed 

const word = "reverse"

function reverseWord (word){
  return word.split("").reverse().join("")
}

console.log(reverseWord(word))

