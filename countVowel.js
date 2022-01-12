// Given a string of words or phrases, write a php function to count the number of vowels 

const countWords = "vowels"

function countVowel(countWords) {
    let count = 0;

    for (let letter of countWords.toLowerCase()) {
        if (countWords.includes(letter)) {
            count++;
        }
    }

    return count
}

console.log(countVowel(countWords));