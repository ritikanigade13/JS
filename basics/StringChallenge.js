function StringChallenge(sen) {
  // __define-ocg__ Remove punctuation and split the string into words
  const words = sen.replace(/[^\w\s]/g, "").split(" ");
  let varOcg = "";

  for (let word of words) {
    if (word.length > varOcg.length) {
      varOcg = word;
    }
  }

  return varOcg;
}

function intersperseWithToken(word, token) {
  let interspersedString = "";
  const maxLength = Math.max(word.length, token.length);

  for (let i = 0; i < maxLength; i++) {
    if (i < word.length) {
      interspersedString += word[i];
    }
    if (i < token.length) {
      interspersedString += token[i];
    }
  }

  return interspersedString;
}

const sen = "fun&!! time";
const challengeToken = "5z3qag9wi24";

const longestWord = StringChallenge(sen);
const result = intersperseWithToken(longestWord, challengeToken);

console.log(result); // Output: t5izm3eqag9wi24

// Test case 2
const sen2 = "I love dogs";
const longestWord2 = StringChallenge(sen2);
const result2 = intersperseWithToken(longestWord2, challengeToken);

console.log(result2); // Output: l5ozv3eqag9wi24
