// program to check if the string is palindrome or not

function Palindrome(str) {

    // find the length of a string
    const len = string.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}

// take input
const string = prompt('Enter a string: ');

// call the function
const value = Palindrome(string);

console.log(value);
console.log("the string lenght is " + string.length);



//anagram

function anagram(string1, string2) {
	let word1 = string1.split('').sort().join('').toLowerCase();
    let word2 = string2.split('').sort().join('').toLowerCase();
  return word1 === word2;
}

console.log(anagram("javascript", "scriptjava"));
console.log(anagram("javascript", "sccripvaja"));
console.log(anagram("eva", "vae"));




//max occuring element

function maxoccur(str) {
  var value = {}
  for(let i = 0; i < str.length; i++) {
    if(value[str[i]]) {
      value[str[i]]++
    } else {
      value[str[i]] = 1
    }
  }
  let keys = Object.keys(value)
  let maxValue = -1, maxKey = ''
  for(let i = 0; i < keys.length; i++) {
    if(value[keys[i]] > maxValue) {
      maxValue = value[keys[i]]
      maxKey = keys[i]
    }
  }
  console.log(maxKey, maxValue)
}
maxoccur('helloooooooooo')

