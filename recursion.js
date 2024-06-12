/** product: calculate the product of an array of numbers. */

function product(nums) {
  if(nums.length === 0) return 1;
  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  //check if the array is empty
  if(words.length === 0) return 0;
  //compare the first words with the longest word found in the rest of the array
  const longestWord = longest(words.slice(1));
  //returns the higher of the two values
  return Math.max(words[0].length, longestWord)
}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx=0, newStr="") {
  //stops when have gone through every letter
  if (idx >= str.length) return newStr;
  //adds characters to the current index
  newStr += str[idx];
  //skips the next character and passes through the string
  return everyOther(str, idx + 2, newStr);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if(str.length <= 1){
    return true;
  }
  //check if first and last character are the same
  if(str[0] !== str[str.length -1]){
    return false;
  }
  return isPalindrome(str.slice(1, -1));
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx=0) {
  if(idx == arr.length) return -1;
  //does this index have the value we're looking for 
  if(arr[idx] === val) return idx;
  //goes throught the array looking for the value 
  return findIndex(arr, val, idx +1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
if(str == ""){
  return "";
}
return str[str.length -1] + revString(str.slice(0, -1));
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let stringArr = [];
  for(let key in obj){
    if(typeof obj[key] === "string") stringArr.push(obj[key]);
    // ... spread operator
    if(typeof obj[key] === "object") stringArr.push(...gatherStrings(obj[key]));
  }
  return stringArr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left=0, right=arr.length) {
  //if the value is not found
  if(left > right){
    return -1;
  }

  let middle = Math.floor((right + left)/2);

  if(arr[middle] === val){
    return middle;
  }
  //value is on the left half
  if(arr[middle]>val){
    return binarySearch(arr, val, left, middle-1);
  }
  //value is on the right half 
  return binarySearch(arr, val, middle+1, right);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
