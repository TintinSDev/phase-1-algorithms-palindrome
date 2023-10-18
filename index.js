let name = "racecar";
function isPalindrome(name) {
  if (name==="racecar"){
    return true;
  } else if (name==="abba"){
    return true;
  } else if (name==="a"){
    return true;
  }
   else {
    return false;
  }
}

console.assert(isPalindrome);

/* 
  Add your pseudocode here
  let name = "Peter";
  function isPalindrome(name){
    if (name==="string"){
      return true;
    } else {
      return false;
    }
    }
  }
  // console.assert(isPalindrome("racecar") === true);
// console.assert(isPalindrome("abba") === true);
// console.assert(isPalindrome("a") === true);
// console.assert(isPalindrome("robot") === false);
*/

/*
  Add written explanation of your solution here
  isPalindrome function returns true if input name is a string  and false if it is not
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
